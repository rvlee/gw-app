import { CURRENT_VIEW } from '../constants/actionTypes';

const initialState = {
  currentView: 'DISPLAYDECKS'
}

const currentView = (state = initialState, action) => {
  switch(action.type) {
    case CURRENT_VIEW:
    return {
      currentView: action.payload 
    }
  }
  return state;
}

export default currentView;