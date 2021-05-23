import React, { useState } from 'react';
import NewExpenseForm from './NewExpensesForm';
import ErrorModal from '../UI/ErrorModal';

const NewExpenses = (props) => {

  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState();

  const saveExpenseDataHandler = (enteredExpenseData) => {

    const date = Date.parse(enteredExpenseData.date);

    if (enteredExpenseData.title.trim().length === 0 || enteredExpenseData.amount.trim().length === 0 || isNaN(date)) {
      setError({
        title: 'Invalid input',
        message: 'Please enter valid details',
      });
      return;
    }
    if (+enteredExpenseData.amount < 1) {
      setError({
        title: 'Invalid amount',
        message: 'Please enter a valid amount.',
      });
      return;
    }

    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div className='new-expense-container'>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <NewExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
}
export default NewExpenses;
