import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ onSubmit }) => {
  return (
    <div className="new-expense">
      <ExpenseForm onSubmit={onSubmit} />
    </div>
  );
};

export default NewExpense;
