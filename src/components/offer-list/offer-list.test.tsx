import {makeFakeOffers} from '../../utils/mocks/offers';
import {render, screen} from '@testing-library/react';
import {withHistory, withStore} from '../../utils/mocks/mock-component';
import OfferList from './offer-list';
import { OFFER_CARD_TEST_ID } from '../../const';

describe('Component: OfferList', () => {
  it('should render correct', () => {
    const mockOffers = makeFakeOffers();
    const expectedLength = mockOffers.length;
    const { withStoreComponent } = withStore(<OfferList offerList={mockOffers} />);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);
    const offerListContainer = screen.getAllByTestId(OFFER_CARD_TEST_ID);

    expect(offerListContainer.length).toBe(expectedLength);
  });
});
