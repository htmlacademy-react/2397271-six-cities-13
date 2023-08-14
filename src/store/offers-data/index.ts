import {OfferPreviewType, OfferSortType} from '../../types/offer';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchOffersAction} from '../api-action';
import {DEFAULT_CITY, DEFAULT_OFFER_SORT, FetchStatus} from '../../const';
import {changeCity, changeOffersSort} from '../action';
import {CityNameType} from '../../types/location';

interface OffersState {
  offers: OfferPreviewType[];
  fetchOffersStatus: FetchStatus;
  sort: OfferSortType;
  city: CityNameType;
}

const initialState = {
  offers: [],
  fetchOffersStatus: FetchStatus.Idle,
  sort: DEFAULT_OFFER_SORT,
  city: DEFAULT_CITY,
};

export const offersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.fulfilled, (state, action: PayloadAction<OffersState>) => {
        state.offers = action.payload;
        state.fetchOffersStatus = FetchStatus.Success;
      })
      .addCase(fetchOffersAction.pending, (state) => {
        state.fetchOffersStatus = FetchStatus.Idle;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.fetchOffersStatus = FetchStatus.Error;
      })
      .addCase(changeCity, (state, action) => {
        state.city = action.payload.city;
      })
      .addCase(changeOffersSort, (state, action) => {
        state.sort = action.payload.sort;
      });
  }
});
