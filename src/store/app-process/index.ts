import {OfferSortType} from '../../types/offer';
import {DEFAULT_CITY, DEFAULT_OFFER_SORT, NameSpace} from '../../const';
import {CityNameType} from '../../types/location';
import {changeCity, changeOffersSort} from '../action';
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
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(changeCity, (state, action: PayloadAction<AppState>) => {
        state.city = action.payload.city;
      })
      .addCase(changeOffersSort, (state, action: PayloadAction<AppState>) => {
        state.sort = action.payload.sort;
      });
  },
});
