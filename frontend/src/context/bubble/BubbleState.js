import React, { useReducer } from 'react';
import axios from 'axios';
import BubbleContext from './bubbleContext';
import bubbleReducer from './bubbleReducer';

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

const BubbleState = props => {
  // set initial State grab from backend
  const initialState = {
    bubbles: null,
    filtered: null,
    error: null,
    loading: true
  }

  // connect reducer with state
  const [state, dispatch] = useReducer(bubbleReducer, initialState);
  // fetch bubbles
  const fetchBubbles = async () => {
    try {
      const res = await axios.get('/api/bubbles');
      dispatch({ type: FETCH_BUBBLES, payload: res.data })
    } catch (error) {
      dispatch({ type: FETCH_ERROR, payload: error.response.msg })
    }
  }

  // Add bubble
  const addBubble = async bubble => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    try {
      const res = await axios.post('/api/bubbles', bubble, config);
      dispatch({ type: ADD_BUBBLE, payload: res.data })
    } catch (error) {
      dispatch({ type: BUBBLE_ERROR, payload: error.response.msg })
    }
  }
  // Update bubble
  const updateBubble = bubble => {
    dispatch({ type: UPDATE_BUBBLE, payload: bubble })
  }
  // Delete bubble
  const deleteBubble = async id => {
    try {
      await axios.delete(`/api/bubbles/${id}`)
      dispatch({ type: DELETE_BUBBLE, payload: id })
    } catch (error) {
      dispatch({ type: BUBBLE_ERROR, payload: error.response.msg })
    }
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
        error: state.error,
        loading: state.loading,
        addBubble,
        deleteBubble,
        updateBubble,
        filterBubbles,
        clearFilter,
        fetchBubbles
      }}
    >
      {props.children}
    </BubbleContext.Provider>
  );
}

export default BubbleState;