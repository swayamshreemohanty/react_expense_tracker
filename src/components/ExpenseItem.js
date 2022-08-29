import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
function ExpenseItem(props) {
  var expenseTitle = props.title;
  var expenseAmount = props.amount;

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div>
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
