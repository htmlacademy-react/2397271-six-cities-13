import {combineReducers} from '@reduxjs/toolkit';
import {userSlice} from './user-process';
import {NameSpace} from '../const';
import {offersSlice} from './offers-data';
import {appSlice} from './app-process';
import {reviewsSlice} from './reviews-data';

export const rootReducer = combineReducers({
  [NameSpace.App]: appSlice.reducer,
  [NameSpace.User]: userSlice.reducer,
  [NameSpace.Offers]: offersSlice.reducer,
  [NameSpace.Reviews]: reviewsSlice.reducer,
});
