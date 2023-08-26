import {render, screen} from '@testing-library/react';
import CitiesEmpty from './cities-empty';
import {withHistory, withStore} from '../../utils/mocks/mock-component';

describe('Component: CitiesEmpty', () => {
  it('should render correct', () => {
    const expectedText = 'No places to stay available';
    const { withStoreComponent } = withStore(<CitiesEmpty />);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
