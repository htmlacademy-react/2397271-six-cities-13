import {Cities} from '../const';

export interface LocationType {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type CityNameType = typeof Cities[number];

export interface CityType {
  name: CityNameType;
  location: LocationType;
}
