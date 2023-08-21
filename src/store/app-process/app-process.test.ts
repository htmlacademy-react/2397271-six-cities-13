import { Cities, DEFAULT_CITY, DEFAULT_OFFER_SORT, OfferSortList } from '../../const';
import { appSlice, changeCity, changeSort } from './app-process';

describe('AppProcess Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      sort: DEFAULT_OFFER_SORT,
      city: DEFAULT_CITY,
    };

    const result = appSlice.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      sort: DEFAULT_OFFER_SORT,
      city: DEFAULT_CITY,
    };

    const result = appSlice.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should change sort on "changeSort" action', () => {
    const initialState = {
      sort: DEFAULT_OFFER_SORT,
      city: DEFAULT_CITY,
    };
    const expectedSort = OfferSortList.PriceHighToLow;

    const result = appSlice.reducer(initialState, changeSort({sort: expectedSort}));

    expect(result['sort']).toEqual(expectedSort);
  });

  it('should change city on "changeCity" action', () => {
    const initialState = {
      sort: DEFAULT_OFFER_SORT,
      city: DEFAULT_CITY,
    };
    const expectedCity = Cities[3];

    const result = appSlice.reducer(initialState, changeCity({city: expectedCity}));

    expect(result['city']).toBe(expectedCity);
  });
});
