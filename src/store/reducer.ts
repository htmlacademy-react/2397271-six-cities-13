import {DEFAULT_CITY} from '../const';
import {createReducer} from '@reduxjs/toolkit';
import {changeCity} from './action';
import {offerList} from '../mocks/offers';


const initialState = {
  city: DEFAULT_CITY,
  offers: offerList,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      const {city} = action.payload;
      state.city = city;
    });
});

export {reducer};

