import React, { useReducer, useContext } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20, date: '01/01/22' },
    { id: 2, text: "Salary", amount: 300, date: '01/01/22' },
    { id: 3, text: "Book", amount: -10, date: '01/01/22' },
    { id: 4, text: "Camera", amount: 150, date: '01/01/22' },
  ],
};

const AppProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(reducer, initialState);

  const deleteTransaction = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const addTransaction = (transaction) => {
    dispatch({ type: 'ADD_TRANSACTION', payload: transaction})
  }

  return (
    <AppContext.Provider value={{ ...state, deleteTransaction, addTransaction }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
