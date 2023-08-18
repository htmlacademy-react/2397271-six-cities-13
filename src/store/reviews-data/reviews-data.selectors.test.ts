import {FetchStatus, NameSpace} from '../../const';
import {makeFakeReviews} from '../../utils/mocks/reviews';
import {selectFetchReviewsStatus, selectReviewsData} from './selectors';

describe('Reviews selectors', () => {
  const state = {
    [NameSpace.Reviews]: {
      reviews: makeFakeReviews(),
      fetchReviewsStatus: FetchStatus.Idle,
    }
  };

  it('should return list from state', () => {
    const { reviews } = state[NameSpace.Reviews];
    const result = selectReviewsData(state);
    expect(result).toBe(reviews);
  });

  it('should return fetch status from state', () => {
    const { fetchReviewsStatus } = state[NameSpace.Reviews];
    const result = selectFetchReviewsStatus(state);
    expect(result).toBe(fetchReviewsStatus);
  });
});
