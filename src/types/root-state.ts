import { AxiosInstance } from 'axios';
import {store} from '../store';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type ThunkConfig = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
