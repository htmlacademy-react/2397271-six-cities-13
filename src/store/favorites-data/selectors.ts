import {State} from '../../types/root-state';
import {NameSpace} from '../../const';

export const selectFavoritesData = (state: Pick<State, typeof NameSpace.Favorites>) => state[NameSpace.Favorites].favorites;
export const selectFetchFavoritesStatus = (state: Pick<State, typeof NameSpace.Favorites>) => state[NameSpace.Favorites].fetchFavoritesStatus;
export const selectChangeFavoritesStatus = (state: Pick<State, typeof NameSpace.Favorites>) => state[NameSpace.Favorites].changeFavoritesStatus;
