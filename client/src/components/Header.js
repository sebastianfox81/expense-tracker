import React, {useContext} from 'react';

import { useGlobalContext } from './context';

const Header = () => {

  const { transactions } = useGlobalContext();
  console.log(transactions)

  return <div>
    <h2>Expense Tracker</h2>
  </div>;
};

export default Header;
