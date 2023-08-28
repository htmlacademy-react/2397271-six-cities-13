import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mocks/mock-component';
import Offer from './offer';

describe('Component: Offer', () => {
  it('should render correct', () => {
    const OFFER_CONTAINER_ID = 'offer-container';
    const { withStoreComponent } = withStore(<Offer />);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);
    const favoritesContainer = screen.getByTestId(OFFER_CONTAINER_ID);

    expect(favoritesContainer).toBeInTheDocument();
  });
});
