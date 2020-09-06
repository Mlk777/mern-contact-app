import { combineReducers } from 'redux';
import contacts from './contacts';
import auth from './auth';
import alerts from './alerts';

export default combineReducers({
  auth,
  alerts,
  contacts,
});
