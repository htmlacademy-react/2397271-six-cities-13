import { FetchStatus } from "../../const";
import { reviewsSlice } from "./reviews-data";

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
  })
})
