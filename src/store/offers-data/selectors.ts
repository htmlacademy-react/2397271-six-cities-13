import {State} from '../../types/root-state';
import {NameSpace, OfferSortList} from '../../const';
import {OfferPreviewType} from '../../types/offer';
import {CityNameType} from '../../types/location';
import {sortOffers} from '../../helpers/sort-offers';
import {createSelector} from 'reselect';
import {selectCity, selectSort} from '../app-process/selectors';


export const selectOffersData = (state: State) => state[NameSpace.Offers].offers;
export const selectFetchOffersStatus = (state: State) => state[NameSpace.Offers].fetchOffersStatus;

export const selectOfferData = (state: State) => state[NameSpace.Offers].offer;
export const selectFetchOfferStatus = (state: State) => state[NameSpace.Offers].fetchOfferStatus;

export const selectOffersByCity = createSelector(
  selectOffersData,
  selectCity,
  (offers: OfferPreviewType[], city:CityNameType) => offers.filter((offer) => offer.city.name === city)
);

export const selectOffersBySortAndCity = createSelector(
  selectOffersByCity,
  selectSort,
  (offers: OfferPreviewType[], sort: OfferSortList) => sortOffers(offers, sort)
);
