import React, { useState, useContext } from 'react';
import { useGlobalContext } from './context'
const AddTransaction = () => {


  const [ text, setText ] = useState('');
  const [ amount, setAmount ] = useState(0);

  const { addTransaction } = useGlobalContext()

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.random(),
      text,
      amount: +amount
    }
    addTransaction(newTransaction)
  }

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleAmount = (e) => {
    setAmount(e.target.value)
  }

  return <div>
    <h1>Add Transaction</h1>
    <form onSubmit={handleSubmit}>
      <label htmlFor="text">Text</label>
      <input id="text" type="text" onChange={handleChange}/>
      <label htmlFor="amount">Amount</label>
      <input type="number" onChange={handleAmount}/>
      <button type='submit'>Add Transaction</button>
    </form>
  </div>;
};

export default AddTransaction;
