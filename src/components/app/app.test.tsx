import {withHistory, withStore} from '../../utils/mocks/mock-component';
import App from './app';
import {createMemoryHistory, MemoryHistory} from 'history';
import {AppRoute, AuthorizationStatus, FetchStatus, NameSpace} from '../../const';
import {render, screen} from '@testing-library/react';
import {makeFakeReviews} from '../../utils/mocks/reviews';
import {makeFakeUser} from '../../utils/mocks/user';

describe('Application Routing', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render "Main page" when user navigate to "/"', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent);
    mockHistory.push(AppRoute.root);

    render(withStoreComponent);

    expect(screen.getByText(/Cities/i)).toBeInTheDocument();
  });

  it('should render "Not found" when user navigate to "/undefined"', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent);
    const unknownRoute = '/unknown-route';
    mockHistory.push(unknownRoute);

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
      }
    };
    const { withStoreComponent } = withStore(withHistoryComponent, initialState);
    const unknownRoute = '/login';
    mockHistory.push(unknownRoute);

    render(withStoreComponent);

    expect(screen.getByText(/Amsterdam/i)).toBeInTheDocument();
  });

  it('should render "Offer" when user navigate to "/offer"', () => {
    const initialState = {
      [NameSpace.User]: {
        fetchAuthStatus: FetchStatus.Success,
        authorizationStatus: AuthorizationStatus.NoAuth,
      },
      [NameSpace.Reviews]: {
        fetchReviewsStatus: FetchStatus.Success,
        reviews: makeFakeReviews(),
      }
    };
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent, initialState);
    const offerRoute = `${AppRoute.offer}`;
    mockHistory.push(offerRoute);

    render(withStoreComponent);

    expect(screen.getByText(/Other places in the neighbourhood/i)).toBeInTheDocument();
  });

  it('should render "Favorites" when user navigate to "/vaforites"', () => {
    const initialState = {
      [NameSpace.User]: {
        fetchAuthStatus: FetchStatus.Success,
        authorizationStatus: AuthorizationStatus.Auth,
        userData: makeFakeUser()
      }
    };
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent, initialState);
    const favoritesContainerId = 'favorites-container';
    const offerRoute = `${AppRoute.favorites}`;
    mockHistory.push(offerRoute);

    render(withStoreComponent);
    const favoritesContainer = screen.getByTestId(favoritesContainerId);

    expect(favoritesContainer).toBeInTheDocument();
  });
});
