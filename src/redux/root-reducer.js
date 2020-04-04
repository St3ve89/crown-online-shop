import { combineReducer } from 'redux';

import userReducer from './user/user.reducer';

export default combineReducer({
  user: userReducer
});
