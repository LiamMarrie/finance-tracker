import React, { useState } from 'react';
import Item from '@/components/item';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Budget from '@/app/pages/budget';


function Transactions({ spendingItems = [], incomeItems = [], onItemsUpdate }) {
  const [showSpendingDetails, setShowSpendingDetails] = useState(false);
  const [showIncomeDetails, setShowIncomeDetails] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState([]);
  const [selectedSort, setSelectedSort] = useState([]);

  const sortItems = (items, sortType) => {
    switch (sortType){
      case 'highest':
        return items.sort((a, b) => b.amount - a.amount);
      case 'lowest':
        return items.sort((a, b) => a.amount - b.amount);
      case 'earliest':
        return items.sort((a, b) => new Date(a.date) - new Date(b.date));
      case 'latest':
        return items.sort((a, b) => new Date(b.date) - new Date(a.date));
      default:
        return items;
    }
  }

  const handleDeleteItem = (itemId, type) => {
    let itemDeleted = false;
    let itemType = '';

    if (type === 'spending') {
      const updatedSpendingItems = spendingItems.filter(item => {
        if (item.id === itemId) {
          itemDeleted = true;
          itemType = 'spending';
        }
        return item.id !== itemId;
      });
      onItemsUpdate(updatedSpendingItems, 'spending');
    } else if (type === 'income') {
      const updatedIncomeItems = incomeItems.filter(item => {
        if (item.id === itemId) {
          itemDeleted = true;
          itemType = 'income';
        }
        return item.id !== itemId;
      });
      onItemsUpdate(updatedIncomeItems, 'income');
    }

    //alert user that item has been deleted
    if (itemDeleted) {
      alert(`The ${itemType} item has been successfully deleted.`);
    } else {
      alert(`Item not found or already deleted.`);
    }
  };

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
      <h3 style={{color: 'white', maxWidth: '750px', marginBottom: '20px', fontSize: '17px'}}>
        You can access your entire spending and income history on the <strong>transaction page</strong>. We have categorized your spending and income data to make it easier for you to track your finances effortlessly!
      </h3>
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
        <div className='spending-header' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h2
            style={{
              fontSize: '20px',
              fontWeight: 'bold',
              color: 'white',
              margin: 0,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            Spending: ${totalSpending.toFixed(2)}
          </h2>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <select 
              value={selectedSort} 
              onChange={(e) => {
                e.stopPropagation();
                setSelectedSort(e.target.value);
              }}
              onClick={(e) => e.stopPropagation()}
              style={{ 
                color: 'black', 
                fontSize:'15px', 
                fontWeight: 'normal', 
                marginRight: '10px', 
                marginTop: '10px',
                borderRadius: '5px',
                textAlign: 'center',
                border: '2px solid black'
            }}
            >
              <option value="">Select Filter</option>
              <option value="highest">Highest Spending</option>
              <option value="lowest">Lowest Spending</option>
              <option value="earliest">Earliest Spending</option>
              <option value="latest">Latest Spending</option>
            </select>
            <span
              style={{
                float: 'right',
                fontSize: '15px',
                marginTop: '8px',
                marginRight: '5px',
                color: 'white'
              }}
            >
              {showSpendingDetails ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </div>
        </div>
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
                            {sortItems(groupedSpending[category], selectedSort).map((item) => (
                                <Item 
                                    key={item.id} 
                                    id={item.id}
                                    name={item.name}
                                    amount={item.amount}
                                    date={item.date}
                                    type="spending"
                                    category={item.category}
                                    onDelete={() => handleDeleteItem(item.id, 'spending')}
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
        <div className='income-header' style={{
          display: 'flex',
          alignItems: 'center', 
          justifyContent: 'space-between' 
        }}
        >
          <h2
            style={{
              fontSize: '20px',
              fontWeight: 'bold',
              color: 'white',
              margin: 0,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            Income: ${totalIncome.toFixed(2)}
          </h2>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <select 
              value={selectedSort} 
              onChange={(e) => {
                e.stopPropagation();
                setSelectedSort(e.target.value);
              }}
              onClick={(e) => e.stopPropagation()}
              style={{ 
                color: 'black', 
                fontSize:'15px', 
                fontWeight: 'normal', 
                marginRight: '10px', 
                marginTop: '10px',
                borderRadius: '5px',
                textAlign: 'center',
                border: '2px solid black'
            }}
            >
              <option value="">Select Filter</option>
              <option value="highest">Highest Spending</option>
              <option value="lowest">Lowest Spending</option>
              <option value="earliest">Earliest Spending</option>
              <option value="latest">Latest Spending</option>
            </select>
            <span
              style={{
                float: 'right',
                fontSize: '15px',
                marginTop: '8px',
                marginRight: '5px',
                color: 'white'
              }}
            >
              {showIncomeDetails ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </div>
        </div>
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
                                {sortItems(groupedIncome[category], selectedSort).map((item) => (
                                    <Item
                                        key={item.id} 
                                        id={item.id}
                                        name={item.name}
                                        amount={item.amount}
                                        date={item.date}
                                        type="income"
                                        category={item.category}
                                        onDelete={() => handleDeleteItem(item.id, 'income')}
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
