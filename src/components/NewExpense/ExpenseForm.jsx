import React, { useState } from "react";
import "./NewExpense.css";

const ExpenseForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [showForm, setShowForm] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    const randomId = Math.floor(Math.random() * (100 - 7 + 1)) + 7;
    const newExpense = { id: randomId, title, amount, date: new Date(date) };
    onSubmit(newExpense);
    setTitle("");
    setAmount("");
    setDate("");
  };

  const showFormHandler = () => {
    setShowForm((prevState) => !prevState);
  };

  if (!showForm) {
    return (
      <button type="button" onClick={showFormHandler}>
        Add New Expense
      </button>
    );
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense-content">
        <div className="input-field">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="input-field">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            name="amount"
            placeholder="Enter Amount"
            value={amount}
            required
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="input-field">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            placeholder="Date"
            min="2017-01-01"
            max={new Date().toJSON().split("T")[0]}
            value={date}
            required
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>
      <div className="new-expense-buttons">
        <button onClick={showFormHandler}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
