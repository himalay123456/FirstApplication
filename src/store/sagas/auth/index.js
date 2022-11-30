import {setTokenStart, setTokenSuccess, setTokenFail} from '../../actions';
import {put, takeLatest, all} from 'redux-saga/effects';

import * as actionLabels from '../../actionLabels';

export function* setAuthToken({payload}) {
  console.log('pay', payload);
  try {
    yield put(setTokenStart());
    if (payload === 'login') {
      yield put(setTokenSuccess());
    } else {
      yield put(setTokenFail());
    }
  } catch (e) {
    yield put(setTokenFail(e.message));
  }
}

export function* watchAuthentication() {
  yield all([takeLatest(actionLabels.SET_AUTH_TOKEN_SAGA, setAuthToken)]);
}
