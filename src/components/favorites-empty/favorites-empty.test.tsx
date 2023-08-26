import { render, screen } from '@testing-library/react';
import FavoritesEmpty from './favorites-empty';

describe('Component: CitiesEmpty', () => {
  it('should render correct', () => {
    const expectedText = 'Favorites (empty)';

    render(<FavoritesEmpty />);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
