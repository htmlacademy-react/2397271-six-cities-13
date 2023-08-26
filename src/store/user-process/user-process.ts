import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, FetchStatus, NameSpace } from '../../const';
import { UserData } from '../../types/user';
import { checkAuthAction, loginAction, logoutAction } from '../api-action';

export interface UserState {
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
  fetchLoginStatus: FetchStatus;
  fetchAuthStatus: FetchStatus;
}

const initialState:UserState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: null,
  fetchLoginStatus: FetchStatus.Idle,
  fetchAuthStatus: FetchStatus.Idle,
};

export const userSlice = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
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
      .addCase(loginAction.fulfilled, (state, action) => {
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


