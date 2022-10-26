import React from 'react';
import ExpenseItems from './ExpenseItems';

import './ExpensesList.css';

const ExpensesList = (props) => {
  {
    props.items.length === 0 && <p>No Expenses found.</p>;
  }
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItems
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
