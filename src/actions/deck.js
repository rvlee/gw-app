import axios from 'axios';
import {
  UPDATE_QUANTITY, GET_DECK_LIST, DELETE_DECK, SELECTED_DECK, CREATE_DECK, CLEAR_DECK, UPDATE_DECK,
} from '../constants/actionTypes';
import {
  DOMAIN,
} from '../constants/url';
import {
  DECK_IMAGE_URL,
} from '../constants/deck';

export const updateDeckQuantity = (deck) => ({
  type: UPDATE_QUANTITY,
  deck,
});

export const getDeckList = (payload) => ({
  type: GET_DECK_LIST,
  payload,
});

export const getDecks = () => (dispatch) => axios.get(`${DOMAIN}/decklists`)
  .then((res) => {
    dispatch(getDeckList(res.data));
  });

export const deleteDeck = (payload) => ({
  type: DELETE_DECK,
  payload,
});

export const deleteDeckAPI = (deckId, userName) => (dispatch) => axios.delete(`${DOMAIN}/deletedeck`,
  {
    params: {
      deckId, userName,
    },
  })
  .then(() => {
    dispatch(getDecks());
  });

export const selectedDeck = (payload) => ({
  type: SELECTED_DECK,
  payload,
});

export const createDeck = (payload) => ({
  type: CREATE_DECK,
  payload,
});

export const createDeckAPI = (deckName, isPub, deckData, image = DECK_IMAGE_URL) => {
  const userObj = {
    userName: 'Roy',
    decks: [{
      name: deckName,
      public: isPub,
      deckImage: image,
      deckList: deckData,
    }],
  };

  return (dispatch) => axios.post(`${DOMAIN}/makedeck`, userObj)
    .then(() => [
      dispatch(createDeck()),
    ])
    .then(() => {
      dispatch(getDecks());
    });
};

export const clearDeck = () => ({
  type: CLEAR_DECK,
});

export const updateDeck = (payload) => ({
  type: UPDATE_DECK,
  payload,
});

export const updateDeckAPI = (deck, deckData) => {
  const userObj = {
    userName: 'Roy',
    deck,
    deckList: deckData,
  };

  return (dispatch) => axios.post(`${DOMAIN}/updatedeck`, userObj)
    .then((res) => {
      dispatch(updateDeck(res.data));
    });
};
