import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import {State} from '../../types/root-state';
import {createAPI} from '../../services/api';

export type AppThunkDispatch = ThunkDispatch<State, ReturnType<typeof createAPI>, Action>;
export const extractActionsTypes = (actions: Action<string>[]) => actions.map(({ type }) => type);
