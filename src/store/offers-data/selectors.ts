import {State} from '../../types/root-state';
import {NameSpace} from '../../const';
import {OfferPreviewType} from '../../types/offer';
import {CityNameType} from '../../types/location';
import {sortOffers} from '../../helpers/offers';
import {createSelector} from 'reselect';
import {selectCity, selectSort} from '../app-process/selectors';


export const selectOffersData = (state: Pick<State, typeof NameSpace.Offers>) => state[NameSpace.Offers].offers;
export const selectFetchOffersStatus = (state: Pick<State, typeof NameSpace.Offers>) => state[NameSpace.Offers].fetchOffersStatus;

export const selectOffersNearbyData = (state: Pick<State, typeof NameSpace.Offers>) => state[NameSpace.Offers].offersNearby;
export const selectFetchOffersNearbyStatus = (state: Pick<State, typeof NameSpace.Offers>) => state[NameSpace.Offers].fetchOffersNearbyStatus;

export const selectOfferData = (state: Pick<State, typeof NameSpace.Offers>) => state[NameSpace.Offers].offer;
export const selectFetchOfferStatus = (state: Pick<State, typeof NameSpace.Offers>) => state[NameSpace.Offers].fetchOfferStatus;

export const selectOffersByCity = createSelector(
  selectOffersData,
  selectCity,
  (offers: OfferPreviewType[], city:CityNameType) => offers.filter((offer) => offer.city.name === city)
);

export const selectOffersBySortAndCity = createSelector(
  selectOffersByCity,
  selectSort,
  (offers: OfferPreviewType[], sort: string) => sortOffers(offers, sort)
);
