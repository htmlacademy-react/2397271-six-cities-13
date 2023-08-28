import {ReviewType} from '../../types/offer';
import {FetchStatus, NameSpace} from '../../const';
import {createSlice} from '@reduxjs/toolkit';
import {fetchReviewsAction, sendReviewAction} from '../api-action';

interface ReviewsState {
  reviews: ReviewType[];
  fetchReviewsStatus: FetchStatus;
  sendReviewStatus: FetchStatus;
}

const initialState:ReviewsState = {
  reviews: [],
  fetchReviewsStatus: FetchStatus.Idle,
  sendReviewStatus: FetchStatus.Success,
};

export const reviewsSlice = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.fetchReviewsStatus = FetchStatus.Success;
        state.reviews = action.payload;
      })
      .addCase(fetchReviewsAction.pending, (state) => {
        state.fetchReviewsStatus = FetchStatus.Idle;
      })
      .addCase(fetchReviewsAction.rejected, (state) => {
        state.fetchReviewsStatus = FetchStatus.Error;
      })
      .addCase(sendReviewAction.fulfilled, (state, action) => {
        state.reviews.push(action.payload);
        state.sendReviewStatus = FetchStatus.Success;
      })
      .addCase(sendReviewAction.pending, (state) => {
        state.sendReviewStatus = FetchStatus.Idle;
      })
      .addCase(sendReviewAction.rejected, (state) => {
        state.sendReviewStatus = FetchStatus.Error;
      });
  },
});
