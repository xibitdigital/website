import { combineReducers, Dispatch, Action, AnyAction } from "redux";
import { all, fork } from "redux-saga/effects";

import { HomeState, homeReducer } from "./home";

import leadsSaga from "./home/sagas";

export interface ApplicationState {
  home: HomeState;
}

export interface ConnectedReduxProps<A extends Action = AnyAction> {
  dispatch: Dispatch<A>;
}

export const rootReducer = combineReducers<ApplicationState>({
  home: homeReducer
});

export function* rootSaga() {
  yield all([fork(leadsSaga)]);
}
