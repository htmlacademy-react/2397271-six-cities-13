import {describe, expect} from 'vitest';
import Footer from './footer';
import {render, screen} from '@testing-library/react';

describe('Component: Footer', () => {
  it('should render correct', () => {
    const expectedAltText = '6 cities logo';
    const footerContainerTestId = 'footer-container';

    render(<Footer />);
    const footerContainer = screen.getByTestId(footerContainerTestId);

    expect(screen.getByAltText(expectedAltText)).toBeInTheDocument();
    expect(footerContainer).toBeInTheDocument();
  });
});
