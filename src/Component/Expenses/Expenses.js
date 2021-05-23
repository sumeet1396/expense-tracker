import React from 'react';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {

	return (
		<Card className='expenses'>
			<ExpensesList items={props.items}/>
		</Card>
	);
}
export default Expenses;
