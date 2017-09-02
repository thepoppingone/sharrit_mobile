import { combineReducers } from 'redux';
import CurrentUserReducer from './CurrentUserReducer';

export default combineReducers({
  currentUser: () => CurrentUserReducer,
});
