import {AuthorizationStatus, FetchStatus, NameSpace} from '../../const';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {checkAuthAction, loginAction, logoutAction} from '../api-action';

interface UserState {
  authorizationStatus: AuthorizationStatus;
  userData: {
    email: string;
    isPro: boolean;
    name: string;
    avatarUrl: string;
  };
}

const initialState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: {
    email: '',
    isPro: false,
    name: '',
    avatarUrl: '',
  },
  fetchLoginStatus: FetchStatus.Idle,
  fetchAuthStatus: FetchStatus.Idle,
};

export const userSlice = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action: PayloadAction<UserState>) => {
        state.fetchAuthStatus = FetchStatus.Success;
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.userData = action.payload;
      })
      .addCase(checkAuthAction.pending, (state) => {
        state.fetchAuthStatus = FetchStatus.Idle;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.fetchAuthStatus = FetchStatus.Error;
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state, action: PayloadAction<UserState>) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.fetchLoginStatus = FetchStatus.Success;
        state.userData = action.payload;
      })
      .addCase(loginAction.pending, (state) => {
        state.fetchLoginStatus = FetchStatus.Idle;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.fetchLoginStatus = FetchStatus.Error;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.userData = null;
      });
  }
});


