import React, { useContext } from 'react';
import { useGlobalContext } from './context'

const IncomeExpenses = () => {

  const { transactions } = useGlobalContext();
  const amounts = transactions.map((item) => item.amount)

  const income = amounts
      .filter((amount) => amount > 0)
      .reduce((acc, curr) => (acc += curr), 0).toFixed(2)
  const expense = amounts
      .filter(amount => amount < 0)
      .reduce((acc, curr) => (acc += curr), 0).toFixed(2) * -1
  console.log(expense)

  return <div>

    <h4>Income</h4>
    <p>{income}</p>
    <h4>Expense</h4>
    <p>{expense}</p>
  </div>;
};

export default IncomeExpenses;

