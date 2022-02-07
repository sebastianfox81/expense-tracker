import React, {useContext} from 'react';
import { useGlobalContext } from './context';
import { TableRow, TableCell } from '@material-ui/core'

const Transaction = ({ text, amount, id, date }) => {

  const { deleteTransaction } = useGlobalContext()

  const sign = amount < 0 ? '-' : '+'
  
  return (
    <TableRow>
      <TableCell>{date}</TableCell>
      <TableCell>{text}</TableCell>
      <TableCell>{amount}</TableCell>
    </TableRow>


)
};

export default Transaction;
