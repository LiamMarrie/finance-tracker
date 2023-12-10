import React from 'react';
import { MdAttachMoney, MdOutlineMoneyOffCsred } from "react-icons/md"; 
function TotalsItem({ title, total, isSpending = true }) {
  return (
    <div className='total-container' style={{
      display: 'flex',
      padding: '10px',
      borderRadius: '4px',
      marginBottom: '20px',
      marginRight: '25px',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '15px',
      backgroundColor: '#3B4D66',
      border: '2px solid black'
    }}>
      <div className='img-container' style={{ marginRight: '20px', backgroundColor: '#3B4D66', color: 'white', fontSize: '40px' }}>
        {isSpending ? <MdOutlineMoneyOffCsred  style={{color: '#ff2e4c'}}/> : <MdAttachMoney style={{color: '#49deb2'}}/>}
      </div>
      <div className='content' style={{display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'white', fontSize: '20px', marginRight: '20px'}}>
        <span style={{fontWeight: 'bolder'}}>{title}</span>
        <span>${total.toFixed(2)}</span>
      </div>
    </div>
  );
}

export default TotalsItem;
