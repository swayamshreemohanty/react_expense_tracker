import Expenses from "./components/Expenses";

import "./components/Expenses.css";
function App() {
  const expenses = [
    {
      id: "1",
      title: "Toilet paper",
      amount: 94,
      date: new Date(2022, 8, 29),
    },
    {
      id: "2",
      title: "Car insurance",
      amount: 20,
      date: new Date(2022, 6, 12),
    },
    {
      id: "3",
      title: "JIO recharge",
      amount: 498,
      date: new Date(2021, 5, 30),
    },
  ];

  return (
    <div className="App">
      <h2>Let's get started</h2>
      <Expenses expensesList={expenses}></Expenses>
    </div>
  );
}

export default App;
