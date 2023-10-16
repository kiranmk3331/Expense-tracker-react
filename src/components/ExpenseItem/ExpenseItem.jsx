import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = ({ date, title, amount }) => {
  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-content">
        <h2 className="expense-title">{title}</h2>
        <div className="expense-amount">{amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
