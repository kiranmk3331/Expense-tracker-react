import React from "react";
import "./ExpenseList.css";
import ExpenseItem from "../ExpenseItem/ExpenseItem";

const ExpenseList = ({ filteredExpenses }) => {
  let noExpenseContent = (
    <p className="no-expense">No expense found on this year</p>
  );

  return (
    <>
      {filteredExpenses.length > 0
        ? filteredExpenses.map((expense) => (
            <ExpenseItem key={expense.id} {...expense} />
          ))
        : noExpenseContent}
    </>
  );
};

export default ExpenseList;
