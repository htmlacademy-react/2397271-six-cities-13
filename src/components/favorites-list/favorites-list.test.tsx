import {render, screen} from '@testing-library/react';
import {withHistory, withStore} from '../../utils/mocks/mock-component';
import FavoritesList from './favorites-list';

describe('Component: FavoriteList', () => {
  it('should render correct', () => {
    const favoriteListContainerTestId = 'favorites-list';
    const { withStoreComponent } = withStore(<FavoritesList />);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);
    const favoriteListContainer = screen.getByTestId(favoriteListContainerTestId);

    expect(favoriteListContainer).toBeInTheDocument();
  });
});
