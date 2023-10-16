import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 1,
    title: "New Home TV",
    amount: 485,
    date: new Date(2019, 1, 26),
  },
  {
    id: 2,
    title: "New Car",
    amount: 650,
    date: new Date(2020, 1, 26),
  },
  {
    id: 3,
    title: "Car Insurance",
    amount: 234.5,
    date: new Date(2021, 2, 30),
  },
  {
    id: 4,
    title: "Mobile Phone Installment",
    amount: 34.56,
    date: new Date(2021, 3, 2),
  },
  {
    id: 5,
    title: "Car Installment",
    amount: 475,
    date: new Date(2021, 3, 3),
  },
  {
    id: 6,
    title: "Estate Taxes",
    amount: 637,
    date: new Date(2019, 4, 3),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const onFormSubmit = (NewExpense) => {
    setExpenses((prevExpenses) => [NewExpense, ...prevExpenses]);
  };

  return (
    <div className="App">
      <NewExpense onSubmit={onFormSubmit} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
