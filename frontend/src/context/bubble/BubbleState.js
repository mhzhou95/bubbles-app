import React, { useReducer } from 'react';
import uuid from 'uuid';
import BubbleContext from './bubbleContext';
import bubbleReducer from './bubbleReducer';

import {
  ADD_BUBBLE,
  DELETE_BUBBLE,
  UPDATE_BUBBLE,
  FILTER_BUBBLES,
  CLEAR_FILTER
} from '../types';

const BubbleState = props => {
  // set initial State grab from backend
  const initialState = {
    bubbles: [{
      id: 1,
      message: 'first bubble'
    },
    {
      id: 2,
      message: 'second bubble'
    }
    ],
    filtered: null
  }

  // connect reducer with state
  const [state, dispatch] = useReducer(bubbleReducer, initialState);

  // Add bubble
  const addBubble = bubble => {
    bubble.id = uuid.v4();
    dispatch({ type: ADD_BUBBLE, payload: bubble })
  }
  // Update bubble
  const updateBubble = bubble => {
    dispatch({ type: UPDATE_BUBBLE, payload: bubble })
  }
  // Delete bubble
  const deleteBubble = id => {
    dispatch({ type: DELETE_BUBBLE, payload: id })
  }
  // Search Filter
  const filterBubbles = (text) => {
    dispatch({ type: FILTER_BUBBLES, payload: text })
  }
  // Clear Search Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  }
  return (
    <BubbleContext.Provider
      value={{
        bubbles: state.bubbles,
        filtered: state.filtered,
        addBubble,
        deleteBubble,
        updateBubble,
        filterBubbles,
        clearFilter
      }}
    >
      {props.children}
    </BubbleContext.Provider>
  );
}

export default BubbleState;