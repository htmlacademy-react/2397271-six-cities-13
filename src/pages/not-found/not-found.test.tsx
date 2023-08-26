import {render, screen} from '@testing-library/react';
import {withHistory, withStore} from '../../utils/mocks/mock-component';
import NotFound from './not-found';

describe('Component: Not-found', () => {
  it('should render correct', () => {
    const NOT_FOUND_CONTAINER_ID = 'not-found-container';
    const { withStoreComponent } = withStore(<NotFound />);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);
    const favoritesContainer = screen.getByTestId(NOT_FOUND_CONTAINER_ID);

    expect(favoritesContainer).toBeInTheDocument();
  });
});
