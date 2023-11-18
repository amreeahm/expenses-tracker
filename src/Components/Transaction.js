import React, { useContext } from "react";

import { AppSate } from "../context/AppState";

const Transaction = ({ transaction }) => {
  const { delTransaction } = useContext(AppSate);

  const deleteTransactionHandler = () => {
    delTransaction(transaction.id);
  };

  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}{" "}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button className="delete-btn" onClick={deleteTransactionHandler}>
        x
      </button>
    </li>
  );
};

export default Transaction;
