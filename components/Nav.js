'use client';
'use strict';
import { useContext} from 'react';
import { useState } from 'react';
import { authContext } from '@/lib/store/auth-context';
import UserSpendingData from '@/components/userSpendingData';
import Transactions from '@/components/transactions';


import { IoHome } from "react-icons/io5"; // Import the IoHome icon once

import { ImStatsDots } from "react-icons/im";
import { IoIosLogOut } from "react-icons/io";
import { TbPigMoney } from "react-icons/tb";
import { FaChartLine } from "react-icons/fa6";
import { MdOutlineContactSupport } from "react-icons/md";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaMoneyBillTransfer } from "react-icons/fa6";

function NavBar({ isVisible, toggleTransactions, selectedOption, onSelectOption}){
    const { user, loading, logout } = useContext(authContext);
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    }

    if (!isVisible) {
        return null;
    }

    return (
        <header style={{
            display: 'flex',
            backgroundColor: '#3B4D66',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '1rem',
            marginTop: '0', 
            borderRight: '2px solid black',
            borderRadius: '0 20px 20px 0',
            width: '225px',
            position: 'fixed',
            top: '0', 
            left: '0', 
            height: '100vh',
            zIndex: '100'
        }}
        >
            {/* USER INFORMATION */}
            {user && !loading && (
                <div
                    onClick={toggleNav}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        padding: '1rem',
                        cursor: 'pointer',
                        borderBottom: isVisible ? 'none' : '2px solid white',
                    }}
                >
                    {/* img */}
                    <img
                        style={{
                            width: '3.5rem',
                            height: '3.5rem',
                            borderRadius: '50%',
                            marginRight: '0.5rem',
                            border: '1px solid black',
                        }}
                        src={user.photoURL}
                        alt={user.displayName}
                        referrerPolicy="no-referrer"
                    />
                    {/* name */}
                    <p
                        style={{
                            fontSize: '1rem',
                            fontWeight: 'bold',
                            color: 'white',
                            maxWidth: '150px',
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            textOverflow: 'ellipsis',
                            position: 'relative',
                        }}
                        title={user.displayName}
                    >
                        Hello, {user.displayName}
                        <span
                            style={{
                                visibility: 'hidden',
                                width: 'auto',
                                backgroundColor: 'black',
                                color: 'white',
                                textAlign: 'center',
                                borderRadius: '6px',
                                padding: '5px 0',
                                position: 'absolute',
                                zIndex: 1,
                                bottom: '100%',
                                left: '50%',
                                marginLeft: '-60px',
                                fontSize: '12px',
                            }}
                            onMouseOver={(e) => e.currentTarget.style.visibility = 'visible'}
                            onMouseOut={(e) => e.currentTarget.style.visibility = 'hidden'}
                        >
                            {user.displayName}
                        </span>
                    </p>
                </div>
            )}

            {/* NAV OPTIONS */}
            {isNavOpen && user && !loading && (
                <div style={{width: '100%'}}> 
                    <nav
                        style={{
                            display: 'flex',
                            backgroundColor: '#313E51',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '2.5rem',
                            borderRadius: '0 10px 10px 0',
                            border: '2px solid black',
                            marginBottom: '1.5rem'
                        }}
                    >
                        <button
                            onClick={logout}
                            style={{
                                backgroundColor: '#EE5454',
                                border: '2px solid black',
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: '10px',
                                color: 'white',
                                padding: '0.5rem',
                                justifyContent: 'center',
                
                            }} 

                            onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#f22323';
                            e.target.style.boxShadow= '8px 8px 0 0 black',
                            e.target.style.transform = 'scale(1.05)';
                            }}

                            onMouseLeave={(e) => {
                            e.target.style.backgroundColor = '#EE5454'; 
                            e.target.style.boxShadow= 'none',
                            e.target.style.transform = 'scale(1)'; 
                            }}
                        >
                            Logout
                        </button>
                        <p style={{
                            color: 'white',
                            fontSize: '16px',
                            fontWeight: 'semibold',
                            margin: '1rem 0',
                        
                        }}>- or -</p>
                        <ImStatsDots
                            style={{
                                backgroundColor: '#13e16c',
                                border: '2px solid black',
                                borderRadius: '10px',
                                color: 'white',
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: '0.5rem',
                            }}

                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = '#26D782';
                                e.target.style.boxShadow= '8px 8px 0 0 black',
                                e.target.style.transform = 'scale(1.05)';
                            }}
    
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = '#13e16c'; 
                                e.target.style.boxShadow= 'none',
                                e.target.style.transform = 'scale(1)'; 
                            }}
                        />
                    </nav>
                </div>
            )}

            {/* PAGE LINKS */}
            <div style={{
                width: '100%'
            }}>
                <ul style={{
                // ...
                }}>
                <li style={{
                    marginBottom: '1rem',
                    color: 'white',
                    fontSize: '1.5rem',
                    borderBottom: '2px solid white',
                }}>
                    <a href='/' style={{
                    display: 'flex',
                    alignItems: 'center',
                    color: selectedOption === 'home' ? '#FEB737' : 'white', // Highlight the selected option
                    }}
                    onClick={(e) => {
                        e.preventDefault();
                        onSelectOption('home'); // Pass 'home' as the selected option
                    }}
                    >
                    <IoHome style={{
                        marginRight: '10px'
                    }} /> Home
                    </a>
                </li>
                <li style={{
                    marginBottom: '1rem',
                    color: 'white',
                    fontSize: '1.5rem',
                    borderBottom: '2px solid white',
                }}>
                    <a href='/' style={{
                    display: 'flex',
                    alignItems: 'center',
                    color: selectedOption === 'transactions' ? '#FEB737' : 'white', // Highlight the selected option
                    }}
                    onClick={(e) => {
                        e.preventDefault();
                        onSelectOption('transactions'); // Pass 'transactions' as the selected option
                    }}
                    >
                    <FaMoneyBillTransfer style={{
                        marginRight: '10px'
                    }} /> Transactions
                    </a>
                </li>
                <li style={{
                    marginBottom: '1rem',
                    color: 'white',
                    fontSize: '1.5rem',
                    borderBottom: '2px solid white',
                }}>
                    <a href='/' style={{
                    display: 'flex',
                    alignItems: 'center',
                    color: selectedOption === 'income' ? '#FEB737' : 'white', // Highlight the selected option
                    }}
                    onClick={(e) => {
                        e.preventDefault();
                        onSelectOption('income'); // Pass 'income' as the selected option
                    }}
                    >
                    <FaMoneyBillTrendUp style={{
                        marginRight: '10px'
                    }} /> Income
                    </a>
                </li>
                <li style={{
                    marginBottom: '1rem',
                    color: 'white',
                    fontSize: '1.5rem',
                    borderBottom: '2px solid white',
                }}>
                    <a href='/' style={{
                    display: 'flex',
                    alignItems: 'center',
                    color: selectedOption === 'graphs' ? '#FEB737' : 'white', // Highlight the selected option
                    }}
                    onClick={(e) => {
                        e.preventDefault();
                        onSelectOption('graphs'); // Pass 'graphs' as the selected option
                    }}
                    >
                    <FaChartLine style={{
                        marginRight: '10px'
                    }} /> Graphs
                    </a>
                </li>
                <li style={{
                    marginBottom: '1rem',
                    color: 'white',
                    fontSize: '1.5rem',
                }}>
                    <a href='/' style={{
                    display: 'flex',
                    alignItems: 'center',
                    color: selectedOption === 'advice' ? '#FEB737' : 'white', // Highlight the selected option
                    }}
                    onClick={(e) => {
                        e.preventDefault();
                        onSelectOption('advice'); // Pass 'advice' as the selected option
                    }}
                    >
                    <MdOutlineContactSupport style={{
                        marginRight: '10px'
                    }} /> Advice
                    </a>
                </li>
                </ul>
            </div>
        </header>
    );    
}
export default NavBar;
