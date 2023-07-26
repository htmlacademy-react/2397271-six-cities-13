import {OfferSortType} from './types/offer';

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

export const DEFAULT_CITY:typeof Cities[number] = 'Paris' as const;

export const RatingTitles = [
  'perfect',
  'good',
  'not bad',
  'badly',
  'terribly'
] as const;

export const OfferSortList = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'] as const;

export const DEFAULT_OFFER_SORT:OfferSortType = 'Popular';

export const RATING_MULTIPLIER = 20 as const;

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export const NEARBY_OFFERS_COUNT = 3;

export const MAP_LAYER_URL = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
