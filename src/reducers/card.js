import {
  GET_DATA, GET_CARD_ENTRY,
} from '../constants/actionTypes';


const initialState = {
  data: [],
  selectedEntry: null,
};

const card = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        data: action.payload,
      };

    case GET_CARD_ENTRY:
      return {
        ...state,
        selectedEntry: action.payload,
      };
    default:
      break;
  }
  return state;
};

export default card;
