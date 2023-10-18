import React, { useState } from "react";
import "./Expenses.css";
import ExpenseList from "../ExpenseList/ExpenseList";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpensesChart from "../ExpensesChart/ExpensesChart";
import { filterExpenses } from "../Utils/helperFunctions";

const Expenses = ({ expenses }) => {
  const [selectedYear, setSelectedYear] = useState("");
  const filteredExpenses = filterExpenses(expenses, selectedYear);

  const selectYearHandler = (e) => {
    setSelectedYear(e.target.value);
  };
  return (
    <div className="expenses">
      <ExpenseFilter
        selectHandler={selectYearHandler}
        selectedYear={selectedYear}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpenseList
        expenses={expenses}
        selectedYear={selectedYear}
        filteredExpenses={filteredExpenses}
      />
    </div>
  );
};

export default Expenses;
