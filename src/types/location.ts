
export interface LocationProps {
  latitude: number;
  longitude: number;
  zoom: number;
}

export interface CityProps {
  name: string;
  location: LocationProps;
}

export type MarkerProps = Omit<CityProps, 'location:zoom'>;
