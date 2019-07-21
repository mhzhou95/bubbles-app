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
    case DELETE_BUBBLE:
      return {
        ...state,
        bubbles: state.bubbles.filter(bubble => bubble.id !== action.payload)
      }
    default:
      return state;
  }
} 