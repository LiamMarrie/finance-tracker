import React from 'react';
import DoughnutChart from '@/components/DoughnutChart';

function BudgetCharts({ categoryBudgets, categoryIncomes }) {
    console.log('Spending Data:', categoryBudgets); // Debugging log
    console.log('Income Data:', categoryIncomes); // Debugging log

    if ((!categoryBudgets || categoryBudgets.length === 0))  {
        return (
            <div>
                <h3 style={{color: 'white', maxWidth: '750px', fontSize: '17px', marginLeft: '40px', marginBottom: '10px'}}>
                    Our <strong>charts page</strong> allows you to easily view your income and spending data. The information is presented in easily digestible charts that break down your finances into each category, showing the total amount in each category.
                </h3>
                <p style={{color: 'white', marginLeft: '40px', fontSize: '20px'}}>No data available.</p>;
            </div>
        )
    }

    const spendingLabels = categoryBudgets?.map(item => item.category) || [];
    const spendingData = categoryBudgets?.map(item => item.amount) || [];

    const incomeLabels = categoryIncomes?.map(item => item.category) || [];
    const incomeData = categoryIncomes?.map(item => item.amount) || [];

    const colors = ['#FF5733', '#33FF57', '#3366FF', '#FF33E0', '#E0FF33'];

    return (
        <div>
            <h3 style={{color: 'white', maxWidth: '750px', fontSize: '17px', marginLeft: '40px'}}>
                Our <strong>charts page</strong> allows you to easily view your income and spending data. The information is presented in easily digestible charts that break down your finances into each category, showing the total amount in each category.
            </h3>
            <div style={{ display: 'flex', padding: '20px', color: 'white', fontSize: '20px', alignItems: 'center', fontWeight: 'bold'}}>
                {categoryBudgets && (
                    <DoughnutChart style={{}}
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
        </div>
    );
}

export default BudgetCharts;
