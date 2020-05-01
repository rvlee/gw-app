import { CURRENT_VIEW } from '../constants/actionTypes';

export const getCurrentView = (payload) => {
  return {
    type: CURRENT_VIEW,
    payload
  }
};