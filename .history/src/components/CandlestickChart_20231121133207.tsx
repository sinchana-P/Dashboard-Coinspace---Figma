// CandlestickChart.js
import React from 'react';
import { Chart } from 'react-chartjs-2';

const CandlestickChart = ({ data }) => {
  // Register the candlestick chart plugin
  React.useEffect(() => {
    Chart.register({
      id: 'candlestick',
      beforeDraw: (chart) => {
        const ctx = chart.ctx;
        const xAxis = chart.scales['x-axis-0'];
        const yAxis = chart.scales['y-axis-0'];

        chart.data.datasets.forEach((dataset) => {
          const data = dataset.data || [];

          for (let i = 0; i < data.length; i++) {
            const dataPoint = data[i];
            const x = xAxis.getPixelForValue(dataPoint.t);
            const open = yAxis.getPixelForValue(dataPoint.o);
            const close = yAxis.getPixelForValue(dataPoint.c);
            const high = yAxis.getPixelForValue(dataPoint.h);
            const low = yAxis.getPixelForValue(dataPoint.l);

            // Draw the candlestick
            ctx.strokeStyle = dataset.borderColor || 'black';
            ctx.lineWidth = dataset.borderWidth || 1;

            // Draw candle body
            ctx.beginPath();
            ctx.moveTo(x - 5, open);
            ctx.lineTo(x + 5, open);
            ctx.lineTo(x + 5, close);
            ctx.lineTo(x - 5, close);
            ctx.closePath();
            ctx.fillStyle = dataset.backgroundColor || 'rgba(0,0,0,0.3)';
            ctx.fill();

            // Draw high/low lines
            ctx.beginPath();
            ctx.moveTo(x, high);
            ctx.lineTo(x, low);
            ctx.stroke();
          }
        });
      },
    });
  }, []);

  const options = {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
      },
      y: {
        // Add y-axis configurations if needed
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
      <Chart type="candlestick" data={data} options={options} />
    </div>
  );
};

export default CandlestickChart;
