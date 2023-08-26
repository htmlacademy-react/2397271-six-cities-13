import {OfferSortList} from '../../const';
import {render, screen} from '@testing-library/react';
import {withHistory, withStore} from '../../utils/mocks/mock-component';
import OfferFilter from './offer-filter';

describe('Component: OfferFilter', () => {
  it('should render correct', () => {
    const expectedLength = Object.keys(OfferSortList).length;
    const OFFER_FILTER_CONTAINER_TEST_ID = 'offer-filter-container';
    const OFFER_FILTER_ITEM_TEST_ID = 'offer-filter-item';
    const { withStoreComponent } = withStore(<OfferFilter />);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);
    const offerFilterContainer = screen.getByTestId(OFFER_FILTER_CONTAINER_TEST_ID);
    const offerFilterItems = screen.getAllByTestId(OFFER_FILTER_ITEM_TEST_ID);

    expect(offerFilterContainer).toBeInTheDocument();
    expect(offerFilterItems.length).toBe(expectedLength);
  });
});
