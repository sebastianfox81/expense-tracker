import React, { useContext } from 'react';
import { Grid, Box, Card, CardContent, Typography} from '@material-ui/core'

import { useGlobalContext } from './context'

const Balance = () => {

  const { transactions } = useGlobalContext();

  const total = transactions
        .map((item) => item.amount)
        .reduce((acc, curr) => acc += curr, 0)

  console.log(total)

  return <div>
    <Grid container spacing={3} alignItems='center' justifyContent='space-between'>
      <Grid item>
        <Typography variant='h5'>Your Balance</Typography>
      </Grid>
      <Grid item>
      <Typography variant="h4">${total}</Typography>
      </Grid>

    </Grid>

  </div>;
};

export default Balance;
