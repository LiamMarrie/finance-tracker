import React from 'react';

function Item({ name, amount, date, type }) {
  const amountLabel = type === 'income' ? 'Amount' : 'Price';

  return (
    <li
      className="container"
      style={{
        border: '1px solid #0f4c81',
        backgroundColor: '#e2eaeb',
        border: '2px solid black',
        padding: '10px',
        marginTop: '10px',
        borderRadius: '5px',
        display: 'flex',
        flexDirection: 'column',
        MozUserSelect: 'none',
        WebkitUserSelect: 'none',
        msUserSelect: 'none',
        width: '50%',
        cursor: 'pointer',
      }}
    >
      <div
        className="title"
        style={{
          color: 'black',
          fontSize: '20px',
          fontWeight: 'bold',
          marginBottom: '5px',
        }}
      >
        {name}
      </div>
      <div
        className="description"
        style={{
          color: 'black',
          fontSize: '15px',
        }}
      >
        {amountLabel}: ${amount}
      </div>
      <div
        className="description"
        style={{
          color: 'black',
          fontSize: '15px',
        }}
      >
        Date: {date}
      </div>
      <div
        className="description"
        style={{
          color: 'black',
          fontSize: '15px',
        }}
      >
      </div>
    </li>
  );
}

export default Item;
