export const appRoute = {
  root: {
    hasHeader: true,
    hasFooter: false,
    path: '/',
  },
  offer: {
    hasHeader: true,
    hasFooter: false,
    path: '/offer/:id',
  },
  login: {
    hasHeader: true,
    hasFooter: false,
    path: '/login',
  },
  favorites: {
    hasHeader: true,
    hasFooter: false,
    path: '/favorites',
  },
} as const;

export const cities:ReadonlyArray<string> = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
