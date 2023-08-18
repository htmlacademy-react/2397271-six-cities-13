import { FetchStatus, NameSpace } from '../../const';
import { makeFakeOffer } from '../../utils/mocks/offer';
import { makeFakeOffers } from '../../utils/mocks/offers';
import { selectFetchOfferStatus, selectFetchOffersNearbyStatus, selectOfferData, selectOffersData, selectOffersNearbyData } from './selectors';

describe('Offers selectors', () => {
  const state = {
    [NameSpace.Offers]: {
      offers: makeFakeOffers(),
      fetchOffersStatus: FetchStatus.Idle,
      offer: makeFakeOffer(),
      fetchOfferStatus: FetchStatus.Idle,
      offersNearby: makeFakeOffers(),
      fetchOffersNearbyStatus: FetchStatus.Idle,
    }
  };

  it('should return offers data from state', () => {
    const { offers } = state[NameSpace.Offers];
    const result = selectOffersData(state);
    expect(result).toEqual(offers);
  });

  it('should return offersFetchStatus from state', () => {
    const { fetchOfferStatus } = state[NameSpace.Offers];
    const result = selectFetchOfferStatus(state);
    expect(result).toEqual(fetchOfferStatus);
  });

  it('should return offersNearby data from state', () => {
    const { offersNearby } = state[NameSpace.Offers];
    const result = selectOffersNearbyData(state);
    expect(result).toEqual(offersNearby);
  });

  it('should return fetchOffersNearbyStatus from state', () => {
    const { fetchOffersNearbyStatus } = state[NameSpace.Offers];
    const result = selectFetchOffersNearbyStatus(state);
    expect(result).toEqual(fetchOffersNearbyStatus);
  });

  it('should return offer data from state', () => {
    const { offer } = state[NameSpace.Offers];
    const result = selectOfferData(state);
    expect(result).toEqual(offer);
  });

  it('should return fetchOfferStatus from state', () => {
    const { fetchOfferStatus } = state[NameSpace.Offers];
    const result = selectFetchOfferStatus(state);
    expect(result).toEqual(fetchOfferStatus);
  });
});
