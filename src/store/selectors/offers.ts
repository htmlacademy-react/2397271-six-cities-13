import {OfferPreviewType} from '../../types/offer';
import {sortOffers} from '../../helpers/sort-offers';
import {createSelector} from 'reselect';
import {CityNameType} from '../../types/location';
import {State} from '../../types/root-state';
import {OfferSortList} from '../../const';

const offersState = (state:State) => state.offers;
const cityState = (state:State) => state.city;
const sortState = (state:State) => state.sort;

export const selectOffersByCity = createSelector(
  offersState,
  cityState,
  (offers: OfferPreviewType[], city:CityNameType) => offers.filter((offer) => offer.city.name === city)
);

export const selectOffersBySortAndCity = createSelector(
  selectOffersByCity,
  sortState,
  (offers: OfferPreviewType[], sort: OfferSortList) => sortOffers(offers, sort)
);
