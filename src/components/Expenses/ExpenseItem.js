import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.expenseName);
  const [expense, setExpense] = useState(props.amount);
  const deleteExpenseHandler = () => {
    console.log('Deleted')
  };
  const changeExpenseHandler = () => {
    setExpense('100')
    console.log(expense)
  };
  const clickHandler = () => {
    setTitle('Updated')
    console.log(title)
  };
  return (
    <Card className="expense-list-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        amount={expense}
        location={props.location}
        title={title}
      />
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={changeExpenseHandler}>Change Expense</button>
      <button onClick={deleteExpenseHandler}>Delete Expense</button>
    </Card>
  );
}

export default ExpenseItem;