import {ReviewType} from '../../types/offer';
import {FetchStatus, NameSpace} from '../../const';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchReviewsAction} from '../api-action';

interface ReviewsState {
  reviews: ReviewType[];
  fetchReviewsState: FetchStatus;
}

const initialState = {
  reviews: [],
  fetchReviewsStatus: FetchStatus.Idle,
};

export const reviewsSlice = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviewsAction.fulfilled, (state, action: PayloadAction<ReviewsState>) => {
        state.fetchReviewsStatus = FetchStatus.Success;
        state.reviews = action.payload;
      })
      .addCase(fetchReviewsAction.pending, (state) => {
        state.fetchReviewsStatus = FetchStatus.Idle;
      })
      .addCase(fetchReviewsAction.rejected, (state) => {
        state.fetchReviewsStatus = FetchStatus.Error;
      });
  },
});
