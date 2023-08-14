import {OfferPreviewType, OfferSortType, OfferType} from '../../types/offer';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchOfferAction, fetchOffersAction} from '../api-action';
import {DEFAULT_CITY, DEFAULT_OFFER_SORT, FetchStatus, NameSpace} from '../../const';
import {changeCity, changeOffersSort} from '../action';
import {CityNameType} from '../../types/location';

interface OffersState {
  offers: OfferPreviewType[];
  fetchOffersStatus: FetchStatus;
  offer: OfferType;
  fetchOfferStatus: FetchStatus;
  sort: OfferSortType;
  city: CityNameType;
}

const initialState = {
  offers: [],
  fetchOffersStatus: FetchStatus.Idle,
  offer: null,
  fetchOfferStatus: FetchStatus.Idle,
  sort: DEFAULT_OFFER_SORT,
  city: DEFAULT_CITY,
};

export const offersSlice = createSlice({
  name: NameSpace.Offers,
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
      .addCase(fetchOfferAction.fulfilled, (state, action: PayloadAction<OfferType>) => {
        state.offer = action.payload;
        state.fetchOfferStatus = FetchStatus.Success;
      })
      .addCase(fetchOfferAction.pending, (state) => {
        state.fetchOfferStatus = FetchStatus.Idle;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.fetchOfferStatus = FetchStatus.Error;
      });
  }
});
