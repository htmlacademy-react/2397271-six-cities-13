import {describe, expect} from 'vitest';
import {render, screen} from '@testing-library/react';
import Loader from './loader';

describe('Component: Loader', () => {
  it('should render correct', () => {
    const LOADER_CONTAINER_TEST_ID = 'loader-container';

    render(<Loader />);
    const footerContainer = screen.getByTestId(LOADER_CONTAINER_TEST_ID);

    expect(footerContainer).toBeInTheDocument();
  });
});
