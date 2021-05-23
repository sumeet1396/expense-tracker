import React, { useState } from 'react';

const NewExpenseForm = (props) => {

	const [userInput, setUserInput] = useState({
		title: '',
		amount: '',
		date: ''
	});

	const inputChangeHandler = (event) => {
		const {  name, value } = event.target;

		if (name === 'title') {
			setUserInput({
				...userInput,
				title: value,
			});
		} else if (name === 'amount') {
			setUserInput({
				...userInput,
				amount: value,
			});
		} else {
			setUserInput({
				...userInput,
				date: value,
			});
		}
	};

	const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: userInput.title,
      amount: userInput.amount,
      date: new Date(userInput.date),
    };

		console.log(expenseData);

    props.onSaveExpenseData(expenseData);
    setUserInput({
			title: '',
			amount: '',
			date: ''
		});

  };

	return (
		<form onSubmit={submitHandler}>
			<div className='new-expense-form'>
				<div className='new-expense-input'>
					<label>Title</label>
					<input
						type='text'
						name='title'
						value={userInput.title}
						onChange={inputChangeHandler}
					/>
				</div>
				<div className='new-expense-input'>
					<label>Amount</label>
					<input
						type='number'
						min='0.01'
						step='0.01'
						name = 'amount'
						value={userInput.amount}
						onChange={inputChangeHandler}
					/>
				</div>
				<div className='new-expense-input'>
					<label>Date</label>
					<input
						type='date'
						min='2015-01-01'
						name='date'
						value={userInput.date}
						onChange={inputChangeHandler}
					/>
				</div>
			</div>
			<div className='new-expense-btns'>
				<button type='button' onClick={props.onCancel}>Cancel</button>
				<button type='submit'>Add Expense</button>
			</div>
		</form>
	);
}
export default NewExpenseForm;
