import React, { useContext } from "react";
import Transaction from "./Transaction";

import { AppSate } from "../context/AppState";

const TransactionList = () => {
  const { transactions } = useContext(AppSate);

  return (
    <React.Fragment>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </React.Fragment>
  );
};

export default TransactionList;
