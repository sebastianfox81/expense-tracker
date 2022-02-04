import React from 'react';
import Transaction from './Transaction'
import { useGlobalContext } from './context'

const TransactionList = () => {

  const { transactions } = useGlobalContext();
  console.log(transactions)

  return <div>
    <h1>TransacionList </h1>
    {transactions.map((item) => {
      return (
       <Transaction key={item.id} {...item}/>

      )
    })}
  </div>;
};

export default TransactionList;
