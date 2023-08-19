import {createMemoryHistory, MemoryHistory} from 'history';
import {AppRoute, AuthorizationStatus} from '../../const';
import {Route, Routes} from 'react-router-dom';
import PrivateRoute from './private-route';
import {render, screen} from '@testing-library/react';
import {withHistory, withStore} from '../../utils/mocks/mock-component';
import {makeFakeStore} from '../../utils/mocks/store';

describe('Component: PrivateRoute', () => {
  let mockHistory: MemoryHistory;

  beforeAll(() => {
    mockHistory = createMemoryHistory();
  });

  beforeEach(() => {
    mockHistory.push(AppRoute.favorites);
  });

  it('should render component for public route, when user not authorized', () => {
    const expectedText = 'public route';
    const notExpectedText = 'private route';
    const { withStoreComponent } = withStore(
      <Routes>
        <Route path={AppRoute.login} element={<span>{expectedText}</span>} />
        <Route path={AppRoute.favorites} element={
          <PrivateRoute>
            <span>{notExpectedText}</span>
          </PrivateRoute>
        }
        />
      </Routes>,
      makeFakeStore({authorizationStatus: AuthorizationStatus.NoAuth})
    );
    const preparedComponent = withHistory(withStoreComponent, mockHistory);

    render(preparedComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
    expect(screen.queryByText(notExpectedText)).not.toBeInTheDocument();
  });

  it('should render component for private route, when user authorized', () => {
    const expectedText = 'private route';
    const notExpectedText = 'public route';
    const { withStoreComponent } = withStore(
      <Routes>
        <Route path={AppRoute.login} element={<span>{notExpectedText}</span>} />
        <Route path={AppRoute.favorites} element={
          <PrivateRoute>
            <span>{expectedText}</span>
          </PrivateRoute>
        }
        />
      </Routes>,
      makeFakeStore({authorizationStatus: AuthorizationStatus.Auth})
    );
    const preparedComponent = withHistory(withStoreComponent, mockHistory);

    render(preparedComponent);

    expect(screen.queryByText(notExpectedText)).not.toBeInTheDocument();
  });
});
