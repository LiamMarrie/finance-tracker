'use client';
'use strict';

import React, { useContext, useState, useEffect } from 'react';
import SignUp from '@/components/signup';
import { authContext } from '@/lib/store/auth-context';
import NavBar from '@/components/Nav';
import UserSpendingData from '@/app/pages/userSpendingData';
import Income from '@/app/pages/income';
import Transactions from '@/app/pages/transactions';
import AIAssistant from '@/app/pages/assistant';
import Budget from '@/app/pages/budget';


export default function Home() {
  const { user } = useContext(authContext);
  const [selectedOption, setSelectedOption] = useState('home');
  const [spendingItems, setSpendingItems] = useState([]);
  const [incomeItems, setIncomeItems] = useState([]);

  if (!user) {
    return <SignUp />;
  }

  const addSpendingItem = (newItem) => {
    const itemWithId = { ...newItem, id: Date.now() };
    setSpendingItems([...spendingItems, itemWithId]);
  };
  
  const addIncomeItem = (newItem) => {
    const itemWithId = { ...newItem, id: Date.now() };
    setIncomeItems([...incomeItems, itemWithId]);
  };
  

  const handleItemsUpdate = (updatedItems, type) => {
    if (type === 'spending') {
      setSpendingItems(updatedItems);
    } else if (type === 'income') {
      setIncomeItems(updatedItems);
    }
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  return (
    <div style={{ userSelect: 'none' }}>
      <NavBar
        isVisible={true}
        selectedOption={selectedOption}
        onSelectOption={(option) => setSelectedOption(option)}
      />
      <main
        style={{
          backgroundImage: `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="1440" height="960" fill="none" viewBox="0 0 1440 960"%3E%3Ccircle cx="-50.5" cy="75.5" r="416.5" stroke="%232D3949" stroke-width="144"%3E%3C/circle%3E%3Ccircle cx="1388.5" cy="840.5" r="416.5" stroke="%232D3949" stroke-width="144"%3E%3C/circle%3E%3C/svg%3E')`,
          backgroundColor: '#313E51',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          minHeight: '100vh',
          width: '100%',
          marginLeft: '200px',
          position: 'relative',
          overflow: 'hidden',
          position: 'fixed',
          zIndex: '1',
        }}
      >
        <div>
          <h1
            style={{
              fontSize: '20px',
              fontWeight: 'bold',
              color: 'white',
              display: 'flex',
              justifyContent: 'left',
              alignContent: 'center',
              marginLeft: '40px',
              marginTop: '25px',
            }}
          >
            {getGreeting()}, {user?.displayName}
          </h1>
        </div>
        {selectedOption === 'home' && (
          <Budget transactions={spendingItems} onAddSpending={addSpendingItem} />
        )}
        {selectedOption === 'spending' && (
          <UserSpendingData onAddSpending={addSpendingItem} />
        )}
        {selectedOption === 'transactions' && (
          <Transactions 
            spendingItems={spendingItems} 
            incomeItems={incomeItems} 
            onItemsUpdate={handleItemsUpdate} 
          />
        )}
        {selectedOption === 'income' && <Income onAddIncome={addIncomeItem} />}
        {selectedOption === 'advice' && <AIAssistant />}
      </main>
    </div>
  );
}
