import {describe, expect, it} from 'vitest';
import {render, screen} from '@testing-library/react';
import {makeFakeReviews} from '../../utils/mocks/reviews';
import ReviewList from './review-list';
import {withHistory, withStore} from '../../utils/mocks/mock-component';

describe('Component: ReviewItem', () => {
  it('should render correctly', () => {
    const mockReview = makeFakeReviews();
    const expectedLength = mockReview.length;
    const REVIEW_LIST_CONTAINER_ID = 'review-list-container';
    const REVIEW_ITEM_ID = 'review-item-container';
    const { withStoreComponent } = withStore(<ReviewList />);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);
    const reviewListContainer = screen.getByTestId(REVIEW_LIST_CONTAINER_ID);
    const reviewItems = screen.getAllByTestId(REVIEW_ITEM_ID);

    expect(reviewListContainer).toBeInTheDocument();
    expect(reviewItems.length).toBe(expectedLength);
  });
});
