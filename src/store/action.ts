import {createAction} from '@reduxjs/toolkit';
import {CityNameType} from '../types/location';
import {OfferSortList} from '../const';

export const changeCity = createAction<{ city: CityNameType }>('changeCity');
export const changeOffersSort = createAction<{ sort: OfferSortList }>('changeSort');

