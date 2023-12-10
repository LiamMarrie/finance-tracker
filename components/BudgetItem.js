function BudgetItem({ category, totalSpent, budgetAmount, timeFrame, onDelete }) {
  const spentPercentage = Math.min((totalSpent / budgetAmount) * 100, 100);

  return (
    <div className='outer-container' style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'left',
      alignItems: 'center',
      border: '1px solid #ddd',
      borderRadius: '4px',
      padding: '10px',
      margin: '10px 0',
      boxShadow: '0 0 5px 0 #ddd',
      width: '45%',
      marginBottom: '20px',
    }}>
      <div className='inner-container' style={{

      }}>
        <div>
          <span>Category: {category}</span>
        </div>
        <div>
          <span>Budget Amount: ${budgetAmount.toFixed(2)}</span>
        </div>
        <div>
          <span>Total Spent: ${totalSpent.toFixed(2)}</span>
        </div>
        <div>
          <span>Time Frame: {timeFrame}</span>
        </div>
        <div style={{ marginTop: '10px' }}>
          <div style={{ border: '1px solid #ddd', borderRadius: '4px' }}>
            <div 
              style={{ 
                height: '10px', 
                borderRadius: '4px', 
                backgroundColor: spentPercentage >= 100 ? 'red' : 'green',
                width: `${spentPercentage}%`
              }}
            />
          </div>
          <span>{spentPercentage.toFixed(2)}% Spent</span>
           {/* Delete Button */}
          <button onClick={onDelete} style={{ marginTop: '10px', backgroundColor: 'red', color: 'white' }}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default BudgetItem;
