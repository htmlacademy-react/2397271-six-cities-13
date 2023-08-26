import { FetchStatus } from '../../const';
import { makeFakeReviews } from '../../utils/mocks/reviews';
import {fetchReviewsAction, sendReviewAction} from '../api-action';
import { reviewsSlice } from './reviews-data';
import {describe, expect} from 'vitest';

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

  describe('fetchReviewsAction', () => {
    it('should load array of reviews on fetchReviewsAction.fulfilled', () => {
      const mockReviews = makeFakeReviews();
      const expectedState = {
        reviews: mockReviews,
        fetchReviewsStatus: FetchStatus.Success,
        sendReviewStatus: FetchStatus.Success,
      };

      const result = reviewsSlice.reducer(undefined, fetchReviewsAction.fulfilled(mockReviews, '', 'review comment'));

      expect(result).toEqual(expectedState);
    });

    it('status of fetchReviewsStatus should be equal FetchStatus.Idle on fetchReviewsAction.pending', () => {
      const expectedStatus = FetchStatus.Idle;

      const result = reviewsSlice.reducer(undefined, fetchReviewsAction.pending);

      expect(result.fetchReviewsStatus).toBe(expectedStatus);
    });

    it('status of fetchReviewsStatus should be equal FetchStatus.Error on fetchReviewsAction.rejected', () => {
      const expectedStatus = FetchStatus.Error;

      const result = reviewsSlice.reducer(undefined, fetchReviewsAction.rejected);

      expect(result.fetchReviewsStatus).toBe(expectedStatus);
    });
  });

  describe('sendReviewAction', () => {
    it('status of sendReviewStatus should be equal FetchStatus.Success on sendReviewAction.fulfilled', () => {
      const expectedStatus = FetchStatus.Success;

      const result = reviewsSlice.reducer(undefined, sendReviewAction.fulfilled);

      expect(result.sendReviewStatus).toEqual(expectedStatus);
    });

    it('status of sendReviewStatus should be equal FetchStatus.Success on sendReviewAction.pending', () => {
      const expectedStatus = FetchStatus.Idle;

      const result = reviewsSlice.reducer(undefined, sendReviewAction.pending);

      expect(result.sendReviewStatus).toEqual(expectedStatus);
    });

    it('status of sendReviewStatus should be equal FetchStatus.Error on sendReviewAction.rejected', () => {
      const expectedStatus = FetchStatus.Error;

      const result = reviewsSlice.reducer(undefined, sendReviewAction.rejected);

      expect(result.sendReviewStatus).toEqual(expectedStatus);
    });
  });
});
