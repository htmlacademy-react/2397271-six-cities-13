import {State} from '../../types/root-state';
import {NameSpace} from '../../const';

export const selectFavoritesData = (state: State) => state[NameSpace.Favorites].favorites;
export const selectFetchFavoritesStatus = (state: State) => state[NameSpace.Favorites].fetchFavoritesStatus;
export const selectChangeFavoritesStatus = (state: State) => state[NameSpace.Favorites].changeFavoritesStatus;
