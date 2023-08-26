import {DEFAULT_CITY, DEFAULT_OFFER_SORT, NameSpace} from '../../const';
import { selectCity, selectSort } from './selectors';

describe('App selectors', () => {
  const state = {
    [NameSpace.App]: {
      sort: DEFAULT_OFFER_SORT,
      city: DEFAULT_CITY,
    }
  };

  it('should return city from state', () => {
    const { city } = state[NameSpace.App];
    const result = selectCity(state);
    expect(result).toEqual(city);
  });

  it('should return sort from state', () => {
    const { sort } = state[NameSpace.App];
    const result = selectSort(state);
    expect(result).toEqual(sort);
  });
});
