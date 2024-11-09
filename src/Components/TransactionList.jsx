import React, { useCallback, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transaction from './Transaction';

const TransactionList = () => {

    const {transactions} = useContext(GlobalContext)
    
  return (
    <div>
      <h3 className='transaction-header'> History </h3>
      <ul className="transaction-list">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
    </div>
  );
};

export default TransactionList
