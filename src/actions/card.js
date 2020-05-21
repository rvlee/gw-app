import axios from 'axios';
import {
  GET_DATA, GET_CARD_ENTRY,
} from '../constants/actionTypes';
import {
  DOMAIN,
} from '../constants/url';

export const getDataAction = (payload) => ({
  type: GET_DATA,
  payload,
});

export const searchCards = (filters) => (dispatch) => axios.get(`${DOMAIN}/nexacards`, {
  params: filters,
})
  .then((res) => {
    dispatch(getDataAction(res.data));
  });

export const getEntryAction = (payload) => ({
  type: GET_CARD_ENTRY,
  payload,
});
