import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { HomeActionTypes } from "./types";
import { fetchListError, fetchListSuccess } from "./actions";
import { getList } from "./api";

function* handleLeadGenFetchList(action: any) {
  try {
    const res = yield call(getList, action);
    const payload = res ? res.data : {};

    yield put(fetchListSuccess(payload));
  } catch (err) {
    if (err instanceof Error) {
      yield put(fetchListError(err.stack!));
    } else {
      yield put(fetchListError("An unknown error occurred."));
    }
  }
}

function* watchFetchListRequest() {
  yield takeEvery(HomeActionTypes.FETCH_LIST_REQUEST, handleLeadGenFetchList);
}

function* leadsSaga() {
  yield all([fork(watchFetchListRequest)]);
}

export default leadsSaga;
