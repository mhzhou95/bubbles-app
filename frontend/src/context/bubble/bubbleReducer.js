import {
  ADD_BUBBLE,
  DELETE_BUBBLE,
  UPDATE_BUBBLE,
  FILTER_BUBBLES,
  CLEAR_FILTER,
  BUBBLE_ERROR,
  FETCH_BUBBLES,
  FETCH_ERROR
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case FETCH_BUBBLES:
      return {
        ...state,
        bubbles: action.payload,
        loading: false
      }
    case ADD_BUBBLE:
      return {
        ...state,
        bubbles: [action.payload, ...state.bubbles],
        loading: false
      }
    case DELETE_BUBBLE:
      return {
        ...state,
        bubbles: state.bubbles.filter(bubble => bubble._id !== action.payload),
        loading: false
      }
    case UPDATE_BUBBLE:
      return {
        ...state,
        bubbles: state.bubbles.map(bubble => bubble._id === action.payload._id ?
          action.payload : bubble),
        loading: false
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
    case BUBBLE_ERROR:
    case FETCH_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
} 