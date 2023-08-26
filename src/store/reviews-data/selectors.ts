import {State} from '../../types/root-state';
import {NameSpace} from '../../const';

export const selectReviewsData = (state: Pick<State, typeof NameSpace.Reviews>) =>
  state[NameSpace.Reviews].reviews;
export const selectFetchReviewsStatus = (state: Pick<State, typeof NameSpace.Reviews>) =>
  state[NameSpace.Reviews].fetchReviewsStatus;
export const selectSendReviewStatus = (state: Pick<State, typeof NameSpace.Reviews>) =>
  state[NameSpace.Reviews].sendReviewStatus;
