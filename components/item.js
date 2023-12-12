import React from 'react';
import { MdDelete } from "react-icons/md";

function Item({ id, name, amount, date, type, onDelete }) {
  const amountLabel = type === 'income' ? 'Amount' : 'Price';

  const handleDelete = () => {
    try {
      onDelete(id);
    } catch (error) {
      console.log(`Error in deleting item: ${error}`);
    }
  }

  return (
    <li
      style={{
        border: 'none',
        backgroundColor: '#f3f4f6',
        padding: '15px',
        marginTop: '15px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        cursor: 'pointer',
        transition: 'transform 0.3s ease',
      }}
    >
      <div>
        <div style={{ color: '#333', fontSize: '20px', fontWeight: 'bold', marginBottom: '5px' }}>
          {name}
        </div>
        <div style={{ color: '#333', fontSize: '15px' }}>
          {amountLabel}: ${amount}
        </div>
        <div style={{ color: '#333', fontSize: '15px' }}>
          Date: {date}
        </div>
      </div>
      
      <button
        onClick={handleDelete}
        style={{
          backgroundColor: '#e63946', 
          border: 'none',
          padding: '5px 10px',
          borderRadius: '5px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
        }}
      >
        <MdDelete style={{ color: 'white', fontSize: '20px' }}/>
      </button>
    </li>
  );
}

export default Item;
