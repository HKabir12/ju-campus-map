export type LocationCategory = 'gate' | 'academic' | 'hall' | 'admin' | 'spot';

export interface CampusLocation {
  id: string;
  name: string;
  bnName: string;
  category: LocationCategory;
  lat: number;
  lng: number;
}

export interface RouteInfo {
  distanceKm: number;
  coordinates: [number, number][]; 
  times: {
    walk: string;
    rickshaw: string;
    autoCart: string;
  };
}