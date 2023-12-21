import React from 'react';
import './ExpenseItem.css';
   

function ExpenseItem(props) {

  return (
    <li className="expense-list-item">
      <h2>{props.expenseName}</h2>
      <p className="expense-location">{props.locationOfExpenditure}</p>
      <div className="expense-list-item__price">{props.amount}</div>
    </li>
  );
}

export default ExpenseItem;


