import {
  UPDATE_QUANTITY,
  GET_DECK_LIST,
  DELETE_DECK,
  SELECTED_DECK,
  CREATE_DECK,
  CLEAR_DECK,
  UPDATE_DECK,
} from '../constants/actionTypes';


const initialState = {
  newDeckData: {
  },
  deckList: null,
  selectedDeck: null,
};

const deck = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_QUANTITY:
      return {
        ...state,
        newDeckData: action.deck,
      };

    case GET_DECK_LIST:
    case DELETE_DECK:
    case CREATE_DECK:
      return {
        ...state,
        deckList: action.payload,
      };

    case SELECTED_DECK:
      return {
        ...state,
        selectedDeck: action.payload,
      };

    case CLEAR_DECK:
      return {
        ...state,
        newDeckData: {
        },
      };

    case UPDATE_DECK:
      return {
        ...state,
        selectedDeck: action.payload,
      };

    default:
      break;
  }
  return state;
};

export default deck;
