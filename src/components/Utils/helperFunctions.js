export const filterExpenses = (expenses, year) => {
  if (year === "") {
    return expenses;
  } else {
    return expenses.filter(
      (expense) => expense.date.getFullYear().toString() === year
    );
  }
};
