import {setTokenStart, setTokenSuccess, setTokenFail} from '../../actions';
import {put, call, takeLatest} from 'redux-saga/effects';

import actionLabels from '../../actionLabels';

export function* setAuthToken() {
  try {
    yield put(setTokenStart());
    const response = yield call(
      'https://jsonplaceholder.typicode.com/todos/1',
      '/food',
    );
    yield put(setTokenSuccess(response));
  } catch (e) {
    yield put(setTokenFail(e.message));
  }
}

export default function* root() {
  yield [yield takeLatest(actionLabels.SET_AUTH_TOKEN_SAGA, setAuthToken)];
}
