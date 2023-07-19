export const appRoute = {
  root: '/',
  offer: '/offer/:id',
  login: '/login',
  favorites: '/favorites',
} as const;

export const cities:ReadonlyArray<string> = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
