import { UPDATE_DECK, GET_DECK_LIST, DELETE_DECK, SELECTED_DECK } from '../constants/actionTypes';
import { DOMAIN } from '../constants/url';
import axios from 'axios';

export const updateDeckAction = (deck) => {
  return {
    type: UPDATE_DECK,
    deck,
  }
}

export const getDeckList = (payload) => {
  return {
    type: GET_DECK_LIST,
    payload,
  }
}

export const getDecks = () => {
  return (dispatch) => {
    return axios.get(`${DOMAIN}/decklists`)
      .then(res=> {
        dispatch(getDeckList(res.data))
      })
  }
}

export const deleteDeck = (payload) => {
  return {
    type: DELETE_DECK,
    payload
  }
}

export const deleteDeckAPI = (id, userName) => {
  return (dispatch) => {
    return axios.delete(`${URI}/deletedeck`,
      {
        params: {deckId, userName}
      }
      .then(res => {
        getDecks()
      })
    )
  }
}

export const selectedDeck = (payload) => {
  return {
    type: SELECTED_DECK,
    payload
  }
}
