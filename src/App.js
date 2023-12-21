import ExpenseItem from './components/ExpenseItem';

const expenses = [
  { id: 1, expenseName: 'Food', amount: 'Rs 10', locationOfExpenditure: 'Grocery Store' },
  { id: 2, expenseName: 'Petrol', amount: 'Rs 100', locationOfExpenditure: 'Gas Station' },
  { id: 3, expenseName: 'Movies', amount: 'Rs 200', locationOfExpenditure: 'Cinema' },
];

const expenseItems = [];
for (let i = 0; i < expenses.length; i++) {
  const expense = expenses[i];
  expenseItems.push(
    <ExpenseItem
      key={expense.id}
      expenseName={expense.expenseName}
      amount={expense.amount}
      locationOfExpenditure={expense.locationOfExpenditure}
    />
  );
}
function App() {
  return (
    <div className="expense-list">
      <h2>Expense Items</h2>
      <div>
        {expenseItems}
      </div>
    </div>
  );
}

export default App;
