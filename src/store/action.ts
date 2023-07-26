import {createAction} from '@reduxjs/toolkit';
import {OfferPreviewType} from '../types/offer';
import {CityNameType} from '../types/location';


export const changeCity = createAction<{ city: CityNameType }>('changeCity');

export const filterOfferList = createAction<{offers: OfferPreviewType[]; city: CityNameType}>('filterOfferList');
