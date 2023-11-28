// Transactions.js
import React, { useState } from 'react';
import Item from './item'; // Import the Item component

function Transactions() {
    const [spendingItems, setSpendingItems] = useState([]);

    const addSpendingItem = (item) => {
        setSpendingItems([...spendingItems, item]);
    };

    return (
        <div style={{ marginLeft: '200px' }}>
            <h2>Transactions</h2>
            {/* Render each spending item using the Item component */}
            <ul>
                {spendingItems.map((item, index) => (
                    <Item
                        key={index}
                        name={item.name}
                        price={item.price}
                        date={item.date}
                        category={item.category}
                    />
                ))}
            </ul>
        </div>
    );
}

export default Transactions;
