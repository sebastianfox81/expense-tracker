import React, { useReducer, useContext } from 'react';
import reducer from './reducer'

const AppContext = React.createContext();

const initialState = {
  transactions: ['hello']
}

const AppProvider = ({children}) => {

  const [ state, dispatch ] = useReducer(reducer, initialState)

  return <AppContext.Provider value={{...state}}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}

export { AppContext, AppProvider }


