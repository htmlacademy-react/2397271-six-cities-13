import {withHistory, withStore} from '../../utils/mocks/mock-component';
import {Cities} from '../../const';
import {render, screen} from '@testing-library/react';
import CityFilter from './city-filter';

describe('Component: city-filter', () => {
  it('should render correct', () => {
    const expectedLength = Cities.length;
    const CITY_FILTER_CONTAINER_TEST_ID = 'city-filter-container';
    const CITY_FILTER_ITEM_TEST_ID = 'city-filter-item';
    const { withStoreComponent } = withStore(<CityFilter />);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);
    const cityFilterContainer = screen.getByTestId(CITY_FILTER_CONTAINER_TEST_ID);
    const cityItemsContainer = screen.getAllByTestId(CITY_FILTER_ITEM_TEST_ID);

    expect(cityFilterContainer).toBeInTheDocument();
    expect(cityItemsContainer.length).toBe(expectedLength);
  });
});
