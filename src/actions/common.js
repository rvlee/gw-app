import {
  CURRENT_VIEW, CAN_EDIT,
} from '../constants/actionTypes';

export const getCurrentView = (payload) => ({
  type: CURRENT_VIEW,
  payload,
});

export const toggleEditDeck = (payload) => ({
  type: CAN_EDIT,
  payload,
});
