import React from 'react';

const Transaction = ({ text, amount }) => {

  const sign = amount < 0 ? '-' : '+'

  return (
    <li>
    {text}<span>{sign}${Math.abs(amount)}</span>
    <button>X</button>
    </li>

)
};

export default Transaction;
