// @flow

import AuthSagas from './auth';

export default function* root() {
  yield [AuthSagas()];
}
