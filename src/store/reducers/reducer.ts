import {DEFAULT_CITY, DEFAULT_OFFER_SORT} from '../../const';
import {createReducer} from '@reduxjs/toolkit';
import {changeCity, changeOffersSort, fetchOffers, setIsOffersLoading} from '../action';

const initialState = {
  city: DEFAULT_CITY,
  offers: [],
  sort: DEFAULT_OFFER_SORT,
  isOffersDataLoading: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(changeOffersSort, (state, action) => {
      state.sort = action.payload;
    })
    .addCase(fetchOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setIsOffersLoading, (state, action) => {
      state.isOffersDataLoading = action.payload;
    });
});

export {reducer};

