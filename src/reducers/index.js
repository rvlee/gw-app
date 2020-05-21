import {
  combineReducers,
} from 'redux';
import card from './card';
import deck from './deck';
import auth from './authentication';
import common from './common';

const allReducers = combineReducers({
  card,
  deck,
  auth,
  common,
});

export default allReducers;
