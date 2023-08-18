import { AuthorizationStatus, FetchStatus } from "../../const";
import { userSlice } from "./user-process";


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
});
