'use client';

import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { CampusLocation } from '@/types/mapTypes';

// Marker Icon Fix for Next.js
const customIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

interface CampusMapProps {
  locations: CampusLocation[];
  routeCoords: [number, number][];
}

// রুট সিলেক্ট করলে ম্যাপ অটো-জুম হয়ে পুরো রুট সামনে আনবে
function MapBoundsUpdater({ coords }: { coords: [number, number][] }) {
  const map = useMap();
  useEffect(() => {
    if (coords.length > 0) {
      const bounds = L.latLngBounds(coords);
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [coords, map]);
  return null;
}

export default function CampusMap({ locations, routeCoords }: CampusMapProps) {
  const juCenter: [number, number] = [23.8824, 90.2671];

  return (
    <MapContainer
      center={juCenter}
      zoom={15}
      scrollWheelZoom={true}
      className="w-full h-full z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* JU Locations Markers */}
      {locations.map((loc) => (
        <Marker key={loc.id} position={[loc.lat, loc.lng]} icon={customIcon}>
          <Popup>
            <div className="font-sans">
              <h3 className="font-bold text-sm text-gray-800">{loc.bnName}</h3>
              <p className="text-xs text-gray-500">{loc.name}</p>
            </div>
          </Popup>
        </Marker>
      ))}

      {/* Road Route Polyline */}
      {routeCoords.length > 0 && (
        <>
          <Polyline positions={routeCoords} color="#2563eb" weight={5} opacity={0.8} />
          <MapBoundsUpdater coords={routeCoords} />
        </>
      )}
    </MapContainer>
  );
}