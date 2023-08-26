import {render, screen} from '@testing-library/react';
import {withStore} from '../../utils/mocks/mock-component';
import RatingStars from './rating-stars';
import {RatingTitles} from '../../const';

describe('Component: RatingStars', () => {
  it('should render correct', () => {
    const expectedLength = RatingTitles.length;
    const RATING_STAR_TEST_ID = 'rating-star';
    const { withStoreComponent } = withStore(<RatingStars currentRating={0} handleRatingChange={() => undefined}/>);

    render(withStoreComponent);
    const ratingStarsItems = screen.getAllByTestId(RATING_STAR_TEST_ID);

    expect(ratingStarsItems.length).toBe(expectedLength);
  });
});
