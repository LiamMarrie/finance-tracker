import React, { createContext, useState } from 'react';

export const SpendingContext = createContext();

export const SpendingProvider = ({ children }) => {
  const [spendings, setSpendings] = useState([]);

  const addSpending = (spending) => {
    setSpendings(prevSpendings => [...prevSpendings, spending]);
  };

  return (
    <SpendingContext.Provider value={{ spendings, addSpending }}>
      {children}
    </SpendingContext.Provider>
  );
};