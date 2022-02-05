const reducer = (state, action) => {
  if (action.type === 'DELETE') {
    return { ...state, transactions: state.transactions.filter(item => item.id !== action.payload)}
  }
  return state
}

export default reducer;