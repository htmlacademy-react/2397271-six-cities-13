import {State} from '../../types/root-state';
import {NameSpace} from '../../const';

export const selectCity = (state: Pick<State, typeof NameSpace.App>) => state[NameSpace.App].city;
export const selectSort = (state: Pick<State, typeof NameSpace.App>) => state[NameSpace.App].sort;
