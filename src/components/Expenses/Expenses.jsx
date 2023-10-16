import React from "react";
import "./Expenses.css";
import ExpenseList from "../ExpenseList/ExpenseList";

const Expenses = ({ expenses }) => {
  return (
    <div className="expenses">
      <ExpenseList expenses={expenses} />
    </div>
  );
};

export default Expenses;
