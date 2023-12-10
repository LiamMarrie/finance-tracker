import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as Chartjs, ArcElement, Tooltip, Legend } from 'chart.js';

Chartjs.register(ArcElement, Tooltip, Legend);

function DoughnutChart({ chartData, title }) {
    const data = {
        labels: chartData.labels,
        datasets: [{
            label: title,
            data: chartData.data,
            backgroundColor: chartData.backgroundColor,
            borderColor: chartData.borderColor,
            borderWidth: 1,
        }],
    };

    const options = {
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(context) {
                        let label = context.label || '';
                        if (label) {
                            label += ': $';
                        }
                        if (context.parsed !== null) {
                            label += context.parsed;
                        }
                        return label;
                    }
                }
            }
        }
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '40px',
            width: '400px',
            height: '400px',
        }}>
            <h2>{title}</h2>
            <Doughnut data={data} options={options} />
        </div>
    );
}

export default DoughnutChart;
