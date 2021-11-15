import React, { createContext, useContext, useReducer } from 'react';

export const StateContext = createContext(); // prepares the data

// wrap and provides the data to the children
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
