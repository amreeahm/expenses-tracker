import React, { createContext, useReducer } from "react";

import AppReducer from "./AppReducer";

//Initial State

const initialState = {
  transactions: [],
};

// Create Context

export const AppSate = createContext(initialState);

// Provider

const AppStateProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions

  const delTransaction = (id) => {
    dispatch({
      type: "DEL_TRANSACTION",
      payload: id,
    });
  };

  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };

  return (
    <AppSate.Provider
      value={{
        transactions: state.transactions,
        delTransaction,
        addTransaction,
      }}
    >
      {props.children}
    </AppSate.Provider>
  );
};

export default AppStateProvider;
