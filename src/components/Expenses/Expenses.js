import { useState } from 'react';

import ExpenseItems from './ExpenseItems';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

import './Expenses.css';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {filteredExpenses.length === 0 && <p>No Expenses found.</p>}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
            <ExpenseItems
              key={expense.id}
              date={expense.date}
              title={expense.title}
              amount={expense.amount}
            />
          ))}

        {/* <ExpenseItems
          date={props.items[0].date}
          title={props.items[0].title}
          amount={props.items[0].amount}></ExpenseItems>
        <ExpenseItems
          date={props.items[1].date}
          title={props.items[1].title}
          amount={props.items[1].amount}></ExpenseItems>{' '}
        <ExpenseItems
          date={props.items[2].date}
          title={props.items[2].title}
          amount={props.items[2].amount}></ExpenseItems>{' '}
        <ExpenseItems
          date={props.items[3].date}
          title={props.items[3].title}
          amount={props.items[3].amount}></ExpenseItems> */}
      </Card>
    </div>
  );
}

export default Expenses;
