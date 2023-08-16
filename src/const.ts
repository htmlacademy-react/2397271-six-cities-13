import {CityNameType} from './types/location';

export enum AppRoute {
  root = '/',
  offer = '/offer/:id',
  login = '/login',
  favorites = '/favorites',
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
  default = 'Popular',
  priceLowToHigh = 'Price: low to high',
  priceHighToLow = 'Price: high to low',
  ratingHighToLow = 'Top rated first'
}

export const DEFAULT_OFFER_SORT = 'Popular';

export const RATING_MULTIPLIER = 20 as const;

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export const NEARBY_OFFERS_COUNT = 3;

export const MAP_LAYER_URL = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';

export enum CommentTextLength {
  min = 50,
  max = 300,
}

export enum CommentErrors {
  tooLongText = `Max comment length is ${CommentTextLength.max}`,
  tooShortText = `Min comment length is ${CommentTextLength.min}`,
  emptyRating = 'Please select the rating ',
}

export const LAYER_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

export const ReviewDateView = {
  system: 'YYYY-MM-DD',
  displayed: 'MMMM YYYY',
};

export const MAX_REVIEW_AMOUNT = 10;

export enum APIRoute {
  Offers = '/offers',
  Favorite = '/favorite',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout'
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
}

export enum ValidateErrors {
  IncorrectEmail = 'Incorrect email',
  ShortPassword = 'Password is too short',
  NoNumberPassword = 'Password must contains number',
}
