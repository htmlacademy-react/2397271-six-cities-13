export enum AppRoute {
  root = '/',
  offer = '/offer/:id',
  login = '/login',
  favorites = '/favorites',
}

export const cities = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'
] as const;
