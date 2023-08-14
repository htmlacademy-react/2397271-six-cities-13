import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {AppDispatch, State} from '../types/root-state';
import {APIRoute, AppRoute, AuthorizationStatus} from '../const';
import {OfferPreviewType, OfferType} from '../types/offer';
import {redirectToRoute, requireAuthorization} from './action';
import {dropToken, saveToken} from '../services/token';
import {AuthData, UserData} from '../types/user';

export const fetchOfferAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffer',
  async (offerId:string, { extra: api}) => {
    try {
      const {data} = await api.get<OfferType>(`${APIRoute.Offers}/${offerId}`);
      console.log(data);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, { extra: api}) => {
    try {
      const {data} = await api.get<OfferPreviewType[]>(APIRoute.Offers);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { extra: api }) => {
    try {
      const {data} = await api.get<UserData>(APIRoute.Login);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  },
);

export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email, password}, {extra: api, dispatch}) => {
    try {
      const { data } = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(data.token);
      dispatch(redirectToRoute(AppRoute.root));
      return data;
    } catch (error) {
      throw new Error (error);
    }
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
