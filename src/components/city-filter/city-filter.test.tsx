import {withHistory, withStore} from '../../utils/mocks/mock-component';
import {Cities} from '../../const';
import {render, screen} from '@testing-library/react';
import CityFilter from './city-filter';

describe('Component: city-filter', () => {
  it('should render correct', () => {
    const expectedLength = Cities.length;
    const cityFilterContainerTestId = 'city-filter-container';
    const cityFilterItemTestId = 'city-filter-item';
    const { withStoreComponent } = withStore(<CityFilter />);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);
    const cityFilterContainer = screen.getByTestId(cityFilterContainerTestId);
    const cityItemsContainer = screen.getAllByTestId(cityFilterItemTestId);

    expect(cityFilterContainer).toBeInTheDocument();
    expect(cityItemsContainer.length).toBe(expectedLength);
  });
});
