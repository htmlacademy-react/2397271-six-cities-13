import {State} from '../../types/root-state';
import {NameSpace, OfferSortList} from '../../const';
import {OfferPreviewType} from '../../types/offer';
import {CityNameType} from '../../types/location';
import {sortOffers} from '../../helpers/sort-offers';
import {createSelector} from 'reselect';


export const selectOffersData = (state: State) => state[NameSpace.Offers].offers;
export const selectFetchOffersStatus = (state: State) => state[NameSpace.Offers].fetchOffersStatus;
export const selectCity = (state: State) => state[NameSpace.Offers].city;
export const selectSort = (state: State) => state[NameSpace.Offers].sort;

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
