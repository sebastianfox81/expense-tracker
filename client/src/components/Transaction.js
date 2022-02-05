import React, {useContext} from 'react';
import { useGlobalContext } from './context'

const Transaction = ({ text, amount, id }) => {

  const { deleteTransaction } = useGlobalContext()

  const sign = amount < 0 ? '-' : '+'

  return (
    <li>
    {text}<span>{sign}${Math.abs(amount)}</span>
    <button onClick={() => deleteTransaction(id)}>X</button>
    </li>

)
};

export default Transaction;
