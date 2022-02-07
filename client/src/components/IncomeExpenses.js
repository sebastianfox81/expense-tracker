import React, { useContext } from 'react';
import { useGlobalContext } from './context';
import { Box, Grid, Card, CardContent, Typography } from '@material-ui/core';
import useStyles from './styles'

const IncomeExpenses = () => {

  const classes = useStyles()

  const { transactions } = useGlobalContext();
  const amounts = transactions.map((item) => item.amount)

  const income = amounts
      .filter((amount) => amount > 0)
      .reduce((acc, curr) => (acc += curr), 0).toFixed(2)
  const expense = amounts
      .filter(amount => amount < 0)
      .reduce((acc, curr) => (acc += curr), 0).toFixed(2) * -1
  console.log(expense)

  return <Box>
    <Grid container spacing={3} justifyContent='center'>
      <Grid item >
        <Card className={classes.card}>
          <Typography variant='h5'>
          Income
          </Typography>
          <Typography variant='h5'>
            {income}
          </Typography>
        </Card>
      </Grid>
      <Grid item >
        <Card className={classes.card}>
          <Typography variant='h5'>
          Expense
          </Typography>
          <Typography variant='h5'>
            {expense}
          </Typography>
        </Card>
      </Grid>
    </Grid>
  </Box>;
};

export default IncomeExpenses;

