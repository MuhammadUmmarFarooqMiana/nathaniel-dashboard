import * as React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  TooltipItem,
  Legend,
} from 'chart.js';

import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const RevenueChart: React.FC = () => {
  const data = {
    labels: ['Electronics', 'Furniture', 'Clothing'],
    datasets: [
      {
        data: [40, 35, 25],
        backgroundColor: [
          '#1f66e7',
          '#7a52ff', 
          '#34c19d',
        ],
        borderWidth: 0,
        cutout: '70%',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: '#1F2937',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        borderColor: '#374151',
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: true,
        padding: 12,
        callbacks: {
          label: function(context: TooltipItem<'doughnut'>) {
    return `${context.label}: ${context.parsed}%`;
}
        }
      },
    },
  };

  const legendItems = [
    { label: 'Electronics', color: '#1f66e7' },
    { label: 'Furniture', color: '#7a52ff' },
    { label: 'Clothing', color: '#34c19d' },
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Revenue by Category</h3>
      
      <div className="flex items-center justify-center h-72">
        <div className="flex items-center space-x-12">
          <div className="relative w-40 h-40">
            <Doughnut data={data} options={options} />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-900">40%</span>
            </div>
          </div>
          
          <div className="space-y-4">
            {legendItems.map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm font-medium text-gray-700">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueChart;