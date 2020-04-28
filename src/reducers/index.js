import { combineReducers } from 'redux';
import card from './card';
import deck from './deck';
import auth from './authentication';

const allReducers = combineReducers({
  card,
  deck,
  auth
})

export default allReducers;
