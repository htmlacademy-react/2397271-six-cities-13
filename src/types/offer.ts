import {CityType, LocationType} from './location';
import {OfferSortList} from '../const';
import { UserType } from './user';

export interface OfferPreviewType {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  city: CityType;
  location: LocationType;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
}

export interface OfferType extends Omit<OfferPreviewType, 'previewImage'> {
  images: string[];
  goods: string[];
  host: UserType;
  bedrooms: number;
  maxAdults: number;
}

export interface ReviewType {
  id: string;
  comment: string;
  date: string;
  rating: number;
  user: UserType;
}

export interface ReviewFormType {
  rating: number;
  comment: string;
  id?: string;
}

export type OfferSortType = keyof OfferSortList;

export type FavoriteData = {
  offerId: string;
  status: number;
};
