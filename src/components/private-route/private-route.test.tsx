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
        fetchAuthStatus: FetchStatus.Success,
        authorizationStatus: AuthorizationStatus.NoAuth,
      }
    };
    const expectedText = 'public route';
    const notExpectedText = 'private route';
    const { withStoreComponent } = withStore(
      <Routes>
        <Route path={AppRoute.Login} element={<span>{expectedText}</span>} />
        <Route path={AppRoute.Favorites} element={
          <PrivateRoute>
            <span>{notExpectedText}</span>
          </PrivateRoute>
        }
        />
      </Routes>,
      initialState
    );
    const preparedComponent = withHistory(withStoreComponent, mockHistory);

    render(preparedComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
    expect(screen.queryByText(notExpectedText)).not.toBeInTheDocument();
  });

  it('should render component for private route, when user authorized', () => {
    const expectedText = 'private route';
    const notExpectedText = 'public route';
    const initialState = {
      [NameSpace.User]: {
        fetchAuthStatus: FetchStatus.Success,
        authorizationStatus: AuthorizationStatus.Auth,
        userData: makeFakeUser()
      }
    };
    const { withStoreComponent } = withStore(
      <Routes>
        <Route path={AppRoute.Login} element={<span>{notExpectedText}</span>} />
        <Route path={AppRoute.Favorites} element={
          <PrivateRoute>
            <span>{expectedText}</span>
          </PrivateRoute>
        }
        />
      </Routes>,
      initialState
    );
    const preparedComponent = withHistory(withStoreComponent, mockHistory);

    render(preparedComponent);

    expect(screen.queryByText(notExpectedText)).not.toBeInTheDocument();
  });
});
