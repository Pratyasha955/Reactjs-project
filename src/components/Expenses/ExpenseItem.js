import React from 'react';

import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {


  return (
    <Card className="expense-list-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
          amount={props.amount}
          location={props.location}
          title={props.expenseName}
        />
    </Card>
  );
}

export default ExpenseItem;