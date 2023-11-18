import React, { useState, useContext } from "react";
import { AppSate } from "../context/AppState";

const AddTransaction = () => {
  const [error, setError] = useState(false);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const { addTransaction } = useContext(AppSate);

  const textChangeHandler = (event) => {
    setText(event.target.value);

    if (text.trim().length >= 0) {
      setError(false);
    }
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);

    if (amount.trim().length >= 0) {
      setError(false);
    }
  };

  const addTransactionHandler = (event) => {
    event.preventDefault();

    if (text.trim().length === 0 || amount.trim().length === 0) {
      setError(true);
      return;
    }

    setError(false);

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);

    setAmount("");
    setText("");
  };

  return (
    <React.Fragment>
      <h3>Add new transaction</h3>
      <form onSubmit={addTransactionHandler}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            value={text}
            onChange={textChangeHandler}
            placeholder="Enter text..."
            autoComplete="off"
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={amountChangeHandler}
            placeholder="Enter amount..."
          />
        </div>
        {error && <p>Please enter some values.</p>}
        <button className="btn">Add transaction</button>
      </form>
    </React.Fragment>
  );
};

export default AddTransaction;
