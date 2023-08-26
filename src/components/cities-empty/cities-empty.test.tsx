import {render, screen} from '@testing-library/react';
import CitiesEmpty from './cities-empty';
import {withHistory, withStore} from '../../utils/mocks/mock-component';

describe('Component: CitiesEmpty', () => {
  it('should render correct', () => {
    const EXPECTED_TEXT = 'No places to stay available';
    const { withStoreComponent } = withStore(<CitiesEmpty />);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    expect(screen.getByText(EXPECTED_TEXT)).toBeInTheDocument();
  });
});
