import React from 'react';
import './ExplainDetails.css';

function ExpenseDetails(props) {
  return (
    <div className="expense-details">
      <h3>{props.title}</h3>
      <div className="expense-location">{props.location}</div>
      <div className="expense-amount">${props.amount}</div>
    </div>
  );
}

export default ExpenseDetails;
