import { RouteInfo } from '@/types/mapTypes';

export async function fetchRoute(
  startLat: number,
  startLng: number,
  endLat: number,
  endLng: number
): Promise<RouteInfo | null> {
  try {
    // OSRM API call (returns full geometries for road coordinates)
    const url = `https://router.project-osrm.org/route/v1/driving/${startLng},${startLat};${endLng},${endLat}?overview=full&geometries=geojson`;
    
    const response = await fetch(url);
    const data = await response.json();

    if (!data.routes || data.routes.length === 0) return null;

    const route = data.routes[0];
    const distanceInMeters = route.distance;
    const distanceKm = distanceInMeters / 1000;

    // GeoJSON [lng, lat] -> Leaflet Format [lat, lng]
    const coordinates: [number, number][] = route.geometry.coordinates.map(
      (coord: [number, number]) => [coord[1], coord[0]]
    );

    // Calculate times (Speed: Walk 4.5km/h, Rickshaw 10km/h, Auto Cart 15km/h)
    const walkMin = Math.round((distanceKm / 4.5) * 60);
    const rickshawMin = Math.round((distanceKm / 10) * 60);
    const autoCartMin = Math.round((distanceKm / 15) * 60);

    return {
      distanceKm,
      coordinates,
      times: {
        walk: walkMin < 1 ? '১ মি. কম' : `${walkMin} মিনিট`,
        rickshaw: rickshawMin < 1 ? '১ মি. কম' : `${rickshawMin} মিনিট`,
        autoCart: autoCartMin < 1 ? '১ মি. কম' : `${autoCartMin} মিনিট`,
      },
    };
  } catch (error) {
    console.error('Route fetching error:', error);
    return null;
  }
}