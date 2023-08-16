import {State} from '../../types/root-state';
import {NameSpace} from '../../const';

export const selectReviewsData = (state: State) => state[NameSpace.Reviews].reviews;
export const selectFetchReviewsStatus = (state: State) => state[NameSpace.Reviews].fetchReviewsStatus;
