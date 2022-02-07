const reducer = (state, action) => {
  if (action.type === 'DELETE') {
    return { ...state, transactions: state.transactions.filter(item => item.id !== action.payload)}
  }
  if ( action.type === 'ADD_TRANSACTION') {
    return { ...state, transactions: [...state.transactions, action.payload]}
  }
  return state
}




export default reducer;