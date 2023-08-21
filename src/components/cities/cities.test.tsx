import {withHistory, withStore} from '../../utils/mocks/mock-component';
import {render, screen} from '@testing-library/react';
import Cities from './cities';

describe('Component: Cities', () => {
  it('should render correct', () => {
    const { withStoreComponent } = withStore(<Cities />);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    expect(screen.getByText(/Places/i)).toBeInTheDocument();
  });
});
