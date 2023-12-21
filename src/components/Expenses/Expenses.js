import React from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  const expenseItems = [];

  for (let i = 0; i < props.items.length; i++) {
    const item = props.items[i];

    expenseItems.push(
      <ExpenseItem
        key={i} 
        expenseName={item.expenseName}
        location= {item.location}
        amount={item.amount}
        date={item.date}
      />
    );
  }

  return <Card className="expenses">{expenseItems}</Card>;
};

export default Expenses;
