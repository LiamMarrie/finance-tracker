'use client';
'use strict';
import { useContext} from 'react';
import { useState } from 'react';
import { authContext } from '@/lib/store/auth-context';

{/* ICONS */}
import { IoHome } from "react-icons/io5";
import { ImStatsDots } from "react-icons/im";
import { FaChartLine } from "react-icons/fa6";
import { MdOutlineContactSupport } from "react-icons/md";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";

function NavBar({ isVisible, selectedOption, onSelectOption}){
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
                                backgroundColor: '#BBAAB8',
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
                            e.target.style.backgroundColor = '#292643';
                            e.target.style.boxShadow= '8px 8px 0 0 black',
                            e.target.style.transform = 'scale(1.05)';
                            }}

                            onMouseLeave={(e) => {
                            e.target.style.backgroundColor = '#BBAAB8'; 
                            e.target.style.boxShadow= 'none',
                            e.target.style.transform = 'scale(1)'; 
                            }}
                        >
                            Logout
                        </button>
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
                    fontSize: '18px',
                    borderBottom: '2px solid white',
                }}>
                    <a href='/' style={{
                    display: 'flex',
                    alignItems: 'center',
                    color: selectedOption === 'home' ? '#00a08f' : 'white', 
                    }}
                    onClick={(e) => {
                        e.preventDefault();
                        onSelectOption('home'); 
                    }}
                    >
                    <IoHome style={{
                        marginRight: '10px',
                        color: '#00a08f',
                    }} /> Home
                    </a>
                </li>
                <li style={{
                    marginBottom: '1rem',
                    color: 'white',
                    fontSize: '18px',
                    borderBottom: '2px solid white',
                }}>
                    <a href='/' style={{
                    display: 'flex',
                    alignItems: 'center',
                    color: selectedOption === 'spending' ? '#fee074' : 'white', 
                    }}
                    onClick={(e) => {
                        e.preventDefault();
                        onSelectOption('spending'); 
                    }}
                    >
                    <FaMoneyBillTransfer style={{
                        marginRight: '10px',
                        color: '#fee074',
                    }} /> Spending
                    </a>
                </li>
                <li style={{
                    marginBottom: '1rem',
                    color: 'white',
                    fontSize: '18px',
                    borderBottom: '2px solid white',
                }}>
                    <a href='/' style={{
                    display: 'flex',
                    alignItems: 'center',
                    color: selectedOption === 'income' ? '#ff9469' : 'white',
                    }}
                    onClick={(e) => {
                        e.preventDefault();
                        onSelectOption('income');
                    }}
                    >
                    <FaMoneyBillTrendUp style={{
                        marginRight: '10px',
                        color: '#ff9469',
                    }} /> Income
                    </a>
                </li>
                <li style={{
                    marginBottom: '1rem',
                    color: 'white',
                    fontSize: '18px',
                    borderBottom: '2px solid white',
                }}>
                    <a href='/' style={{
                    display: 'flex',
                    alignItems: 'center',
                    color: selectedOption === 'transactions' ? '#fe8d8f' : 'white', 
                    }}
                    onClick={(e) => {
                        e.preventDefault();
                        onSelectOption('transactions');
                    }}
                    >
                    <GiTakeMyMoney style={{
                        marginRight: '10px',
                        color: '#fe8d8f',
                    }} /> Transactions
                    </a>
                </li>
                <li style={{
                    marginBottom: '1rem',
                    color: 'white',
                    fontSize: '18px',
                    borderBottom: '2px solid white',
                }}>
                    <a href='/' style={{
                    display: 'flex',
                    alignItems: 'center',
                    color: selectedOption === 'chart' ? '#9c538b' : 'white', 
                    }}
                    onClick={(e) => {
                        e.preventDefault();
                        onSelectOption('chart');
                    }}
                    >
                    <FaChartLine style={{
                        marginRight: '10px',
                        color: '#9c538b',
                    }} /> Charts
                    </a>
                </li>
                <li style={{
                    marginBottom: '1rem',
                    color: 'white',
                    fontSize: '18px',
                }}>
                    <a href='/' style={{
                    display: 'flex',
                    alignItems: 'center',
                    color: selectedOption === 'advice' ? '#9c5' : 'white', 
                    }}
                    onClick={(e) => {
                        e.preventDefault();
                        onSelectOption('advice'); 
                    }}
                    >
                    <MdOutlineContactSupport style={{
                        marginRight: '10px',
                        color: '#9c5',
                    }} /> Advice
                    </a>
                </li>
                </ul>
            </div>
        </header>
    );    
}
export default NavBar;
