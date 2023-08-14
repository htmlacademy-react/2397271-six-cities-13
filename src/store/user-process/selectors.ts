import {State} from '../../types/root-state';
import {NameSpace} from '../../const';

export const selectAuthStatus = (state: State) => state[NameSpace.User].authorizationStatus;
export const selectFetchAuthStatus = (state: State) => state[NameSpace.User].fetchAuthStatus;
export const selectUserData = (state: State) => state[NameSpace.User].userData;
