import {makeFakeOffers} from '../../utils/mocks/offers';
import {render, screen} from '@testing-library/react';
import {withHistory, withStore} from '../../utils/mocks/mock-component';
import OfferList from './offer-list';

describe('Component: OfferList', () => {
  it('should render correct', () => {
    const mockOffers = makeFakeOffers();
    const expectedLength = mockOffers.length;
    const offerItemTestId = 'offer-card-container';
    const { withStoreComponent } = withStore(<OfferList offerList={mockOffers} testId={offerItemTestId} />);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);
    const offerListContainer = screen.getAllByTestId(offerItemTestId);

    expect(offerListContainer.length).toBe(expectedLength);
  });
});
