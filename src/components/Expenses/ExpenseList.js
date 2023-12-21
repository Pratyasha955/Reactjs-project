import ExpenseItem from './ExpenseItem';

function ExpenseList() {
  const expenses = [
    { id: 1, expenseName: 'Food', amount: 'Rs 10', locationOfExpenditure: 'Grocery Store' },
    { id: 2, expenseName: 'Petrol', amount: 'Rs 100', locationOfExpenditure: 'Gas Station' },
    { id: 3, expenseName: 'Movies', amount: 'Rs 200', locationOfExpenditure: 'Cinema' },
  ];

  return (
    <div className="expense-list">
      <h2>Expense Items</h2>
      <ul>
        {expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            expenseName={expense.expenseName}
            amount={expense.amount}
            locationOfExpenditure={expense.locationOfExpenditure}
          />
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
