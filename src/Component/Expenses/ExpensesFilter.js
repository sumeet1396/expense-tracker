import React from 'react';

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  const currentYear = new Date().getFullYear();
	let startYear = 2010;
	let years = [];

	while (startYear <= currentYear) {
		years.push(<option value={startYear}>{startYear}</option>);
		startYear++;
	}

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
					{years}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
