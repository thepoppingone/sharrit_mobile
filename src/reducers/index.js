import { combineReducers } from 'redux';
import CurrentUserReducer from './CurrentUserReducer';

export default combineReducers({
  auth: CurrentUserReducer,
});
