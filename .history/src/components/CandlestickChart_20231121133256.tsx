// CandlestickChart.js
import React from 'react';
import { Candlestick } from 'react-chartjs-2';
import 'chart.js/auto';

const CandlestickChart = ({ data }) => {
  const options = {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
      },
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div>
      <Candlestick data={data} options={options} />
    </div>
  );
};

export default CandlestickChart;
