import React from 'react';
import DoughnutChart from '@/components/DoughnutChart';

function BudgetCharts({ categoryBudgets }) {
  if (!categoryBudgets || categoryBudgets.length === 0) {
    return null;
  }

  const labels = categoryBudgets.map((item) => item.category);
  const spendingData = categoryBudgets.map((item) => item.totalSpent);

  const colors = ['#FF5733', '#33FF57', '#3366FF', '#FF33E0', '#E0FF33'];

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ flex: 1 }}>
          {/* DoughnutChart for spending */}
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
        {/* DoughnutChart for income */}
      </div>
    </div>
  );
}

export default BudgetCharts;
