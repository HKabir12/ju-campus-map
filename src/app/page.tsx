'use client';

import { useState, useEffect } from 'react';
import DynamicCampusMap from '@/components/DynamicMap';
import LocationLine from '@/components/LocationLine';
import TransportCard from '@/components/TransportCard';
import { JU_LOCATIONS } from '@/data/juLocations';
import { CampusLocation, RouteInfo } from '@/types/mapTypes';
import { fetchRoute } from '@/services/routeService';
import { Footprints, Bike, Zap, Navigation, MapPin, Locate } from 'lucide-react';

export default function HomePage() {
  const [fromLoc, setFromLoc] = useState<CampusLocation>(JU_LOCATIONS[0]);
  const [toLoc, setToLoc] = useState<CampusLocation>(JU_LOCATIONS[2]);
  const [routeInfo, setRouteInfo] = useState<RouteInfo | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function updateRoute() {
      if (!fromLoc || !toLoc) return;
      setLoading(true);
      const data = await fetchRoute(fromLoc.lat, fromLoc.lng, toLoc.lat, toLoc.lng);
      setRouteInfo(data);
      setLoading(false);
    }
    updateRoute();
  }, [fromLoc, toLoc]);

  const handleGPSLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const userLocation: CampusLocation = {
            id: 'user_gps',
            name: 'Current Location',
            bnName: '📍 আমার অবস্থান (GPS)',
            category: 'spot',
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          };
          setFromLoc(userLocation);
        },
        () => alert('GPS লোকেশন পাওয়া যায়নি!')
      );
    }
  };

  return (
    <main className="relative w-full h-screen flex flex-col md:flex-row overflow-hidden font-sans">
      <div className="w-full md:w-96 bg-white z-10 p-5 shadow-xl flex flex-col justify-between overflow-y-auto max-h-[50vh] md:max-h-full border-r">
        <div className="space-y-4">
          <div className="flex items-center space-x-2 border-b pb-3">
            <Navigation className="w-6 h-6 text-blue-600" />
            <h1 className="text-xl font-bold text-gray-800">JU Route Planner</h1>
          </div>

          <LocationLine fromName={fromLoc.bnName} toName={toLoc.bnName} />

          <div className="space-y-1">
            <label className="text-xs font-semibold text-gray-500 uppercase">কোথা থেকে (Start)</label>
            <div className="flex gap-2">
              <select
                className="w-full p-2.5 bg-gray-50 border rounded-lg text-sm text-gray-800 focus:ring-2 focus:ring-blue-500"
                value={fromLoc.id}
                onChange={(e) => {
                  const loc = JU_LOCATIONS.find((l) => l.id === e.target.value);
                  if (loc) setFromLoc(loc);
                }}
              >
                {fromLoc.id === 'user_gps' && <option value="user_gps">{fromLoc.bnName}</option>}
                {JU_LOCATIONS.map((loc) => (
                  <option key={loc.id} value={loc.id}>{loc.bnName}</option>
                ))}
              </select>
              <button
                onClick={handleGPSLocation}
                className="px-3 bg-blue-50 text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-100"
              >
                <Locate className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-gray-500 uppercase">কোথায় যাবেন (Destination)</label>
            <select
              className="w-full p-2.5 bg-gray-50 border rounded-lg text-sm text-gray-800 focus:ring-2 focus:ring-blue-500"
              value={toLoc.id}
              onChange={(e) => {
                const loc = JU_LOCATIONS.find((l) => l.id === e.target.value);
                if (loc) setToLoc(loc);
              }}
            >
              {JU_LOCATIONS.map((loc) => (
                <option key={loc.id} value={loc.id}>{loc.bnName}</option>
              ))}
            </select>
          </div>

          {loading ? (
            <p className="text-sm text-gray-500 text-center py-4">দূরত্ব হিসাব করা হচ্ছে...</p>
          ) : routeInfo ? (
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between p-3 bg-blue-50 border border-blue-100 rounded-lg">
                <span className="text-sm font-medium text-blue-800 flex items-center gap-1">
                  <MapPin className="w-4 h-4" /> সঠিক দূরত্ব:
                </span>
                <span className="text-base font-bold text-blue-900">{routeInfo.distanceKm.toFixed(2)} কি.মি.</span>
              </div>

              <div className="grid grid-cols-1 gap-2">
                <TransportCard
                  title=" হেঁটে"
                  time={routeInfo.times.walk}
                  icon={<Footprints className="w-4 h-4 text-green-600" />}
                  bgColor="bg-green-50"
                  borderColor="border-green-200"
                />
                <TransportCard
                  title=" রিকশা"
                  time={routeInfo.times.rickshaw}
                  icon={<Bike className="w-4 h-4 text-amber-600" />}
                  bgColor="bg-amber-50"
                  borderColor="border-amber-200"
                />
                <TransportCard
                  title=" ই-কার্ট / অটো"
                  time={routeInfo.times.autoCart}
                  icon={<Zap className="w-4 h-4 text-blue-600" />}
                  bgColor="bg-blue-50"
                  borderColor="border-blue-200"
                />
              </div>
            </div>
          ) : null}
        </div>
      </div>

      <div className="flex-1 h-full w-full">
        <DynamicCampusMap
          locations={JU_LOCATIONS}
          routeCoords={routeInfo ? routeInfo.coordinates : []}
        />
      </div>
    </main>
  );
}