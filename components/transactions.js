import React, { useState } from 'react';
import UserSpendingData from './userSpendingData';

function Transactions() {
  // Define state to store user transactions
  const [transactions, setTransactions] = useState([]);

  return (
    <div>
      {/* Add a section for Spending transactions */}
      <div>
        <h2>Spending</h2>
        <ul>
          {/* Map through spending transactions and display each transaction */}
          {transactions
            .filter((transaction) => transaction.type === 'Spending')
            .map((transaction, index) => (
              <li key={index}>
                Name: {transaction.name}, Price: {transaction.price}, Date: {transaction.date}
              </li>
            ))}
        </ul>
      </div>

      {/* Add a section for Income transactions */}
      <div>
        <h2>Income</h2>
        <ul>
          {/* Map through income transactions and display each transaction */}
          {transactions
            .filter((transaction) => transaction.type === 'Income')
            .map((transaction, index) => (
              <li key={index}>
                Name: {transaction.name}, Price: {transaction.price}, Date: {transaction.date}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Transactions;
