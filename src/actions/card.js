import { GET_DATA, GET_CARD_ENTRY } from '../constants/actionTypes';
import { DOMAIN } from '../constants/url';
import axios from 'axios';

export const searchCards = (filters) => {
  return (dispatch) => {
    return axios.get(`${DOMAIN}/nexacards`, { 
      params: filters 
    })
      .then(res => {
        dispatch(getDataAction(res.data))
      })
  }
}

export const getDataAction = (payload) => {
  return {
    type: GET_DATA,
    payload
  }
}

export const getEntryAction = (payload) => {
  return {
    type: GET_CARD_ENTRY,
    payload
  }
}