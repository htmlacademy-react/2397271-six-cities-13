import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {AppDispatch, State} from '../types/root-state';
import {APIRoute} from '../const';
import {OfferPreviewType} from '../types/offer';
import {fetchOffers} from './action';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<OfferPreviewType[]>(APIRoute.Offers);
    dispatch(fetchOffers(data));
  }
);
