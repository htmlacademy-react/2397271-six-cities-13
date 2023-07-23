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
  host: {
    isPro: boolean;
    name: string;
    avatarUrl: string;
  };
  bedrooms: number;
  maxAdults: number;
}

