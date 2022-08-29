import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses({expensesList}) {
  return (
    <div className="expenses">
      <ExpenseItem
        title={expensesList[0].title}
        amount={expensesList[0].amount}
        date={expensesList[0].date}
      />
      <ExpenseItem
        title={expensesList[1].title}
        amount={expensesList[1].amount}
        date={expensesList[1].date}
      />
      <ExpenseItem
        title={expensesList[2].title}
        amount={expensesList[2].amount}
        date={expensesList[2].date}
      />
    </div>
  );
}
export default Expenses;
