// 'use client';

// import { useState, useEffect, useCallback } from 'react';
// import { GoogleMap, useJsApiLoader, DirectionsRenderer, MarkerF } from '@react-google-maps/api';
// import { CampusLocation, RouteInfo } from '@/types/mapTypes';

// const containerStyle = {
//   width: '100%',
//   height: '100%',
// };

// const juCenter = { lat: 23.8824, lng: 90.2671 };

// interface JUGoogleMapProps {
//   fromLoc: CampusLocation;
//   toLoc: CampusLocation;
//   onRouteCalculated: (info: RouteInfo) => void;
// }

// export default function JUGoogleMap({ fromLoc, toLoc, onRouteCalculated }: JUGoogleMapProps) {
//   const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
//   });

//   const [directions, setDirections] = useState<google.maps.DirectionsResult | null>(null);

//   const calculateGoogleRoute = useCallback(() => {
//     if (!isLoaded || typeof window === 'undefined' || !window.google) return;

//     const directionsService = new window.google.maps.DirectionsService();

//     // Google Walking Directions for accurate campus internal roads
//     directionsService.route(
//       {
//         origin: { lat: fromLoc.lat, lng: fromLoc.lng },
//         destination: { lat: toLoc.lat, lng: toLoc.lng },
//         travelMode: window.google.maps.TravelMode.WALKING,
//       },
//       (result, status) => {
//         if (status === window.google.maps.DirectionsStatus.OK && result) {
//           setDirections(result);

//           const route = result.routes[0].legs[0];
//           const distanceInMeters = route.distance?.value || 0;
//           const distanceKm = distanceInMeters / 1000;

//           // Google Maps-এর আসল Walking Duration
//           const walkSeconds = route.duration?.value || 0;
//           const walkMin = Math.round(walkSeconds / 60);

//           // রিকশা (~10 km/h) ও ই-কার্ট (~15 km/h) বাস্তবসম্মত হিসাব
//           const rickshawMin = Math.max(1, Math.round((distanceKm / 10) * 60));
//           const autoCartMin = Math.max(1, Math.round((distanceKm / 15) * 60));

//           onRouteCalculated({
//             distanceKm,
//             coordinates: [],
//             times: {
//               walk: `${walkMin} মিনিট`,
//               rickshaw: `${rickshawMin} মিনিট`,
//               autoCart: `${autoCartMin} মিনিট`,
//             },
//           });
//         }
//       }
//     );
//   }, [isLoaded, fromLoc, toLoc, onRouteCalculated]);

//   useEffect(() => {
//     calculateGoogleRoute();
//   }, [calculateGoogleRoute]);

//   if (!isLoaded) {
//     return <div className="w-full h-full flex items-center justify-center bg-gray-100">Google Map লোড হচ্ছে...</div>;
//   }

//   return (
//     <GoogleMap
//       mapContainerStyle={containerStyle}
//       center={juCenter}
//       zoom={15}
//       options={{
//         zoomControl: true,
//         streetViewControl: false,
//         mapTypeControl: false,
//       }}
//     >
//       {/* Route Direction Line */}
//       {directions && (
//         <DirectionsRenderer
//           directions={directions}
//           options={{
//             polylineOptions: {
//               strokeColor: '#2563eb',
//               strokeWeight: 5,
//               strokeOpacity: 0.8,
//             },
//           }}
//         />
//       )}

//       {/* Origin Marker */}
//       <MarkerF position={{ lat: fromLoc.lat, lng: fromLoc.lng }} label="A" />
      
//       {/* Destination Marker */}
//       <MarkerF position={{ lat: toLoc.lat, lng: toLoc.lng }} label="B" />
//     </GoogleMap>
//   );
// }