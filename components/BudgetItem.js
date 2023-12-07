function BudgetItem({ category, totalSpent, budgetAmount, timeFrame }) {
  const spentPercentage = Math.min((totalSpent / budgetAmount) * 100, 100);

  return (
    <div>
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
      </div>
    </div>
  );
}

export default BudgetItem;
