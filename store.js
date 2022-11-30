// @flow

import {combineReducers} from 'redux';
import configureStore from './src/store';
import rootSaga from './src/store/sagas';
import authReducer from './src/store/reducer/auth/index';

export default () => {
  const rootReducer = combineReducers({
    auth: authReducer,
  });

  return configureStore(rootReducer, rootSaga);
};
