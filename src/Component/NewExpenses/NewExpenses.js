import React, { useState } from 'react';
import NewExpenseForm from './NewExpensesForm';


const NewExpenses = (props) => {
  return (
    <div className='new-expense-container'>
      <NewExpenseForm />
    </div>
  );
}
export default NewExpenses;
