import {render, screen} from '@testing-library/react';
import {withHistory, withStore} from '../../utils/mocks/mock-component';
import Main from './main';

describe('Component: Main', () => {
  it('should render correct', () => {
    const MAIN_CONTAINER_ID = 'main-container';
    const { withStoreComponent } = withStore(<Main />);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);
    const favoritesContainer = screen.getByTestId(MAIN_CONTAINER_ID);

    expect(favoritesContainer).toBeInTheDocument();
  });
});
