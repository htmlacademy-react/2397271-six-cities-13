import {OfferSortList} from '../../const';
import {render, screen} from '@testing-library/react';
import {withHistory, withStore} from '../../utils/mocks/mock-component';
import OfferFilter from './offer-filter';

describe('Component: OfferFilter', () => {
  it('should render correct', () => {
    const expectedLength = Object.keys(OfferSortList).length;
    const offerFilterContainerTestId = 'offer-filter-container';
    const offerFilterItemTestId = 'offer-filter-item';
    const { withStoreComponent } = withStore(<OfferFilter />);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);
    const offerFilterContainer = screen.getByTestId(offerFilterContainerTestId);
    const offerFilterItems = screen.getAllByTestId(offerFilterItemTestId);

    expect(offerFilterContainer).toBeInTheDocument();
    expect(offerFilterItems.length).toBe(expectedLength);
  });
});
