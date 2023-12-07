import React, { useState, useEffect } from 'react';
import BudgetItem from '@/components/BudgetItem';
import Transactions from '@/app/pages/transactions';

function Budget({ transactions, onAddSpending }) {
  const spendingCategories = [
    'groceries',
    'food',
    'restaurants',
    'entertainment',
    'clothing',
    'gifts',
    'transportation',
    'bills',
    'health',
    'other',
  ];

  const loadBudgetItems = () => {
    const storedItems = localStorage.getItem('budgetItems');
    return storedItems ? JSON.parse(storedItems) : [];
  };

  const [budgetItems, setBudgetItems] = useState(loadBudgetItems());
  const [newCategory, setNewCategory] = useState('');
  const [newAmount, setNewAmount] = useState('');
  const [timeFrame, setTimeFrame] = useState('daily');

  useEffect(() => {
    localStorage.setItem('budgetItems', JSON.stringify(budgetItems));
  }, [budgetItems]);

  const addBudgetItem = () => {
    if (newCategory && newAmount) {
      const newItem = { 
        category: newCategory, 
        amount: parseFloat(newAmount), 
        timeFrame: timeFrame 
      };
      setBudgetItems(prevItems => {
        const existingItem = prevItems.find(item => item.category === newItem.category);
        if (existingItem) {
          // Update the existing item's amount (optional, based on your app's logic)
          return prevItems.map(item => item.category === newItem.category ? 
            { ...item, amount: item.amount + newItem.amount } : 
            item);
        } else {
          // Add new budget item
          return [...prevItems, newItem];
        }
      });
      setNewCategory('');
      setNewAmount('');
      setTimeFrame('daily');
    }
  };  

  const addSpendingItem = (newSpending) => {
    setBudgetItems(prevItems => {
        // Check if the category already exists
        const existingItem = prevItems.find(item => item.category === newSpending.category);
        if (existingItem) {
            // Update the existing item's amount
            return prevItems.map(item => 
                item.category === newSpending.category ? 
                { ...item, amount: item.amount + newSpending.amount } : 
                item
            );
        } else {
            // Add new category and amount
            return [...prevItems, { category: newSpending.category, amount: newSpending.amount }];
        }
    });
  };


  const calculateTotal = (category) => {
    const categoryTransactions = transactions.filter(transaction => transaction.category === category);
    return categoryTransactions.reduce((total, transaction) => total + transaction.amount, 0);
  };

  const displayedBudgetItems = budgetItems.filter((budgetItem) =>
    spendingCategories.includes(budgetItem.category)
  );
  
  const budgetItemsList = displayedBudgetItems.map((budgetItem, index) => (
    <BudgetItem
      key={index}
      category={budgetItem.category}
      totalSpent={calculateTotal(budgetItem.category)}
      budgetAmount={budgetItem.amount}
      timeFrame={budgetItem.timeFrame}
    />
  ));

  return (
    <div style={{ marginLeft: '40px', color: 'white',height: 'calc(100vh - 100px)', overflowY: 'auto'
    }}>
      <h2>Budget Page</h2>
      <div>
        <h3>Add New Budget Category</h3>
        <select
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          style={{ color: 'black' }}
        >
          <option value="default" style={{ color: 'grey' }}>
            - Select -
          </option>
          {spendingCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <div style={{ position: 'relative' }}>
          <span
            className="dollar-sign"
            style={{
              position: 'absolute',
              top: '50%',
              left: '8px',
              transform: 'translateY(-50%)',
              fontSize: '14px',
              pointerEvents: 'none',
              color: 'black',
            }}
          >
            $
          </span>
          <input
            type="number"
            placeholder="Amount"
            value={newAmount}
            onChange={(e) => setNewAmount(e.target.value)}
            style={{ paddingLeft: '20px', color: 'black' }}
          />
        </div>
        <div>
          <label>Select Time Frame: </label>
          <select 
            value={timeFrame} 
            onChange={(e) => setTimeFrame(e.target.value)} 
            style={{ color: 'black' }}
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
        <button onClick={addBudgetItem}>Add</button>
      </div>
      <div>
        <h3>Budget Categories</h3>
        {budgetItemsList}
      </div>
    </div>
  );
}

export default Budget;
