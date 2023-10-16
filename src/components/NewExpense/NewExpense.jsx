import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ onSubmit }) => {
  return (
    <div className="new-expense" onSubmit={onSubmit}>
      <ExpenseForm />
    </div>
  );
};

export default NewExpense;
