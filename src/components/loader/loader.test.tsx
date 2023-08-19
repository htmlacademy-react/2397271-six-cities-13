import {describe, expect} from 'vitest';
import {render, screen} from '@testing-library/react';
import Loader from './loader';

describe('Component: Loader', () => {
  it('should render correct', () => {
    const loaderContainerTestId = 'loader-container';

    render(<Loader />);
    const footerContainer = screen.getByTestId(loaderContainerTestId);

    expect(footerContainer).toBeInTheDocument();
  });
});
