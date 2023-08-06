import {DEFAULT_CITY, DEFAULT_OFFER_SORT} from '../../const';
import {createReducer} from '@reduxjs/toolkit';
import {changeCity, changeOffersSort} from '../action';
import {offerList} from '../../mocks/offers';

const initialState = {
  city: DEFAULT_CITY,
  offers: offerList,
  sort: DEFAULT_OFFER_SORT,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      const {city} = action.payload;
      state.city = city;
    })
    .addCase(changeOffersSort, (state, action) => {
      const {sort} = action.payload;
      state.sort = sort;
    });
});

export {reducer};

