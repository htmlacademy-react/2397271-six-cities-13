import {CityNameType} from './types/location';

export enum AppRoute {
  Root = '/',
  Offer = '/offer/:id',
  Login = '/login',
  Favorites = '/favorites',
}

export const Cities = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'
] as const;

export const DEFAULT_CITY: CityNameType = 'Paris' as const;

export const RatingTitles = [
  'perfect',
  'good',
  'not bad',
  'badly',
  'terribly'
] as const;

export enum OfferSortList {
  Default = 'Popular',
  PriceLowToHigh = 'Price: low to high',
  PriceHighToLow = 'Price: high to low',
  RatingHighToLow = 'Top rated first'
}

export const DEFAULT_OFFER_SORT = 'Popular';

export const RATING_MULTIPLIER = 20 as const;

export const URL_MARKER_DEFAULT = '/img/pin.svg';

export const URL_MARKER_CURRENT = '/img/pin-active.svg';

export const NEARBY_OFFERS_COUNT = 3;

export const MAP_LAYER_URL = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';

export enum CommentTextLength {
  Min = 50,
  Max = 300,
}

export const LAYER_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

export const ReviewDateView = {
  System: 'YYYY-MM-DD',
  Displayed: 'MMMM YYYY',
};

export const MAX_REVIEW_AMOUNT = 10;

export enum APIRoute {
  Offers = '/offers',
  Favorite = '/favorite',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout',
  Nearby = '/nearby',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum FetchStatus {
  Idle = 'IDLE',
  Success = 'SUCCESS',
  Error = 'ERROR',
}

export enum NameSpace {
  App = 'APP',
  User = 'USER',
  Offers = 'OFFERS',
  Reviews = 'REVIEWS',
  Favorites = 'FAVORITES'
}

export const ReviewState = {
  rating: 0,
  comment: '',
};

export enum FavoriteState {
  IsFavorite = 1,
  NotFavorite = 0,
}

export const OFFER_CARD_TEST_ID = 'offer-card-container';
