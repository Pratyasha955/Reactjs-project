import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

function App() {
  const DUMMY_EXPENSES = [
    { id: 1, date: new Date(2023, 11, 18), title: 'Food', amount: '10', location: 'Grocery Store' },
    { id: 2, date: new Date(2020, 11, 18), title: 'Petrol', amount: '500', location: 'Gas Station' },
    { id: 3, date: new Date(2022, 11, 18), title: 'Movies', amount: '200', location: 'Cinema' },
    { id: 4, date: new Date(2023, 5, 12), title: 'Electronics', amount: '800', location: 'Tech Store' },
    { id: 5, date: new Date(2022, 8, 28), title: 'Clothing', amount: '150', location: 'Fashion Mall' },
    { id: 6, date: new Date(2021, 2, 5), title: 'Books', amount: '50', location: 'Bookstore' },
    { id: 7, date: new Date(2022, 7, 15), title: 'Dining Out', amount: '80', location: 'Restaurant' },
    { id: 8, date: new Date(2023, 10, 20), title: 'Healthcare', amount: '300', location: 'Pharmacy' },
    { id: 9, date: new Date(2023, 3, 9), title: 'Home Supplies', amount: '120', location: 'Supermarket' },
    { id: 10, date: new Date(2023, 6, 17), title: 'Travel', amount: '350', location: 'Travel Agency' },
    { id: 11, date: new Date(2022, 1, 25), title: 'Gym Membership', amount: '75', location: 'Fitness Center' },
    { id: 12, date: new Date(2021, 4, 3), title: 'Car Maintenance', amount: '200', location: 'Auto Repair Shop' },
    { id: 13, date: new Date(2020, 9, 10), title: 'Education', amount: '250', location: 'School Supplies Store' },
  ];
  // const expenseItems = [];
  // for (let i = 0; i < expenses.length; i++) {
  //   const expense = expenses[i];
  //   expenseItems.push(
  //     <ExpenseItem
  //       key={expense.id}
  //       date={expense.date}
  //       expenseName={expense.expenseName}
  //       amount={expense.amount}
  //       location={expense.location}
  //     />
  //   );
  // }
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div className="expense-list">
      {/* <h2>Expense Items</h2>
      <div>
        {expenseItems}
      </div> */}
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
