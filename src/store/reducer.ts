import {DEFAULT_CITY} from '../const';
import {createReducer} from '@reduxjs/toolkit';
import {changeCity, filterOfferList} from './action';
import {offerList} from '../mocks/offers';
import {filterOffersByCity} from '../helpers';


const initialState = {
  city: DEFAULT_CITY,
  offers: offerList,
  offersSorted: offerList
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      const {city} = action.payload;
      state.city = city;
    });
  builder
    .addCase(filterOfferList, (state, action) => {
      const {offers, city} = action.payload;
      state.offersSorted = filterOffersByCity(offers, city);
    });
});

export {reducer};

