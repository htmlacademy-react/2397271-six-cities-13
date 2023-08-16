import {AuthorizationStatus, DEFAULT_CITY, DEFAULT_OFFER_SORT} from '../../const';
import {createReducer} from '@reduxjs/toolkit';
import {
  changeCity,
  changeOffersSort,
  fetchOffers,
  requireAuthorization,
  setIsOffersLoading,
  setUserData
} from '../action';

const initialState = {
  city: DEFAULT_CITY,
  offers: [],
  sort: DEFAULT_OFFER_SORT,
  isOffersDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: {
    email: '',
    isPro: false,
    name: '',
    avatarUrl: '',
  }
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(changeOffersSort, (state, action) => {
      state.sort = action.payload.sort;
    })
    .addCase(fetchOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setIsOffersLoading, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserData, (state, action) => {
      state.userData = action.payload;
    });
});

export {reducer};

