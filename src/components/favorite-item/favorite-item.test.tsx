import FavoriteItem from './favorite-item';
import {makeFakeOffers} from '../../utils/mocks/offers';
import {DEFAULT_CITY, OFFER_CARD_TEST_ID} from '../../const';
import {render, screen} from '@testing-library/react';
import {withHistory, withStore} from '../../utils/mocks/mock-component';

describe('Component: FavoriteItem', () => {
  it('should render correct', () => {
    const mockOffers = makeFakeOffers();
    const expectedLength = mockOffers.length;
    const FAVORITE_ITEM_CONTAINER_TEST_ID = 'favorite-item-container';
    const { withStoreComponent } = withStore(<FavoriteItem sortedCards={mockOffers} city={DEFAULT_CITY} />);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);
    const favoriteItemContainer = screen.getByTestId(FAVORITE_ITEM_CONTAINER_TEST_ID);
    const favoriteItems = screen.getAllByTestId(OFFER_CARD_TEST_ID);

    expect(favoriteItemContainer).toBeInTheDocument();
    expect(favoriteItems.length).toBe(expectedLength);
  });
});
