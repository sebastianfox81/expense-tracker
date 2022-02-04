import React, { useReducer, useContext } from 'react';
import reducer from './reducer'

const AppContext = React.createContext();

const initialState = {
  transactions: [
      { id: 1, text: 'Flower', amount: -20 },
      { id: 2, text: 'Salary', amount: 300 },
      { id: 3, text: 'Book', amount: -10 },
      { id: 4, text: 'Camera', amount: 150 }
  ]
}

const AppProvider = ({children}) => {

  const [ state, dispatch ] = useReducer(reducer, initialState)

  return <AppContext.Provider value={{...state}}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}

export { AppContext, AppProvider }


