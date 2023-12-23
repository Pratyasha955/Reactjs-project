import React from 'react';

import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
  const deleteExpenseHandler = () => {
    console.log('Deleted')
  };

  const clickHandler = () => {
    console.log('updated')
  };

  return (
    <Card className="expense-list-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
          amount={props.amount}
          location={props.location}
          title={props.expenseName}
        />
        <button onClick={clickHandler}>Change Title</button>
      <button onClick={deleteExpenseHandler}>Delete Expense</button>
    </Card>
  );
}

export default ExpenseItem;