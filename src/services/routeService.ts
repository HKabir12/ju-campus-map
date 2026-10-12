import { RouteInfo } from '@/types/mapTypes';

export async function fetchRoute(
  startLat: number,
  startLng: number,
  endLat: number,
  endLng: number
): Promise<RouteInfo | null> {
  try {
    // 🚶 OpenStreetMap Foot/Walking Routing API (ক্যাম্পাসের ভেতরের হাঁটার রাস্তার সঠিক তথ্য দেয়)
    const url = `https://routing.openstreetmap.de/routed-foot/route/v1/foot/${startLng},${startLat};${endLng},${endLat}?overview=full&geometries=geojson`;

    const response = await fetch(url);
    const data = await response.json();

    if (!data.routes || data.routes.length === 0) return null;

    const route = data.routes[0];
    const distanceKm = route.distance / 1000; // মিটারকে কিলোমিটারে রূপান্তর

    // OSRM Foot Engine সরাসরি হাঁটার সঠিক সময় (Duration in Seconds) দিয়ে দেয়
    const walkSeconds = route.duration;
    const walkMin = Math.round(walkSeconds / 60);

    // রিকশা (~10 km/h) এবং ই-কার্ট (~15 km/h) এর বাস্তবসম্মত সময় হিসাব
    const rickshawMin = Math.max(1, Math.round((distanceKm / 10) * 60));
    const autoCartMin = Math.max(1, Math.round((distanceKm / 15) * 60));

    // Coordinates format [lat, lng] Leaflet-এর জন্য
    const coordinates: [number, number][] = route.geometry.coordinates.map(
      (coord: [number, number]) => [coord[1], coord[0]]
    );

    return {
      distanceKm,
      coordinates,
      times: {
        walk: walkMin < 1 ? '১ মিনিটের কম' : `${walkMin} মিনিট`,
        rickshaw: `${rickshawMin} মিনিট`,
        autoCart: `${autoCartMin} মিনিট`,
      },
    };
  } catch (error) {
    console.error('Route calculation error:', error);
    return null;
  }
}