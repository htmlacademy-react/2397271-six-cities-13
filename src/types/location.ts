
export interface LocationType {
  latitude: number;
  longitude: number;
  zoom: number;
}

export interface CityType {
  name: string;
  location: LocationType;
}

export type MarkerProps = Omit<CityType, 'location:zoom'>;
