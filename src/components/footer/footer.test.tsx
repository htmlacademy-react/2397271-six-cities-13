import {describe, expect} from 'vitest';
import Footer from './footer';
import {render, screen} from '@testing-library/react';

describe('Component: Footer', () => {
  it('should render correct', () => {
    const EXPECTED_ALT_TEXT = '6 cities logo';
    const FOOTER_CONTAINER_TEST_ID = 'footer-container';

    render(<Footer />);
    const footerContainer = screen.getByTestId(FOOTER_CONTAINER_TEST_ID);

    expect(screen.getByAltText(EXPECTED_ALT_TEXT)).toBeInTheDocument();
    expect(footerContainer).toBeInTheDocument();
  });
});
