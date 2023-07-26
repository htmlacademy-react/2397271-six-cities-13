import {createAction} from '@reduxjs/toolkit';
import {CityNameType} from '../types/location';

export const changeCity = createAction<{ city: CityNameType }>('changeCity');

