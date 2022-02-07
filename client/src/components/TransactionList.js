import React from 'react';
import Transaction from './Transaction'
import { useGlobalContext } from './context'
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Typography } from '@material-ui/core'

const TransactionList = () => {

  const { transactions } = useGlobalContext();

  const total = transactions
        .map((item) => item.amount)
        .reduce((acc, curr) => acc += curr, 0)

  return <div>
    <h1>TransacionList </h1>
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Balance : </TableCell>
            <TableCell>${total}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {transactions.map((item) => {
      return (
       <Transaction key={item.id} {...item}/>

      )
    })}
        </TableBody>
      </Table>
    </TableContainer>
    <ul>


    </ul>
  </div>;
};

export default TransactionList;
