import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { APIRoute, AppRoute } from '../const';
import { dropToken, saveToken } from '../services/token';
import { FavoriteData, OfferPreviewType, OfferType, ReviewFormType, ReviewType } from '../types/offer';
import { ThunkConfig } from '../types/root-state';
import { AuthData, UserData } from '../types/user';
import { redirectToRoute } from './action';

export const fetchOfferAction = createAsyncThunk<
  OfferType,
  string,
  ThunkConfig
>(
  'data/fetchOffer',
  async (offerId, { extra: api}) => {
    const {data} = await api.get<OfferType>(`${APIRoute.Offers}/${offerId}`)
      .catch((error: AxiosError) => {
        throw new Error(error.message);
      });
    return data;
  }
);

export const fetchOffersAction = createAsyncThunk<
  OfferPreviewType[],
  undefined,
  ThunkConfig
>(
  'data/fetchOffers',
  async (_arg, { extra: api}) => {
    const {data} = await api.get<OfferPreviewType[]>(APIRoute.Offers)
      .catch((error: AxiosError) => {
        throw new Error(error.message);
      });
    return data;
  }
);

export const fetchOffersNearbyAction = createAsyncThunk<
  OfferPreviewType[],
  string,
  ThunkConfig
>(
  'data/fetchOffersNearby',
  async (offerId, { extra: api}) => {
    const {data} = await api.get<OfferPreviewType[]>(`${APIRoute.Offers}/${offerId}${APIRoute.Nearby}`)
      .catch((error: AxiosError) => {
        throw new Error(error.message);
      });
    return data;
  }
);

export const fetchFavoritesAction = createAsyncThunk<
  OfferPreviewType[],
  undefined,
  ThunkConfig
>(
  'data/fetchFavorites',
  async (_arg, { extra: api}) => {
    const {data} = await api.get<OfferPreviewType[]>(APIRoute.Favorite)
      .catch((error: AxiosError) => {
        throw new Error(error.message);
      });

    return data;
  }
);

export const changeFavoritesAction = createAsyncThunk<
  OfferPreviewType,
  FavoriteData,
  ThunkConfig
>(
  'data/changeFavorites',
  async ({offerId, status}, {extra: api}) => {
    const {data} = await api.post<OfferPreviewType>(`${APIRoute.Favorite}/${offerId}/${status}`)
      .catch((error: AxiosError) => {
        throw new Error(error.message);
      });
    return data;
  }
);

export const checkAuthAction = createAsyncThunk<
  UserData,
  undefined,
  ThunkConfig
>(
  'user/checkAuth',
  async (_arg, { extra: api, dispatch }) => {
    const {data} = await api.get<UserData>(APIRoute.Login)
      .catch((error: AxiosError) => {
        throw new Error(error.message);
      });
    dispatch(fetchFavoritesAction());
    return data;
  },
);

export const loginAction = createAsyncThunk<
  UserData,
  AuthData,
  ThunkConfig
>(
  'user/login',
  async ({email, password}, {extra: api, dispatch}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password})
      .catch((error: AxiosError) => {
        throw new Error(error.message);
      });
    saveToken(data.token);
    dispatch(redirectToRoute(AppRoute.Root));
    return data;
  },
);

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  ThunkConfig
>(
  'user/logout',
  async (_arg, { extra: api}) => {
    await api.delete(APIRoute.Logout)
      .catch((error: AxiosError) => {
        throw new Error(error.message);
      });
    dropToken();
  },
);

export const fetchReviewsAction = createAsyncThunk<
  ReviewType[],
  string,
  ThunkConfig
>(
  'reviews/get',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<ReviewType[]>(`${APIRoute.Comments}/${offerId}`)
      .catch((error: AxiosError) => {
        throw new Error(error.message);
      });
    return data;
  },
);

export const sendReviewAction = createAsyncThunk<
  ReviewFormType,
  {
    rating: number;
    comment: string;
    offerId: string;
  },
  ThunkConfig
>(
  'reviews/post',
  async ({offerId, comment, rating}, {extra: api}) => {
    const {data} = await api.post<{ comment: string; rating: number }>(`${APIRoute.Comments}/${offerId}`, {comment, rating})
      .catch((error: AxiosError) => {
        throw new Error(error.message);
      });
    return data;
  },
);
