import React, { useReducer } from 'react';
import uuid from 'uuid';
import AlertContext from './alertContext';
import alertReducer from './alertReducer';

import {
  SET_ALERT,
  REMOVE_ALERT
} from '../types';

const AlertState = props => {
  // set initial State
  const initialState = [];

  // connect reducer with state
  const [state, dispatch] = useReducer(alertReducer, initialState);

  // Set alert
  const setAlert = (msg, timeout = 10000) => {
    const id = uuid.v4();
    dispatch({
      type: SET_ALERT,
      payload: { msg, id }
    })
    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout)
  }

  return (
    <AlertContext.Provider
      value={{
        alerts: state,
        setAlert
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
}

export default AlertState;