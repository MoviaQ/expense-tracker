import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Transaction = ( {transaction} ) => {
  const { deleteTransaction } = useContext(GlobalContext);

    const sign = transaction.amount > 0 ? '+' : ''
  return (
    <div>
      <li>
        {transaction.text} <span className={transaction.amount < 0 ? 'minus' : 'plus'}>{sign}{transaction.amount}$</span>{" "}
        <button onClick={() => deleteTransaction(transaction.id)}>x</button>
      </li>
    </div>
  );
};

export default Transaction;

