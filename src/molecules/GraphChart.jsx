import React, {useRef} from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
// import { Data } from '../utils/Data'

ChartJS.register( CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend );

import { Chart } from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';

Chart.register(zoomPlugin);

  
const GraphChart = ({ apiData, chartRef }) => {

  const formattedDateFn = (dateInMS) => {
    const date = new Date(dateInMS);
  
    const year = date.getFullYear(); 
    const month = date.toLocaleString('default', { month: 'short' });
    const day = String(date.getDate()).padStart(2, '0'); 
  
    const formattedDate = `${day}-${month}-${year}`;
    return formattedDate
  }

  const options = {
    indexAxis: 'x',
    elements: {
      bar: {
        borderWidth: 0,
      },
    },
    responsive: true,
    plugins: {
      zoom: {
        limits: {
          // y: {min: 0.9, max: 1.2}
        },
        pan: {
          enabled: true,
          mode: 'x',
        },
        zoom: {
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true,
          },
          mode: 'x',
        }
      },
      title: {
        display: false,
        text: 'Chart.js Bar Chart',
      },
      legend: {
        display: false
      },
    },
    scales: {
        y: {
            beginAtZero: false,
            position: 'right',
        },
    },
    barPercentage: 1,
    categoryPercentage: 1,
    barThickness: "flex",
    maxBarThickness: 7,
  };

  const labels = []
  apiData?.results.map((entry) => labels.push(formattedDateFn(entry.t)))

  const colors = ["#EB5757", "#2F80ED", /*"#4CAF50", "#FFC107", "#9C27B0"*/];

  const data = {
    labels,
    datasets: [
        {
            label: "",
            data: apiData?.results.map((entry) => [entry.h, entry.l]),
            backgroundColor: apiData?.results.map((_, index) => colors[index % colors.length]),
        },
    ],
  };

  return (
    <Bar ref={chartRef} options={options} data={data} className='max-h-[calc(100vh-64px)]' />
  )
};

export default GraphChart
