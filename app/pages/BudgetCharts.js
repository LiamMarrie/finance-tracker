import React from 'react';
import DoughnutChart from '@/components/DoughnutChart';

function BudgetCharts({ categoryBudgets }) {
  if (!categoryBudgets || categoryBudgets.length === 0) {
    // If categoryBudgets is undefined, null, or empty, you can choose to render a loading state or simply return null.
    // For now, we'll return null.
    return null;
  }

  // Extract category labels and spending data from categoryBudgets
  const labels = categoryBudgets.map((item) => item.category);
  const spendingData = categoryBudgets.map((item) => item.totalSpent);

  // Define colors for the charts
  const colors = ['#FF5733', '#33FF57', '#3366FF', '#FF33E0', '#E0FF33'];

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ flex: 1 }}>
          {/* Create a DoughnutChart for spending */}
          <DoughnutChart
            chartData={{
              labels,
              data: spendingData,
              backgroundColor: colors,
              borderColor: colors,
            }}
            title="Spending"
          />
        </div>
        {/* You can add a similar DoughnutChart for income here */}
      </div>
    </div>
  );
}

export default BudgetCharts;
