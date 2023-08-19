import {describe, expect, it} from 'vitest';
import {render, screen} from '@testing-library/react';
import {makeFakeReviews} from '../../utils/mocks/reviews';
import ReviewList from './review-list';

describe('Component: ReviewItem', () => {
  it('should render correctly', () => {
    const mockReview = makeFakeReviews();
    const expectedLength = mockReview.length;
    const reviewListContainerId = 'review-list-container';
    const reviewItemId = 'review-item-container';

    render(<ReviewList reviews={mockReview} />);
    const reviewListContainer = screen.getByTestId(reviewListContainerId);
    const reviewItems = screen.getAllByTestId(reviewItemId);

    expect(reviewListContainer).toBeInTheDocument();
    expect(reviewItems.length).toBe(expectedLength);
  });
});
