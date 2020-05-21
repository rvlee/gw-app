import {
  CURRENT_VIEW, CAN_EDIT,
} from '../constants/actionTypes';


const initialState = {
  currentView: 'DISPLAYDECKS',
  canEdit: false,
};

const currentView = (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_VIEW:
      return {
        ...state,
        currentView: action.payload,
      };

    case CAN_EDIT:
      return {
        ...state,
        canEdit: action.payload,
      };
    default:
      break;
  }
  return state;
};

export default currentView;
