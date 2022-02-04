import React, { useState } from 'react';

const AddTransaction = () => {

  const [ name, setName ] = useState('');
  const [ amount, setAmount ] = useState(0);

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const handleAmount = (e) => {
    setAmount(e.target.value)
  }

  return <div>
    <h1>Add Transaction</h1>
    <form>
      <label htmlFor="text">Text</label>
      <input id="name" type="text" onChange={handleChange}/>
      <label htmlFor="amount">Amount</label>
      <input type="number" onChange={handleAmount}/>
    </form>
  </div>;
};

export default AddTransaction;
