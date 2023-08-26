import {withHistory, withStore} from '../../utils/mocks/mock-component';
import App from './app';
import {createMemoryHistory, MemoryHistory} from 'history';
import {AppRoute, AuthorizationStatus, FetchStatus, NameSpace} from '../../const';
import {render, screen} from '@testing-library/react';
import {makeFakeReviews} from '../../utils/mocks/reviews';
import {makeFakeUser} from '../../utils/mocks/user';
import { State } from '../../types/root-state';

describe('Application Routing', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render "Main page" when user navigate to "/"', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent);
    mockHistory.push(AppRoute.Root);

    render(withStoreComponent);

    expect(screen.getByText(/Cities/i)).toBeInTheDocument();
  });

  it('should render "Not found" when user navigate to "/undefined"', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent);
    const UNKNOWN_ROUTE = '/unknown-route';
    mockHistory.push(UNKNOWN_ROUTE);

    render(withStoreComponent);

    expect(screen.getByText(/Page not found/i)).toBeInTheDocument();
    expect(screen.getByText(/To main page/i)).toBeInTheDocument();
  });

  it('should render "Login" when user navigate to "/login"', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const initialState = {
      [NameSpace.User]: {
        fetchAuthStatus: FetchStatus.Success,
        authorizationStatus: AuthorizationStatus.NoAuth,
        fetchLoginStatus: FetchStatus.Success,
        userData: null,
      }
    };
    const { withStoreComponent } = withStore(withHistoryComponent, initialState);
    mockHistory.push(AppRoute.Login);

    render(withStoreComponent);

    expect(screen.getByText(/Amsterdam/i)).toBeInTheDocument();
  });

  it('should render "Offer" when user navigate to "/offer"', () => {
    const initialState:Partial<State> = {
      [NameSpace.User]: {
        fetchAuthStatus: FetchStatus.Success,
        fetchLoginStatus: FetchStatus.Success,
        authorizationStatus: AuthorizationStatus.NoAuth,
        userData: makeFakeUser(),
      },
      [NameSpace.Reviews]: {
        sendReviewStatus: FetchStatus.Success,
        fetchReviewsStatus: FetchStatus.Success,
        reviews: makeFakeReviews(),
      }
    };
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent, initialState);
    mockHistory.push(AppRoute.Offer);

    render(withStoreComponent);

    expect(screen.getByText(/Other places in the neighbourhood/i)).toBeInTheDocument();
  });

  it('should render "Favorites" when user navigate to "/favorites"', () => {
    const initialState = {
      [NameSpace.User]: {
        fetchLoginStatus: FetchStatus.Success,
        fetchAuthStatus: FetchStatus.Success,
        authorizationStatus: AuthorizationStatus.Auth,
        userData: makeFakeUser()
      }
    };
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent, initialState);
    const FAVORITES_CONTAINER_ID = 'favorites-container';
    mockHistory.push(AppRoute.Favorites);

    render(withStoreComponent);
    const favoritesContainer = screen.getByTestId(FAVORITES_CONTAINER_ID);

    expect(favoritesContainer).toBeInTheDocument();
  });
});
