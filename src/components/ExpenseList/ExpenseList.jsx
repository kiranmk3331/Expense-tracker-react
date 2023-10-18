import React from "react";
import "./ExpenseList.css";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import { filterExpenses } from "../Utils/helperFunctions";

const ExpenseList = ({ expenses, selectedYear }) => {
  const filteredExpenses = filterExpenses(expenses, selectedYear);

  return (
    <>
      {filteredExpenses.map((expense) => (
        <ExpenseItem key={expense.id} {...expense} />
      ))}
    </>
  );
};

export default ExpenseList;
