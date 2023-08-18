import {AuthorizationStatus, FetchStatus} from '../../const';
import {userSlice} from './user-process';
import {makeFakeUser} from '../../utils/mocks/user';
import {checkAuthAction, loginAction, logoutAction} from '../api-action';

vi.mock('../root-reducer', () => ({ rootReducer: vi.fn() }));

describe('UserProcess Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
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

    const result = userSlice.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };
    const expectedState = {
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

    const result = userSlice.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  describe('checkAuthAction', () => {
    it('should load User and set fetchAuthStatus to FetchStatus.Success on checkAuthAction.fulfilled', () => {
      const mockUser = makeFakeUser();
      const expectedState = {
        authorizationStatus: AuthorizationStatus.Auth,
        userData: mockUser,
        fetchLoginStatus: FetchStatus.Idle,
        fetchAuthStatus: FetchStatus.Success,
      };

      const result = userSlice.reducer(undefined, checkAuthAction.fulfilled(mockUser));

      expect(result).toEqual(expectedState);
    });

    it('should set fetchAuthStatus to FetchStatus.Idle on checkAuthAction.pending', () => {
      const expectedStatus = FetchStatus.Idle;

      const result = userSlice.reducer(undefined, checkAuthAction.pending());

      expect(result.fetchAuthStatus).toBe(expectedStatus);
    });

    it('should set fetchAuthStatus to FetchStatus.Error on checkAuthAction.rejected', () => {
      const expectedStatus = FetchStatus.Error;

      const result = userSlice.reducer(undefined, checkAuthAction.rejected());

      expect(result.fetchAuthStatus).toBe(expectedStatus);
    });
  });

  describe('loginAction', () => {
    it('should load User and set loginAuthStatus to FetchStatus.Success on loginAction.fulfilled', () => {
      const mockUser = makeFakeUser();
      const expectedState = {
        authorizationStatus: AuthorizationStatus.Auth,
        userData: mockUser,
        fetchLoginStatus: FetchStatus.Success,
        fetchAuthStatus: FetchStatus.Idle,
      };

      const result = userSlice.reducer(undefined, loginAction.fulfilled(mockUser));

      expect(result).toEqual(expectedState);
    });

    it('should set fetchAuthStatus to FetchStatus.Idle on loginAction.pending', () => {
      const expectedStatus = FetchStatus.Idle;

      const result = userSlice.reducer(undefined, loginAction.pending());

      expect(result.fetchLoginStatus).toBe(expectedStatus);
    });

    it('should set fetchAuthStatus to FetchStatus.Error on loginAction.rejected', () => {
      const expectedStatus = FetchStatus.Error;

      const result = userSlice.reducer(undefined, loginAction.rejected());

      expect(result.fetchLoginStatus).toBe(expectedStatus);
    });
  });

  it('should set fetchAuthStatus to FetchStatus.Error on logoutAction.fulfilled', () => {
    const expectedUserData = null;

    const result = userSlice.reducer(undefined, logoutAction.fulfilled());

    expect(result.userData).toBe(expectedUserData);
  });
});
