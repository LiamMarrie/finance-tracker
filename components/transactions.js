import React, { useState } from 'react';
import Item from '@/components/item';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

function Transactions({ spendingItems = [], incomeItems = [] }) {
  const [showSpendingDetails, setShowSpendingDetails] = useState(false);
  const [showIncomeDetails, setShowIncomeDetails] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState([]);

  const toggleSpendingDetails = () => {
    setShowSpendingDetails(!showSpendingDetails);
  };

  const toggleIncomeDetails = () => {
    setShowIncomeDetails(!showIncomeDetails);
  };

  const calculateTotal = (items) => {
    return items.reduce((sum, item) => sum + parseFloat(item.amount), 0);
  };

  const totalSpending = calculateTotal(spendingItems);
  const totalIncome = calculateTotal(incomeItems);

  const groupByCategory = (items) => {
    const grouped = {};
    items.forEach((item) => {
      if (!grouped[item.category]) {
        grouped[item.category] = [];
      }
      grouped[item.category].push(item);
    });
    return grouped;
  };

  const groupedSpending = groupByCategory(spendingItems);
  const groupedIncome = groupByCategory(incomeItems);

  const toggleCategory = (category) => {
    if (expandedCategories.includes(category)) {
      setExpandedCategories(expandedCategories.filter((cat) => cat !== category));
    } else {
      setExpandedCategories([...expandedCategories, category]);
    }
  };

  return (
    <div style={{ marginLeft: '40px', display: 'flex', flexDirection: 'column', height: 'calc(100vh - 100px)', overflowY: 'auto' }}>
      {/* Spending Container */}
      <div
        className="spending-container"
        style={{
          backgroundColor: '#3B4D66',
          border: '2px solid black',
          padding: '1rem',
          width: 'calc(50% - 1rem)', 
          maxWidth: 'calc(50% - 1rem)', 
          borderRadius: '10px',
          cursor: 'pointer',
          marginBottom: '1rem',
        }}
        onClick={toggleSpendingDetails}
      >
        <h2
          style={{
            fontSize: '20px',
            fontWeight: 'bold',
            color: 'white',
          }}
        >
          Spending: ${totalSpending.toFixed(2)}
          <span
            style={{
              float: 'right',
              fontSize: '15px',
              marginTop: '8px',
              marginRight: '5px',
            }}
          >
            {showSpendingDetails ? <FaChevronUp /> : <FaChevronDown />}
          </span>
        </h2>
        <div
          className="inner-container"
          style={{
            backgroundColor: '#ABC1E1',
            border: '2px solid black',
            padding: '1rem',
            borderRadius: '10px',
            display: showSpendingDetails ? 'block' : 'none',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className='category-container'>
            {Object.keys(groupedSpending).map((category, index) => (
                <div key={index} style={{ backgroundColor: '#3B4D66', marginBottom: '10px', padding: '1rem', borderRadius: '15px' }}>
                    <div onClick={() => toggleCategory(category)}>
                        <h3 style={{ color: 'white', fontWeight: 'bold' }}>
                            {category}: ${calculateTotal(groupedSpending[category]).toFixed(2)}
                            <span
                                style={{
                                    float: 'right',
                                    fontSize: '15px',
                                    marginTop: '8px',
                                    marginRight: '5px',
                                    color: 'white'
                                }}
                            >
                                {expandedCategories.includes(category) ? <FaChevronUp /> : <FaChevronDown />}
                            </span>
                        </h3>
                    </div>
                    {expandedCategories.includes(category) && (
                        <ul>
                            {groupedSpending[category].map((item, itemIndex) => (
                                <Item
                                    key={itemIndex}
                                    name={item.name}
                                    amount={item.amount}
                                    date={item.date}
                                    type="spending"
                                    category={item.category}
                                />
                            ))}
                        </ul>
                    )}
                </div>
            ))}
          </div>
        </div>
      </div>

      {/* Income Container */}
      <div
        className="income-container"
        style={{
          backgroundColor: '#3B4D66',
          border: '2px solid black',
          padding: '1rem',
          width: 'calc(50% - 1rem)', 
          maxWidth: 'calc(50% - 1rem)',
          borderRadius: '10px',
          cursor: 'pointer',
          marginBottom: '1rem',
        }}
        onClick={toggleIncomeDetails}
      >
        <h2
          style={{
            fontSize: '20px',
            fontWeight: 'bold',
            color: 'white',
          }}
        >
          Income: ${totalIncome.toFixed(2)}
          <span
            style={{
              float: 'right',
              fontSize: '15px',
              marginTop: '8px',
              marginRight: '5px',
            }}
          >
            {showIncomeDetails ? <FaChevronUp /> : <FaChevronDown />}
          </span>
        </h2>
        <div
          className="inner-container"
          style={{
            backgroundColor: '#ABC1E1',
            border: '2px solid black',
            padding: '1rem',
            borderRadius: '10px',
            display: showIncomeDetails ? 'block' : 'none',
          }}
          onClick={(e) => e.stopPropagation()}
        >
            <div className='category-container'>
                {Object.keys(groupedIncome).map((category, index) => (
                    <div key={index} style={{ backgroundColor: '#3B4D66', marginBottom: '10px', padding: '1rem', borderRadius: '15px'}}>
                        <div onClick={() => toggleCategory(category)}>
                            <h3 style={{ color: 'white', fontWeight: 'bold' }}>
                                {category}: ${calculateTotal(groupedIncome[category]).toFixed(2)}
                                <span
                                    style={{
                                        float: 'right',
                                        fontSize: '15px',
                                        marginTop: '8px',
                                        marginRight: '5px',
                                    }}
                                >
                                    {expandedCategories.includes(category) ? <FaChevronUp /> : <FaChevronDown />}
                                </span>
                            </h3>
                        </div>
                        {expandedCategories.includes(category) && (
                            <ul>
                                {groupedIncome[category].map((item, itemIndex) => (
                                    <Item
                                        key={itemIndex}
                                        name={item.name}
                                        amount={item.amount}
                                        date={item.date}
                                        type="income"
                                        source={item.source}
                                    />
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
}

export default Transactions;
