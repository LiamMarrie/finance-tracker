function BudgetItem({ category, totalSpent, budgetAmount, timeFrame, onDelete }) {
  const spentPercentage = Math.min((totalSpent / budgetAmount) * 100, 100);

  return (
      <div className='outer-container' style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          border: '1px solid #ddd',
          borderRadius: '4px',
          padding: '10px',
          margin: '10px 0',
          boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.2)',
          width: '100%',
          backgroundColor: '#3B4D66',
          color: 'white',
      }}>
          <div className='inner-container' style={{ width: '100%' }}>
              <div style={{ marginBottom: '10px' }}>
                  <span>Category: {category} <span style={{fontSize:'10px', color: '#ABC1E1'}}>{timeFrame}</span></span>
              </div>
              <div style={{ marginBottom: '10px' }}>
                  <span>Budget Amount: ${budgetAmount.toFixed(2)}</span>
              </div>
              <div style={{ marginBottom: '10px' }}>
                  <span>Total Spent: ${totalSpent.toFixed(2)}</span>
              </div>
              <div style={{ width: '100%', marginBottom: '10px' }}>
                  <div style={{ border: '1px solid #ddd', borderRadius: '4px', marginBottom: '5px' }}>
                      <div 
                          style={{ 
                              height: '10px', 
                              borderRadius: '4px', 
                              backgroundColor: spentPercentage >= 100 ? '#ff2e4c' : '#49deb2',
                              width: `${spentPercentage}%`
                          }}
                      />
                  </div>
                  <span>{spentPercentage.toFixed(2)}% Spent</span>
              </div>
              {/* Delete Button */}
              <button onClick={onDelete} style={{ backgroundColor: '#ff2e4c', color: 'white', border: 'none', borderRadius: '4px', padding: '5px 10px', cursor: 'pointer', alignSelf: 'center' }}>
                  Delete
              </button>
          </div>
      </div>
  );
}

export default BudgetItem;
