import {render, screen} from '@testing-library/react';
import {withStore} from '../../utils/mocks/mock-component';
import RatingStars from './rating-stars';
import {RatingTitles} from '../../const';

describe('Component: RatingStars', () => {
  it('should render correct', () => {
    const expectedLength = RatingTitles.length;
    const ratingStarTestId = 'rating-star';
    const { withStoreComponent } = withStore(<RatingStars currentRating={0}/>);

    render(withStoreComponent);
    const ratingStarsItems = screen.getAllByTestId(ratingStarTestId);

    expect(ratingStarsItems.length).toBe(expectedLength);
  });
});
