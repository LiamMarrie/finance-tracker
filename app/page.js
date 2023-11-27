'use client';
'use strict';

import Image from 'next/image'
import React, { useContext } from 'react';
import { currencyFormatter } from '@/lib/utils';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import SignUp from '@/components/signup';
import { authContext } from '@/lib/store/auth-context';
import NavBar from '@/components/Nav';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Home() {
  const { user } = useContext(authContext);

  if (!user) {
    return <SignUp />;
  }

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  return (
    <div>
      <NavBar isVisible={true} />  
      <main style={{
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
        zIndex: '1'
      }}>
        {/* HOME PAGE CONTENT */}
        <div> 
          <h1 style={{
            fontSize: '20px',
            fontWeight: 'bold',
            color: 'white',
            display: 'flex',
            justifyContent: 'left',
            alignContent: 'center',
            marginLeft: '40px',
            marginTop: '25px'
          }}>
            {getGreeting()}, {user?.displayName}
          </h1>
        </div>
        {/* USER SPENDING DATA */}
        <div>
          <h2 style={{
            fontSize: '20px',
            fontWeight: 'bold',
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            margin: '0 auto'
          }}>{currencyFormatter()}</h2>
          
        </div>
      </main>
    </div>
  );
}
