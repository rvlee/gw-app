import { UPDATE_DECK, GET_DECK_LIST, DELETE_DECK, SELECTED_DECK } from '../constants/actionTypes';

const initialState = {
  newDeckData: {},
  deckList: null,
  selectedDeck: null,
}

const deck = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_DECK: 
      return {
        ...state,
        newDeckData: action.deck
      }

    case GET_DECK_LIST:
      return {
        ...state,
        deckList: action.payload
      }

    case DELETE_DECK:
      return {
        ...state,
        deckList: action.payload
      }

    case SELECTED_DECK:
      return {
        ...state,
        selectedDeck: action.payload
      }
  }
  return state;
}

export default deck;
