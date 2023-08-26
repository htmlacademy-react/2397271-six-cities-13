import {OfferPreviewType} from '../../types/offer';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {changeFavoritesAction, fetchFavoritesAction} from '../api-action';
import {FetchStatus, NameSpace} from '../../const';

interface FavoritesState {
  favorites: OfferPreviewType[];
  fetchFavoritesStatus: FetchStatus;
  changeFavoritesStatus: FetchStatus;
}

const initialState:FavoritesState = {
  favorites: [],
  fetchFavoritesStatus: FetchStatus.Idle,
  changeFavoritesStatus: FetchStatus.Success,
};

export const favoritesSlice = createSlice({
  name: NameSpace.Favorites,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoritesAction.fulfilled, (state, action: PayloadAction<FavoritesState>) => {
        state.favorites = action.payload;
        state.fetchFavoritesStatus = FetchStatus.Success;
      })
      .addCase(fetchFavoritesAction.pending, (state) => {
        state.fetchFavoritesStatus = FetchStatus.Idle;
      })
      .addCase(fetchFavoritesAction.rejected, (state) => {
        state.fetchFavoritesStatus = FetchStatus.Error;
      })
      .addCase(changeFavoritesAction.fulfilled, (state, action: PayloadAction<FavoritesState>) => {
        state.changeFavoritesStatus = FetchStatus.Success;
        const { id, isFavorite } = action.payload;
        if (isFavorite) {
          state.favorites.push(action.payload);
        } else {
          state.favorites = state.favorites.filter((card) => card.id !== id);
        }
      })
      .addCase(changeFavoritesAction.pending, (state) => {
        state.changeFavoritesStatus = FetchStatus.Idle;
      })
      .addCase(changeFavoritesAction.rejected, (state) => {
        state.changeFavoritesStatus = FetchStatus.Error;
      });
  }
});
