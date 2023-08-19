import {makeFakeOffers} from '../../utils/mocks/offers';
import {render, screen} from '@testing-library/react';
import {withHistory, withStore} from '../../utils/mocks/mock-component';
import OfferCard from './offer-card';

describe('Component: OfferCard', () => {
  it('should render correct', () => {
    const mockOffer = makeFakeOffers()[0];
    const offerCardTestId = 'offer-card-container';
    const { withStoreComponent } = withStore(<OfferCard card={mockOffer} testId={offerCardTestId} />);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);
    const favoriteItemContainer = screen.getByTestId(offerCardTestId);

    expect(favoriteItemContainer).toBeInTheDocument();
  });
});
