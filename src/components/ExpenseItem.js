import React from 'react';
import './ExpenseItem.css';

function ExpenseItem() {
  const LocationOfExpenditure = "Grocery Store"; 

  return (
    <div className="expense-list">
      <h2>Expense Items</h2>
      <ul>
        <li className="expense-list-item">
          <h2>Food</h2>
          <p className="expense-location">{LocationOfExpenditure}</p>
          <div className="expense-list-item__price">Rs 10</div>
        </li>
        <li className="expense-list-item">
          <h2>Petrol</h2>
          <p className="expense-location">{LocationOfExpenditure}</p>
          <div className="expense-list-item__price">Rs 100</div>
        </li>
        <li className="expense-list-item">
          <h2>Movies</h2>
          <p className="expense-location">{LocationOfExpenditure}</p>
          <div className="expense-list-item__price">Rs 200</div>
        </li>
      </ul>
    </div>
  );
}

export default ExpenseItem;


