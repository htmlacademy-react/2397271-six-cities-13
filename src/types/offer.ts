import {CityType, LocationType} from './location';
import {OfferSortList} from '../const';

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
}

export interface OfferType extends Omit<OfferPreviewType, 'previewImage'> {
  images: string[];
  goods: string[];
  host: UserType;
  bedrooms: number;
  maxAdults: number;
}


export interface UserType {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export interface CommentType {
  id: string;
  comment: string;
  date: string;
  rating: number;
  user: UserType;
}


export type OfferSortType = keyof OfferSortList;
