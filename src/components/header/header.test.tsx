import {render, screen} from '@testing-library/react';
import {withHistory, withStore} from '../../utils/mocks/mock-component';
import Header from './header';

describe('Component: FavoritesItem', () => {
  it('should render correct', () => {
    const headerContainerTestId = 'header-container';
    const { withStoreComponent } = withStore(<Header />);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);
    const headerContainer = screen.getByTestId(headerContainerTestId);

    expect(headerContainer).toBeInTheDocument();
  });
});
