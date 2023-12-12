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
    setBudgetItems(prevItems => {
      const filteredItems = prevItems.filter(item => item.category !== categoryToDelete);

      if (filteredItems.length < prevItems.length) {
        alert(`Budget item for '${categoryToDelete}' has been successfully deleted.`);
      }
  
      return filteredItems;
    });
  };  

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
  
      //alert user
      alert(`Budget item for '${newItem.category}' added successfully with an amount of $${newItem.amount} for ${newItem.timeFrame}.`);
  
      //reset the form fields
      setNewCategory('');
      setNewAmount('');
      setTimeFrame('daily');
    } else {
      //alert the user to fill all fields
      alert('Please fill in both category and amount fields.');
    }
  };

  const calculateTotalIncome = () => {
    //adjust the filter condition to correctly identify all income transactions
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
    const total = categoryTransactions.reduce((total, transaction) => total + transaction.amount, 0);
  
    const budgetItem = budgetItems.find(item => item.category === category);
    if (budgetItem && total >= budgetItem.amount) {
      alert(`You have reached your budget limit for ${category}.`);
    }
  
    return total;
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
      <h3 style={{color: 'white', maxWidth: '750px', marginBottom: '20px', fontSize: '17px'}}>
        On the <strong>homepage</strong>, you can view your total spending and income, as well as create a budget for any spending category and track your progress towards that budget.
      </h3>
      <div className='totals-container' style={{ display: 'flex', flexDirection: 'row', color: 'black', }}>
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
      <div style={{ padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', width: '35%' }}>
        <h3 style={{ color: '#333', marginBottom: '15px' }}>Add New Budget Category</h3>
        
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', color: '#333' }}>Category:</label>
          <select
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ddd', color: 'black' }}
          >
            <option value="default" style={{ color: 'grey' }}>
              - Select -
            </option>
            {spendingCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))};
          </select>
        </div>

        <div style={{ marginBottom: '15px', position: 'relative' }}>
          <label style={{ display: 'block', marginBottom: '5px', color: '#333' }}>Amount:</label>
          <span
            className="dollar-sign"
            style={{
              position: 'absolute',
              top: '70%',
              left: '8px',
              transform: 'translateY(-50%)',
              fontSize: '14px',
              pointerEvents: 'none',
              color: 'black'
            }}
          >
            $
          </span>
          <input
            type="number"
            placeholder="Amount"
            value={newAmount}
            onChange={(e) => setNewAmount(e.target.value)}
            style={{ width: '100%', padding: '8px 8px 8px 25px', borderRadius: '4px', border: '1px solid #ddd', color: 'black' }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', color: '#333' }}>Time Frame:</label>
          <select 
            value={timeFrame} 
            onChange={(e) => setTimeFrame(e.target.value)} 
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ddd', color: 'black' }}
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>

        <button 
          onClick={addBudgetItem}
          style={{ padding: '10px 15px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Add
        </button>
      </div>

      <div style={{ padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', marginTop: '20px', width: '35%', color: '#333' }}>
        <h3 style={{ color: '#333', marginBottom: '15px' }}>Budget Categories</h3>
        {budgetItemsList}
      </div>
    </div>
  );
}

export default Budget;
