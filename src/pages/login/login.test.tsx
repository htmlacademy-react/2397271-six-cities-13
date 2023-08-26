import {render, screen} from '@testing-library/react';
import {withHistory, withStore} from '../../utils/mocks/mock-component';
import Login from './login';
import { AuthorizationStatus, FetchStatus, NameSpace } from '../../const';

describe('Component: Login', () => {
  it('should render correct', () => {
    const initialState = {
      [NameSpace.User]: {
        fetchLoginStatus: FetchStatus.Success,
        fetchAuthStatus: FetchStatus.Success,
        authorizationStatus: AuthorizationStatus.NoAuth,
        userData: null,
      }
    };
    const LOGIN_CONTAINER_ID = 'login-container';
    const { withStoreComponent } = withStore(<Login />, initialState);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);
    const favoritesContainer = screen.getByTestId(LOGIN_CONTAINER_ID);

    expect(favoritesContainer).toBeInTheDocument();
  });
});
