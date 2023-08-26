import {makeFakeOffers} from '../../utils/mocks/offers';
import {render, screen} from '@testing-library/react';
import {withHistory, withStore} from '../../utils/mocks/mock-component';
import OfferCard from './offer-card';
import { OFFER_CARD_TEST_ID } from '../../const';

describe('Component: OfferCard', () => {
  it('should render correct', () => {
    const mockOffer = makeFakeOffers()[0];
    const { withStoreComponent } = withStore(<OfferCard card={mockOffer} />);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);
    const favoriteItemContainer = screen.getByTestId(OFFER_CARD_TEST_ID);

    expect(favoriteItemContainer).toBeInTheDocument();
  });
});
