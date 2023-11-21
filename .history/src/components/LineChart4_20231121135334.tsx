// LineChart.js
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const LineChart3 = ({ data }) => {

  const options = {
    scales: {
      x: {
        display: false,
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
    layout: {
      padding: {
        left: 10, // Adjust the left padding
        right: 10, // Adjust the right padding
        top: 10, // Adjust the top padding
        bottom: 70, // Adjust the bottom padding
      },
    },
    maintainAspectRatio: false, // Allow the chart to adjust its size
  };

  return (
    <div>
      <Line data={data} options={options}/>
    </div>
  );
};

export default LineChart3;



