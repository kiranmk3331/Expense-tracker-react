import React from "react";
import "./ExpenseFilter.css";

const ExpenseFilter = ({ selectHandler, selectedYear }) => {
  const initialYear = 2019;
  const endYear = new Date().getFullYear();
  const yearArray = [];

  if (initialYear < endYear) {
    for (let year = initialYear; year <= endYear; year++) {
      yearArray.push(year);
    }
  }

  return (
    <div className="expense-filter">
      <div className="expense-filter__control">
        <h4>Filter by Year</h4>
        <select
          className="year-select"
          onChange={selectHandler}
          value={selectedYear}
        >
          {yearArray.map((year) => (
            <option value={year} key={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
