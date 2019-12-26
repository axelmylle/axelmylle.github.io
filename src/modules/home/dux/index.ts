import initialState from './initialState';
import { HomeState } from 'types/state';
import {
  createActionCreators,
  createReducerFunction,
  ImmerReducer,
} from 'immer-reducer';

class Reducer extends ImmerReducer<HomeState> {
  public addUser(user:Object) {
    this.draftState.users.push(user);
  }

  public removeUser() {
    this.draftState.users.pop();
  }
}

export const HomeActions = createActionCreators(Reducer);
export default createReducerFunction(Reducer, initialState);
