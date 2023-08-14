import {combineReducers} from '@reduxjs/toolkit';
import {userSlice} from './user-process';
import {NameSpace} from '../const';
import {offersSlice} from './offers-data';

export const rootReducer = combineReducers({
  [NameSpace.User]: userSlice.reducer,
  [NameSpace.Offers]: offersSlice.reducer,
});
