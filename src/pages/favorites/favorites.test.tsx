import {render, screen} from '@testing-library/react';
import {withHistory, withStore} from '../../utils/mocks/mock-component';
import Favorites from './favorites';

describe('Component: Favorites', () => {
  it('should render correct', () => {
    const FAVORITES_CONTAINER_ID = 'favorites-container';
    const { withStoreComponent } = withStore(<Favorites />);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);
    const favoritesContainer = screen.getByTestId(FAVORITES_CONTAINER_ID);

    expect(favoritesContainer).toBeInTheDocument();
  });
});
