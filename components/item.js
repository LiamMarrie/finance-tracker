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
      <button onClick={handleDelete} style={{
        backgroundColor: 'red'
      }}><MdDelete /></button>
    </li>
  );
}

export default Item;
