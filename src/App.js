import ExpenseItem from './components/ExpenseItem';

const expenses = [
  { id: 1, date: new Date(2023, 12, 18), expenseName: 'Food', amount: 'Rs 10', location: 'Grocery Store' },
  { id: 2, date: new Date(2023, 12, 18), expenseName: 'Petrol', amount: 'Rs 100', location: 'Gas Station' },
  { id: 3, date: new Date(2023, 12, 18), expenseName: 'Movies', amount: 'Rs 200', location: 'Cinema' },
];

const expenseItems = [];
for (let i = 0; i < expenses.length; i++) {
  const expense = expenses[i];
  expenseItems.push(
    <ExpenseItem
      key={expense.id}
      expenseName={expense.expenseName}
      amount={expense.amount}
      location={expense.location}
      date={expense.date}
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
