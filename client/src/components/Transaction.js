import React from 'react';

const Transaction = ({ text, amount }) => {
  return <div>
      <div>
        {text}
      </div>
      <div>
        {amount}
      </div>
  </div>;
};

export default Transaction;
