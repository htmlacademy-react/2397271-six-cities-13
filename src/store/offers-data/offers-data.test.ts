import {FetchStatus} from '../../const';
import {expect} from 'vitest';
import {offersSlice} from './offers-data';
import {fetchOfferAction, fetchOffersAction, fetchOffersNearbyAction} from '../api-action';
import {makeFakeOffers} from '../../utils/mocks/offers';
import {makeFakeOffer} from '../../utils/mocks/offer';

vi.mock('../root-reducer', () => ({ rootReducer: vi.fn() }));

describe('OffersProcess Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      offers: [],
      fetchOffersStatus: FetchStatus.Idle,
      offer: null,
      fetchOfferStatus: FetchStatus.Idle,
      offersNearby: [],
      fetchOffersNearbyStatus: FetchStatus.Idle,
    };

    const result = offersSlice.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      offers: [],
      fetchOffersStatus: FetchStatus.Idle,
      offer: null,
      fetchOfferStatus: FetchStatus.Idle,
      offersNearby: [],
      fetchOffersNearbyStatus: FetchStatus.Idle,
    };

    const result = offersSlice.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  describe('fetch offers', () => {
    it('should load array of offers and set fetchOffersStatus to FetchStatus.Success on fetchOffersAction.fulfilled', () => {
      const mockOffers = makeFakeOffers();
      const expectedState = {
        offers: mockOffers,
        fetchOffersStatus: FetchStatus.Success,
        offer: null,
        fetchOfferStatus: FetchStatus.Idle,
        offersNearby: [],
        fetchOffersNearbyStatus: FetchStatus.Idle,
      };

      const result = offersSlice.reducer(undefined, fetchOffersAction.fulfilled(mockOffers, '', undefined));

      expect(result).toEqual(expectedState);
    });

    it('should set fetchOffersStatus to FetchStatus.Idle on fetchOffersAction.pending', () => {
      const expectedStatus = FetchStatus.Idle;

      const result = offersSlice.reducer(undefined, fetchOffersAction.pending);

      expect(result.fetchOffersStatus).toBe(expectedStatus);
    });

    it('should set fetchOffersStatus to FetchStatus.Error on fetchOffersAction.rejected', () => {
      const expectedStatus = FetchStatus.Error;

      const result = offersSlice.reducer(undefined, fetchOffersAction.rejected);

      expect(result.fetchOffersStatus).toBe(expectedStatus);
    });
  });

  describe('fetch offer', () => {
    it('should load offer and set fetchOfferStatus to FetchStatus.Success on fetchOfferAction.fulfilled', () => {
      const mockOffers = makeFakeOffer();
      const expectedState = {
        offers: [],
        fetchOffersStatus: FetchStatus.Idle,
        offer: mockOffers,
        fetchOfferStatus: FetchStatus.Success,
        offersNearby: [],
        fetchOffersNearbyStatus: FetchStatus.Idle,
      };

      const result = offersSlice.reducer(undefined, fetchOfferAction.fulfilled(mockOffers, '', 'offer-id'));

      expect(result).toEqual(expectedState);
    });

    it('should set fetchOfferStatus to FetchStatus.Idle on fetchOfferAction.pending', () => {
      const expectedStatus = FetchStatus.Idle;

      const result = offersSlice.reducer(undefined, fetchOfferAction.pending);

      expect(result.fetchOfferStatus).toBe(expectedStatus);
    });

    it('should set fetchOfferStatus to FetchStatus.Error on fetchOfferAction.rejected', () => {
      const expectedStatus = FetchStatus.Error;

      const result = offersSlice.reducer(undefined, fetchOfferAction.rejected);

      expect(result.fetchOfferStatus).toBe(expectedStatus);
    });
  });

  describe('fetch offersNearby', () => {
    it('should load offersNearby and set fetchOffersNearbyStatus to FetchStatus.Success on fetchOffersNearbyAction.fulfilled', () => {
      const mockOffers = makeFakeOffers();
      const expectedState = {
        offers: [],
        fetchOffersStatus: FetchStatus.Idle,
        offer: null,
        fetchOfferStatus: FetchStatus.Idle,
        offersNearby: mockOffers,
        fetchOffersNearbyStatus: FetchStatus.Success,
      };

      const result = offersSlice.reducer(undefined, fetchOffersNearbyAction.fulfilled(mockOffers, '', 'offer-id'));

      expect(result).toEqual(expectedState);
    });

    it('should set fetchOffersNearbyStatus to FetchStatus.Idle on fetchOffersNearbyAction.pending', () => {
      const expectedStatus = FetchStatus.Idle;

      const result = offersSlice.reducer(undefined, fetchOffersNearbyAction.pending);

      expect(result.fetchOffersNearbyStatus).toBe(expectedStatus);
    });

    it('should set fetchOffersNearbyStatus to FetchStatus.Error on fetchOffersNearbyAction.rejected', () => {
      const expectedStatus = FetchStatus.Error;

      const result = offersSlice.reducer(undefined, fetchOffersNearbyAction.rejected);

      expect(result.fetchOffersNearbyStatus).toBe(expectedStatus);
    });
  });
});
