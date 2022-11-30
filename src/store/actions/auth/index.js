import * as actionLabels from '../../actionLabels';

// Login

export const setTokenStart = () => ({
  type: actionLabels.SET_AUTH_TOKEN_START,
});

export const setTokenSaga = payload => ({
  type: actionLabels.SET_AUTH_TOKEN_SAGA,
  payload,
});

export const setTokenSuccess = payload => ({
  type: actionLabels.SET_AUTH_TOKEN_SUCCESS,
  payload,
});

export const setTokenFail = payload => ({
  type: actionLabels.SET_AUTH_TOKEN_FAIL,
  payload,
});
