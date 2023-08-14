import {createAction} from '@reduxjs/toolkit';
import {CityNameType} from '../types/location';
import {AppRoute, AuthorizationStatus, OfferSortList} from '../const';
import {OfferPreviewType} from '../types/offer';
import {UserData} from '../types/user';

export const changeCity = createAction<{ city: CityNameType }>('offers/changeCity');
export const changeOffersSort = createAction<{ sort: OfferSortList }>('offers/changeSort');

export const fetchOffers = createAction<{ offers: OfferPreviewType }>('data/fetchOffers');
export const setIsOffersLoading = createAction<{ offers: OfferPreviewType }>('data/setIsOffersLoading');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setUserData = createAction<UserData>('user/setUserData');

export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');
