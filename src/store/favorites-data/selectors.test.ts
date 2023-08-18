import { FetchStatus, NameSpace } from '../../const';
import { makeFakeOffers } from '../../utils/mocks/offers';
import { selectChangeFavoritesStatus, selectFavoritesData, selectFetchFavoritesStatus } from './selectors';

describe('Offers selectors', () => {
  const state = {
    [NameSpace.Favorites]: {
      favorites: makeFakeOffers(true),
      fetchFavoritesStatus: FetchStatus.Idle,
      changeFavoritesStatus: FetchStatus.Success,
    }
  };

  it('should return favorites data from state', () => {
    const { favorites } = state[NameSpace.Favorites];
    const result = selectFavoritesData(state);
    expect(result).toEqual(favorites);
  });

  it('should return fetchFavoritesStatus from state', () => {
    const { fetchFavoritesStatus } = state[NameSpace.Favorites];
    const result = selectFetchFavoritesStatus(state);
    expect(result).toEqual(fetchFavoritesStatus);
  });

  it('should return changeFavoritesStatus from state', () => {
    const { changeFavoritesStatus } = state[NameSpace.Favorites];
    const result = selectChangeFavoritesStatus(state);
    expect(result).toEqual(changeFavoritesStatus);
  });
});
