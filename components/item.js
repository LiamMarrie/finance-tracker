import React from 'react';
import { MdDelete } from "react-icons/md";

function Item({ id, name, amount, date, type, onDelete }) {
  const amountLabel = type === 'income' ? 'Amount' : 'Price';

  const handleDelete = () =>{
    try{
      onDelete(id);
    } catch(error){
      console.log(`Error in deleting item: ${error}`);
    }
  }

  return (
    <li
      className="container"
      style={{
        border: '2px solid black',
        backgroundColor: '#e2eaeb',
        padding: '10px',
        marginTop: '10px',
        borderRadius: '5px',
        display: 'flex',
        justifyContent: 'space-between', // Distribute space between children
        alignItems: 'center', // Align children vertically in the middle
        MozUserSelect: 'none',
        WebkitUserSelect: 'none',
        msUserSelect: 'none',
        width: '50%',
        cursor: 'pointer',
      }}
    >
      <div>
        <div className="title" style={{ color: 'black', fontSize: '20px', fontWeight: 'bold', marginBottom: '5px' }}>
          {name}
        </div>
        <div className="description" style={{ color: 'black', fontSize: '15px' }}>
          {amountLabel}: ${amount}
        </div>
        <div className="description" style={{ color: 'black', fontSize: '15px' }}>
          Date: {date}
        </div>
      </div>
      
      <button onClick={handleDelete} style={{ backgroundColor: 'red', border: 'none', padding: '5px 10px', borderRadius: '5px' }}>
        <MdDelete style={{
          color: 'white',
          fontSize: '20px'
        }}/>
      </button>
    </li>
  );
}

export default Item;
