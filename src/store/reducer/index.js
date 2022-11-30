import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import auth from './auth';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
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

  return persistedReducer(state, action);
};

export default rootReducer;
