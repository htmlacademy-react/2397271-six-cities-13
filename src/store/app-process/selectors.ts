import {State} from '../../types/root-state';
import {NameSpace} from '../../const';

export const selectCity = (state: State) => state[NameSpace.App].city;
export const selectSort = (state: State) => state[NameSpace.App].sort;
