import {render, screen} from '@testing-library/react';
import {withHistory, withStore} from '../../utils/mocks/mock-component';
import Map from './map';
import { makeFakeOffer } from '../../utils/mocks/offer';
import { makeFakeOffers } from '../../utils/mocks/offers';

describe('Component: Map', () => {
  it('should render correct', () => {
    const MAP_CONTAINER_ID = 'map-container';
    const mockOffer = makeFakeOffer();
    const mockOffers = makeFakeOffers();
    const { withStoreComponent } = withStore(<Map activeOffer={mockOffer} city={mockOffer.city} offerList={mockOffers} />);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);
    const favoritesContainer = screen.getByTestId(MAP_CONTAINER_ID);

    expect(favoritesContainer).toBeInTheDocument();
  });
});
