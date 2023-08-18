import { FetchStatus } from '../../const';
import { makeFakeReviews } from '../../utils/mocks/reviews';
import { fetchReviewsAction } from '../api-action';
import { reviewsSlice } from './reviews-data';

vi.mock('../root-reducer', () => ({ rootReducer: vi.fn() }));

describe('ReviewsProcess Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      reviews: [],
      fetchReviewsStatus: FetchStatus.Idle,
      sendReviewStatus: FetchStatus.Success,
    };

    const result = reviewsSlice.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      reviews: [],
      fetchReviewsStatus: FetchStatus.Idle,
      sendReviewStatus: FetchStatus.Success,
    };

    const result = reviewsSlice.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should load array of reviews with fetchReviewsAction.fulfilled', () => {
    const reviews = makeFakeReviews();
    const expectedState = {
      reviews: reviews,
      fetchReviewsStatus: FetchStatus.Success,
      sendReviewStatus: FetchStatus.Success,
    };

    const result = reviewsSlice.reducer(undefined, fetchReviewsAction.fulfilled(reviews));

    expect(result).toEqual(expectedState);
  });
});
