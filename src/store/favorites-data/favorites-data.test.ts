import {FetchStatus} from '../../const';
import {favoritesSlice} from './favorites-data';
import {expect} from 'vitest';
import {makeFakeOffers} from '../../utils/mocks/offers';
import {offersSlice} from '../offers-data/offers-data';
import {changeFavoritesAction, fetchFavoritesAction, fetchOffersAction} from '../api-action';

vi.mock('../root-reducer', () => ({ rootReducer: vi.fn() }));

describe('favoritesSlice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      favorites: [],
      fetchFavoritesStatus: FetchStatus.Idle,
      changeFavoritesStatus: FetchStatus.Success,
    };

    const result = favoritesSlice.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const expectedState = {
      favorites: [],
      fetchFavoritesStatus: FetchStatus.Idle,
      changeFavoritesStatus: FetchStatus.Success,
    };

    const result = favoritesSlice.reducer(undefined, expectedState);

    expect(result).toEqual(expectedState);
  });

  describe('fetchFavoritesAction', () => {
    it('should load array of favoriteOffers and set fetchFavoritesStatus to FetchStatus.Success on fetchFavoritesAction.fulfilled', () => {
      const mockOffers = makeFakeOffers(true);
      const expectedState = {
        favorites: mockOffers,
        fetchFavoritesStatus: FetchStatus.Success,
        changeFavoritesStatus: FetchStatus.Success,
      };

      const result = favoritesSlice.reducer(undefined, fetchFavoritesAction.fulfilled(mockOffers));

      expect(result).toEqual(expectedState);
    });

    it('should set fetchFavoritesStatus to FetchStatus.Idle on fetchFavoritesAction.pending', () => {
      const expectedStatus = FetchStatus.Idle;

      const result = favoritesSlice.reducer(undefined, fetchFavoritesAction.pending());

      expect(result.fetchFavoritesStatus).toBe(expectedStatus);
    });

    it('should set fetchFavoritesStatus to FetchStatus.Error on fetchOffersAction.rejected', () => {
      const expectedStatus = FetchStatus.Error;

      const result = favoritesSlice.reducer(undefined, fetchFavoritesAction.rejected());

      expect(result.fetchFavoritesStatus).toBe(expectedStatus);
    });
  });

  describe('changeFavoritesAction', () => {
    it('should set changeFavoritesStatus to FetchStatus.Success on changeFavoritesAction.fulfilled', () => {
      const mockOffers = makeFakeOffers(true);
      const expectedState = FetchStatus.Success;

      const result = favoritesSlice.reducer(undefined, changeFavoritesAction.fulfilled(mockOffers));

      expect(result.changeFavoritesStatus).toEqual(expectedState);
    });

    it('should set fetchFavoritesStatus to FetchStatus.Idle on changeFavoritesAction.pending', () => {
      const expectedStatus = FetchStatus.Idle;

      const result = favoritesSlice.reducer(undefined, changeFavoritesAction.pending());

      expect(result.changeFavoritesStatus).toBe(expectedStatus);
    });

    it('should set fetchFavoritesStatus to FetchStatus.Error on changeFavoritesAction.rejected', () => {
      const expectedStatus = FetchStatus.Error;

      const result = favoritesSlice.reducer(undefined, changeFavoritesAction.rejected());

      expect(result.changeFavoritesStatus).toBe(expectedStatus);
    });
  });
});
