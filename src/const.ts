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

export const RatingTitles = [
  'perfect',
  'good',
  'not bad',
  'badly',
  'terribly'
] as const;

export const RATING_MULTIPLIER = 20 as const;
