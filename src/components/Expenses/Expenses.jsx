import React, { useState } from "react";
import "./Expenses.css";
import ExpenseList from "../ExpenseList/ExpenseList";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";

const Expenses = ({ expenses }) => {
  const [selectedYear, setSelectedYear] = useState("");

  const selectYearHandler = (e) => {
    setSelectedYear(e.target.value);
  };
  return (
    <div className="expenses">
      <ExpenseFilter
        selectHandler={selectYearHandler}
        selectedYear={selectedYear}
      />
      <ExpenseList expenses={expenses} />
    </div>
  );
};

export default Expenses;
