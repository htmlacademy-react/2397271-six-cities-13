import {render, screen} from '@testing-library/react';
import {withHistory, withStore} from '../../utils/mocks/mock-component';
import Header from './header';

describe('Component: FavoritesItem', () => {
  it('should render correct', () => {
    const HEADER_CONTAINER_TEST_ID = 'header-container';
    const { withStoreComponent } = withStore(<Header />);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);
    const headerContainer = screen.getByTestId(HEADER_CONTAINER_TEST_ID);

    expect(headerContainer).toBeInTheDocument();
  });
});
