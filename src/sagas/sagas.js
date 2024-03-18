import { takeLatest, call, put } from "redux-saga/effects";
import {
  FETCH_COVID_DATA_REQUEST,
  fetchCovidDataSuccess,
  fetchCovidDataFailure,
} from "../actions/actions";

import { fetchData } from "../api/fetchData"; // Sağlık verilerini çeken bir API işlevi

function* fetchCovidDataSaga(action) {
  try {
    const data = yield call(fetchData, action.payload);
    yield put(fetchCovidDataSuccess(data));
  } catch (error) {
    yield put(fetchCovidDataFailure(error));
  }
}

export default function* rootSaga() {
  yield takeLatest(FETCH_COVID_DATA_REQUEST, fetchCovidDataSaga);
}
