import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const year = new Date().getFullYear();
  const currentYear = year.toString();
	const [filteredYear, setFilteredYear] = useState(currentYear);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

	return (
		<Card className='expenses'>
			<ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
			<ExpensesList items={filteredExpenses}/>
		</Card>
	);
}
export default Expenses;
