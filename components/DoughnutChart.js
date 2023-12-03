import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as Chartjs, ArcElement, Title, Tooltip, Legend } from 'chart.js';

Chartjs.register(ArcElement, Title, Tooltip, Legend);

function DoughnutChart({ chartData, title }) {
  const data = {
    labels: chartData.labels,
    datasets: [{
      label: title,
      data: chartData.data,
      backgroundColor: chartData.backgroundColor,
      borderColor: chartData.borderColor,
    }],
  };

  const options = {};

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginLeft: '40px',
      marginTop: '40px',
      width: '400px',
      height: '400px',
    }}>
      <h2>{title}</h2>
      <Doughnut categoryBudgets={categorySpendingData} />
    </div>
  );
}
export default DoughnutChart;
