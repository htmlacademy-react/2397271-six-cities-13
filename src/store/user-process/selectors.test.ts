import { NameSpace, AuthorizationStatus, FetchStatus } from '../../const';
import { makeFakeUser } from '../../utils/mocks/user';
import { selectAuthStatus, selectFetchAuthStatus, selectFetchLoginStatus, selectUserData } from './selectors';


describe('User selectors', () => {
  const state = {
    [NameSpace.User]: {
      authorizationStatus: AuthorizationStatus.Unknown,
      userData: makeFakeUser(),
      fetchLoginStatus: FetchStatus.Idle,
      fetchAuthStatus: FetchStatus.Idle,
    }
  };

  it('should return authorizationStatus from state', () => {
    const { authorizationStatus } = state[NameSpace.User];
    const result = selectAuthStatus(state);
    expect(result).toBe(authorizationStatus);
  });

  it('should return fetchAuthStatus from state', () => {
    const { fetchAuthStatus } = state[NameSpace.User];
    const result = selectFetchAuthStatus(state);
    expect(result).toBe(fetchAuthStatus);
  });

  it('should return fetchLoginStatus from state', () => {
    const { fetchLoginStatus } = state[NameSpace.User];
    const result = selectFetchLoginStatus(state);
    expect(result).toBe(fetchLoginStatus);
  });

  it('should return user data from state', () => {
    const { userData } = state[NameSpace.User];
    const result = selectUserData(state);
    expect(result).toEqual(userData);
  });
});
