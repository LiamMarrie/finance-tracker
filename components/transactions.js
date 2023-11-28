// transactions.js
import React from 'react';
import Item from './item';

function Transactions({ spendingItems }) {
    return (
        <div style={{ marginLeft: '200px' }}>
            <h2 style={{
                fontSize: '20px',
                fontWeight: 'bold',
                color: 'white',
                paddingTop: '50px'
            }}>Transactions</h2>
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
