import {
  ADD_BUBBLE,
  DELETE_BUBBLE,
  UPDATE_BUBBLE,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_BUBBLES,
  CLEAR_FILTER
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_BUBBLE:
      return {
        ...state,
        bubbles: [...state.bubbles, action.payload]
      }
    default:
      return state;
  }
} 