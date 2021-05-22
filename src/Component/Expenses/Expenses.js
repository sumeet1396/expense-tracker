import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
	console.log(props.expenses);
	return (
		<Card className='expenses'>
			<ExpensesList items={props.items}/>
		</Card>
	);
}
export default Expenses;
