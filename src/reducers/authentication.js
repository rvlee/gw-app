import {
  SIGN_IN,
} from '../constants/actionTypes';

const initialState = {
  auth: true,
};

const authentication = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        auth: !state.auth,
      };
    default:
      return state;
  }
};

export default authentication;
