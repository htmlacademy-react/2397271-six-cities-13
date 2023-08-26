import {OfferPreviewType, OfferType} from '../../types/offer';
import {createSlice} from '@reduxjs/toolkit';
import {changeFavoritesAction, fetchOfferAction, fetchOffersAction, fetchOffersNearbyAction} from '../api-action';
import {FetchStatus, NameSpace} from '../../const';
import {changeFavoriteOffers} from '../../helpers/offers';

interface OffersState {
  offers: OfferPreviewType[];
  fetchOffersStatus: FetchStatus;
  offer: OfferType | null;
  fetchOfferStatus: FetchStatus;
  offersNearby: OfferPreviewType[];
  fetchOffersNearbyStatus: FetchStatus;
}

const initialState:OffersState = {
  offers: [],
  fetchOffersStatus: FetchStatus.Idle,
  offer: null,
  fetchOfferStatus: FetchStatus.Idle,
  offersNearby: [],
  fetchOffersNearbyStatus: FetchStatus.Idle,
};

export const offersSlice = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.fetchOffersStatus = FetchStatus.Success;
      })
      .addCase(fetchOffersAction.pending, (state) => {
        state.fetchOffersStatus = FetchStatus.Idle;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.fetchOffersStatus = FetchStatus.Error;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.fetchOfferStatus = FetchStatus.Success;
      })
      .addCase(fetchOfferAction.pending, (state) => {
        state.fetchOfferStatus = FetchStatus.Idle;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.fetchOfferStatus = FetchStatus.Error;
      })
      .addCase(fetchOffersNearbyAction.fulfilled, (state, action) => {
        state.offersNearby = action.payload;
        state.fetchOffersNearbyStatus = FetchStatus.Success;
      })
      .addCase(fetchOffersNearbyAction.pending, (state) => {
        state.fetchOffersNearbyStatus = FetchStatus.Idle;
      })
      .addCase(fetchOffersNearbyAction.rejected, (state) => {
        state.fetchOffersNearbyStatus = FetchStatus.Error;
      })
      .addCase(changeFavoritesAction.fulfilled, (state, action) => {
        changeFavoriteOffers([...state.offers, ...state.offersNearby], state.offer, action.payload);
      });
  }
});
