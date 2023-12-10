import React from 'react';
import DoughnutChart from '@/components/DoughnutChart';

function BudgetCharts({ categoryBudgets, categoryIncomes }) {
    console.log('Spending Data:', categoryBudgets); // Debugging log
    console.log('Income Data:', categoryIncomes); // Debugging log

    if ((!categoryBudgets || categoryBudgets.length === 0))  {
        return <p>No data available</p>;
    }

    const spendingLabels = categoryBudgets?.map(item => item.category) || [];
    const spendingData = categoryBudgets?.map(item => item.amount) || [];

    const incomeLabels = categoryIncomes?.map(item => item.category) || [];
    const incomeData = categoryIncomes?.map(item => item.amount) || [];

    const colors = ['#FF5733', '#33FF57', '#3366FF', '#FF33E0', '#E0FF33'];

    return (
        <div style={{ display: 'flex', padding: '20px' }}>
            {categoryBudgets && (
                <DoughnutChart
                    chartData={{
                        labels: spendingLabels,
                        data: spendingData,
                        backgroundColor: colors,
                        borderColor: colors,
                    }}
                    title="Spending"
                />
            )}
            {categoryIncomes && (
                <DoughnutChart
                    chartData={{
                        labels: incomeLabels,
                        data: incomeData,
                        backgroundColor: colors,
                        borderColor: colors,
                    }}
                    title="Income"
                />
            )}
        </div>
    );
}

export default BudgetCharts;
