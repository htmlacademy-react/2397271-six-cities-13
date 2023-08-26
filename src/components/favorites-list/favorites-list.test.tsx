import {render, screen} from '@testing-library/react';
import {withHistory, withStore} from '../../utils/mocks/mock-component';
import FavoritesList from './favorites-list';

describe('Component: FavoriteList', () => {
  it('should render correct', () => {
    const FAVORITE_LIST_CONTAINER_TEST_ID = 'favorites-list';
    const { withStoreComponent } = withStore(<FavoritesList />);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);
    const favoriteListContainer = screen.getByTestId(FAVORITE_LIST_CONTAINER_TEST_ID);

    expect(favoriteListContainer).toBeInTheDocument();
  });
});
