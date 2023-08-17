import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {AppDispatch, State} from '../types/root-state';
import {APIRoute, AppRoute} from '../const';
import {FavoriteData, OfferPreviewType, OfferType, ReviewType} from '../types/offer';
import {redirectToRoute} from './action';
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

export const fetchOffersNearbyAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffersNearby',
  async (offerId:string, { extra: api}) => {
    try {
      const {data} = await api.get<OfferPreviewType[]>(`${APIRoute.Offers}/${offerId}${APIRoute.Nearby}`);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const fetchFavoritesAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFavorites',
  async (_arg, { extra: api}) => {
    try {
      const {data} = await api.get<OfferPreviewType[]>(APIRoute.Favorite);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const changeFavoritesAction = createAsyncThunk<void, FavoriteData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/changeFavorites',
  async ({offerId, status}, {extra: api}) => {
    try {
      const {data} = await api.post<OfferPreviewType[]>(`${APIRoute.Favorite}/${offerId}/${status}`);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const checkAuthAction = createAsyncThunk<void, UserData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { extra: api, dispatch }) => {
    try {
      const {data} = await api.get<UserData>(APIRoute.Login);
      dispatch(fetchFavoritesAction());
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
  async (_arg, { extra: api}) => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
    } catch (e) {
      throw new Error (e);
    }
  },
);

export const fetchReviewsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'reviews/get',
  async (offerId:string, {extra: api}) => {
    try {
      const {data} = await api.get<ReviewType[]>(`${APIRoute.Comments}/${offerId}`);
      return data;
    } catch (error) {
      throw new Error (error);
    }
  },
);

export const sendReviewAction = createAsyncThunk<void, { offerId: string; comment: string; rating: number }, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'reviews/post',
  async ({offerId, comment, rating}, {extra: api}) => {
    try {
      const {data} = await api.post<{ comment: string; rating: number }>(`${APIRoute.Comments}/${offerId}`, {comment, rating});
      return data;
    } catch (error) {
      throw new Error (error);
    }
  },
);
