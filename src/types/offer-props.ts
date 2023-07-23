import {CityProps, LocationProps} from './location';

export interface OfferPreviewProps {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  city: CityProps;
  location: LocationProps;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
}

export interface OfferProps extends Omit<OfferPreviewProps, 'previewImage'> {
  images: string[];
  goods: string[];
  host: UserProps;
  bedrooms: number;
  maxAdults: number;
}

export interface UserProps {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export interface CommentProps {
  id: string;
  comment: string;
  date: string;
  rating: number;
  user: UserProps;
}
