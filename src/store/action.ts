import {createAction} from '@reduxjs/toolkit';
import {CityNameType} from '../types/location';
import {OfferSortList} from '../const';
import {OfferPreviewType} from '../types/offer';

export const changeCity = createAction<{ city: CityNameType }>('offers/changeCity');
export const changeOffersSort = createAction<{ sort: OfferSortList }>('offers/changeSort');
export const fetchOffers = createAction<{ offers: OfferPreviewType }>('data/fetchOffers');
export const setIsOffersLoading = createAction<{ offers: OfferPreviewType }>('data/setIsOffersLoading');

