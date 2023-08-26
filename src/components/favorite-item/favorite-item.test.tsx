import FavoriteItem from './favorite-item';
import {makeFakeOffers} from '../../utils/mocks/offers';
import {DEFAULT_CITY} from '../../const';
import {render, screen} from '@testing-library/react';
import {withHistory, withStore} from '../../utils/mocks/mock-component';

describe('Component: FavoriteItem', () => {
  it('should render correct', () => {
    const mockOffers = makeFakeOffers();
    const expectedLength = mockOffers.length;
    const favoriteItemContainerTestId = 'favorite-item-container';
    const favoriteItemsTestId = 'favorite-item-value';
    const { withStoreComponent } = withStore(<FavoriteItem sortedCards={mockOffers} city={DEFAULT_CITY} />);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);
    const favoriteItemContainer = screen.getByTestId(favoriteItemContainerTestId);
    const favoriteItems = screen.getAllByTestId(favoriteItemsTestId);

    expect(favoriteItemContainer).toBeInTheDocument();
    expect(favoriteItems.length).toBe(expectedLength);
  });
});
