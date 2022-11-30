import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import auth from './auth/index';

const persistConfig = {
  key: 'root',
  storage,
  // List of all reducers we don't want to persist
  blacklist: [],
  // List of all reducers we want to persist
  whitelist: ['auth'],
};

// Persist Only User -> User profile reducer
// const userProfilePersistConfig = {
//   key: "user",
//   storage,
//   whitelist: ["userProfile"],
// };

const allReducers = combineReducers({
  auth,
});

const persistedReducer = persistReducer(persistConfig, allReducers);

const rootReducer = (state, action) => {
  if (action.type === 'RESET_APP') {
    state = undefined;
  }

  return allReducers;
};

export default rootReducer;
