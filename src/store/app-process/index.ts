import {OfferSortType} from '../../types/offer';
import {DEFAULT_CITY, DEFAULT_OFFER_SORT, NameSpace} from '../../const';
import {CityNameType} from '../../types/location';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface AppState {
  sort: OfferSortType;
  city: CityNameType;
}

const initialState = {
  sort: DEFAULT_OFFER_SORT,
  city: DEFAULT_CITY,
};

export const appSlice = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<AppState>) => {
      state.city = action.payload.city;
    },
    changeSort: (state, action: PayloadAction<AppState>) => {
      state.sort = action.payload.sort;
    }
  },
});

export const {changeCity, changeSort} = appSlice.actions;

