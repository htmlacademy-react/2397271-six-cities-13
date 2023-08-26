import {describe, expect, it} from 'vitest';
import {render, screen} from '@testing-library/react';
import ReviewItem from './review-item';
import {makeFakeReviews} from '../../utils/mocks/reviews';

describe('Component: ReviewItem', () => {
  it('should render correctly', () => {
    const mockReview = makeFakeReviews()[0];
    const reviewItemContainerId = 'review-item-container';

    render(<ReviewItem comment={mockReview} />);
    const reviewItemContainer = screen.getByTestId(reviewItemContainerId);
    expect(reviewItemContainer).toBeInTheDocument();
  });
});
