import React, { useState } from 'react';

const NewExpenseForm = (props) => {
	return (
		<form>
			<div className='new-expense-form'>
				<div className='new-expense-input'>
					<label>Title</label>
					<input
					type='text'
					/>
				</div>
				<div className='new-expense-input'>
					<label>Amount</label>
					<input
					type='number'
					min='0.01'
					step='0.01'
					/>
				</div>
				<div className='new-expense-input'>
					<label>Date</label>
					<input
					type='date'
					min='2019-01-01'
					max='2022-12-31'
					/>
				</div>
			</div>
			<div className='new-expense-btns'>
				<button type='button'>Cancel</button>
				<button type='submit'>Add Expense</button>
			</div>
		</form>
	);
}
export default NewExpenseForm;
