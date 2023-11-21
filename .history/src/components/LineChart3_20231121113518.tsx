// LineChart.js
import { Line } from 'react-chartjs-2';
/ import 'chart.js/auto';
const LineChart3 = ({ data }) => {
  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default LineChart3;



// import React from 'react';
// import { Line } from 'react-chartjs-2';
// import 'chart.js/auto';

// const LineChart3 = () => {
//   const data = {
//     labels: ['January', 'February', 'March', 'April', 'May'],
//     datasets: [
//       {
//         label: 'Monthly Sales',
//         data: [65, 59, 80, 81, 56],
//         fill: false,
//         borderColor: 'rgb(75, 192, 192)',
//         tension: 0.1,
//       },
//     ],
//   };

//   const options = {
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   };

//   return <Line data={data} options={options} />;
// };

// export default LineChart3;
