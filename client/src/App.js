import './App.css';
import React from 'react';
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { Container, CssBaseline } from '@material-ui/core'

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Container maxWidth="xs">
      <Header />
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <AddTransaction />
      </Container>
    </div>
  );
}

export default App;
