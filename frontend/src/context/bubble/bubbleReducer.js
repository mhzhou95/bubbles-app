import {
  ADD_BUBBLE,
  DELETE_BUBBLE,
  UPDATE_BUBBLE,
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
    case UPDATE_BUBBLE:
      return {
        ...state,
        bubbles: state.bubbles.map(bubble => bubble.id === action.payload.id ? action.payload : bubble)
      }
    case FILTER_BUBBLES:
      return {
        ...state,
        filtered: state.bubbles.filter(bubble => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return bubble.message.match(regex)
        })
      }
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null
      }
    default:
      return state;
  }
} 