import "./ExpenseItem.css";
function ExpenseItem() {
  const expenseDate = new Date(2022, 8, 23).toISOString();
  const expenseTitle = "Car Insuranceas";
  const expenseAmount = 294.67;
  return (
    <div className="expense-item">
      <div className="expense-item__description">{expenseDate}</div>
      <div>
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
