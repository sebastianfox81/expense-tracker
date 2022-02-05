import React, {useContext} from 'react';
import { Box, Typography } from '@material-ui/core';

import { useGlobalContext } from './context';

const Header = () => {


  return <div>
    <Box>
      <Typography variant="h4">Expense Tracker</Typography>
    </Box>
  </div>;
};

export default Header;
