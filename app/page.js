'use client';
'use strict';

import React, { useContext, useState } from 'react';
import SignUp from '@/components/signup';
import { authContext } from '@/lib/store/auth-context';
import NavBar from '@/components/Nav';
import UserSpendingData from '@/components/userSpendingData';
import Income from '@/components/income';
import Transactions from '@/components/transactions';

export default function Home() {
  const { user } = useContext(authContext);
  const [selectedOption, setSelectedOption] = useState('home');
  const [spendingItems, setSpendingItems] = useState([]);
  const [incomeItems, setIncomeItems] = useState([]);

  if (!user) {
    return <SignUp />;
  }

  const addSpendingItem = (item) => {
    setSpendingItems([...spendingItems, item]);
  };

  const addIncomeItem = (item) => {
    setIncomeItems([...incomeItems, item]);
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
          <UserSpendingData onAddSpending={addSpendingItem} />
        )}
        {selectedOption === 'transactions' && (
          <Transactions spendingItems={spendingItems} incomeItems={incomeItems} />
        )}
        {selectedOption === 'income' && <Income onAddIncome={addIncomeItem} />}
      </main>
    </div>
  );
}
