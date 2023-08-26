import {createMemoryHistory, MemoryHistory} from 'history';
import {AppRoute, AuthorizationStatus, FetchStatus, NameSpace} from '../../const';
import {Route, Routes} from 'react-router-dom';
import PrivateRoute from './private-route';
import {render, screen} from '@testing-library/react';
import {withHistory, withStore} from '../../utils/mocks/mock-component';
import {makeFakeUser} from '../../utils/mocks/user';

describe('Component: PrivateRoute', () => {
  let mockHistory: MemoryHistory;

  beforeAll(() => {
    mockHistory = createMemoryHistory();
  });

  beforeEach(() => {
    mockHistory.push(AppRoute.Favorites);
  });

  it('should render component for public route, when user not authorized', () => {
    const initialState = {
      [NameSpace.User]: {
        fetchLoginStatus: FetchStatus.Idle,
        fetchAuthStatus: FetchStatus.Success,
        authorizationStatus: AuthorizationStatus.NoAuth,
        userData: null,
      }
    };
    const EXPECTED_TEXT = 'public route';
    const { withStoreComponent } = withStore(
      <Routes>
        <Route path={AppRoute.Login} element={<span>{EXPECTED_TEXT}</span>} />
        <Route path={AppRoute.Favorites} element={
          <PrivateRoute />
        }
        />
      </Routes>,
      initialState
    );
    const preparedComponent = withHistory(withStoreComponent, mockHistory);

    render(preparedComponent);

    expect(screen.getByText(EXPECTED_TEXT)).toBeInTheDocument();
  });

  it('should render component for private route, when user authorized', () => {
    const NOT_EXPECTED_TEXT = 'public route';
    const initialState = {
      [NameSpace.User]: {
        fetchLoginStatus: FetchStatus.Idle,
        fetchAuthStatus: FetchStatus.Success,
        authorizationStatus: AuthorizationStatus.Auth,
        userData: makeFakeUser(),
      }
    };
    const { withStoreComponent } = withStore(
      <Routes>
        <Route path={AppRoute.Login} element={<span>{NOT_EXPECTED_TEXT}</span>} />
        <Route path={AppRoute.Favorites} element={
          <PrivateRoute/>
        }
        />
      </Routes>,
      initialState
    );
    const preparedComponent = withHistory(withStoreComponent, mockHistory);

    render(preparedComponent);

    expect(screen.queryByText(NOT_EXPECTED_TEXT)).not.toBeInTheDocument();
  });
});
