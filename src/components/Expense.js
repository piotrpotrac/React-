import ExpenseItems from './ExpenseItems';
import Card from './Card';
import './Expenses.css';

function Expense(props) {
  return (
    <Card className="expenses">
      <ExpenseItems
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
        amount={props.items[3].amount}></ExpenseItems>
    </Card>
  );
}

export default Expense;
