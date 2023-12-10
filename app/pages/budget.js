import React, { useState, useEffect } from 'react';
import BudgetItem from '@/components/BudgetItem';
import Transactions from '@/app/pages/transactions';
import { MdAttachMoney } from "react-icons/md";
import TotalsItem from '@/components/totalsItems';

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

  const deleteBudgetItem = (categoryToDelete) => {
    setBudgetItems(prevItems => prevItems.filter(item => item.category !== categoryToDelete));
  }

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
          //update the existing item's amount
          return prevItems.map(item => item.category === newItem.category ? 
            { ...item, amount: item.amount + newItem.amount } : 
            item);
        } else {
          return [...prevItems, newItem];
        }
      });
      setNewCategory('');
      setNewAmount('');
      setTimeFrame('daily');
    }
  };  

  const calculateTotalIncome = () => {
    // Adjust the filter condition to correctly identify all income transactions
    const incomeTransactions = transactions.filter(transaction => transaction.type === 'income');
    return incomeTransactions.reduce((total, transaction) => total + parseFloat(transaction.amount), 0);
  };
  
  const calculateTotalSpending = () => {
    const spendingTransactions = transactions.filter(transaction => transaction.type === 'spending');
    const total = spendingTransactions.reduce((total, transaction) => total + parseFloat(transaction.amount), 0);
    return total;
  };
  
  const totalIncome = calculateTotalIncome();
  const totalSpending = calculateTotalSpending();

  const addSpendingItem = (newSpending) => {
    setBudgetItems(prevItems => {
        //check if the category already exists
        const existingItem = prevItems.find(item => item.category === newSpending.category);
        if (existingItem) {
            //update the existing item's amount
            return prevItems.map(item => 
                item.category === newSpending.category ? 
                { ...item, amount: item.amount + newSpending.amount } : 
                item
            );
        } else {
            //add new category and amount
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
      onDelete={() => deleteBudgetItem(budgetItem.category)}
    />
  ));

  return (
    <div style={{ marginLeft: '40px', color: 'white',height: 'calc(100vh - 100px)', overflowY: 'auto'
    }}>
      <h2>Budget Page</h2>
      <div className='totals-container' style={{ display: 'flex', flexDirection: 'row', color: 'black' }}>
        <TotalsItem 
          title="Total Income" 
          total={totalIncome} 
          isSpending={false} 
        />

        <TotalsItem 
          title="Total Spending" 
          total={totalSpending} 
          isSpending={true} 
        />
      </div>
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
