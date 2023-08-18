import {State} from '../../types/root-state';
import {NameSpace} from '../../const';

export const selectAuthStatus = (state: Pick<State, typeof NameSpace.User>) => state[NameSpace.User].authorizationStatus;
export const selectFetchAuthStatus = (state: Pick<State, typeof NameSpace.User>) => state[NameSpace.User].fetchAuthStatus;
export const selectUserData = (state: Pick<State, typeof NameSpace.User>) => state[NameSpace.User].userData;
