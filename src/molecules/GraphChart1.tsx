import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  // import { Data } from '../utils/Data'

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
const GraphChart = ({ apiData }: {apiData: any}) => {

  const formattedDateFn = (dateInMS: number) => {
    const date = new Date(dateInMS);
  
    const year = date.getFullYear(); // Get the year (e.g. 2021)
    const month = date.toLocaleString('default', { month: 'short' });
    const day = String(date.getDate()).padStart(2, '0'); // Get the day of the month (1-31) and pad with a leading zero
  
    const formattedDateTime = `${day}-${month}-${year}`;
    return formattedDateTime
  }

  const options = {
    indexAxis: 'x' as const,
    elements: {
      bar: {
        borderWidth: 0,
      },
    },
    responsive: true,
    plugins: {
      title: {
        display: false,
        text: 'Chart.js Bar Chart',
      },
      legend: {
        display: false
      },
      zoom: {
        zoom: {
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true
          },
          // mode: 'xy',
        }
      }
    },
    scales: {
        y: {
            beginAtZero: false,
            // position: 'right',
        },
    },
    barPercentage: 1,
    categoryPercentage: 1,
    barThickness: "flex",
    maxBarThickness: 7,
  };

  // const labels = ['Jul 16', 'Jul 17', 'Jul 18', 'Jul 19', 'Jul 20', 'Jul 21', 'Jul 22', 'Jul 23'];

  const labels: string[] = []
  apiData?.results.map((entry: { t: number; }) => labels.push(formattedDateFn(entry.t)))

  const colors = ["#EB5757", "#2F80ED", /*"#4CAF50", "#FFC107", "#9C27B0"*/];

  const data = {
    labels,
    datasets: [
        {
            label: "",
            data: apiData?.results.map((entry: { h: number; l: number; }) => [entry.h, entry.l]),
            backgroundColor: apiData?.results.map((_: any, index: number) => colors[index % colors.length]),
        },
    ],
  };

  return (
      <Bar options={options} data={data} className='max-h-[calc(100vh-64px)]' />
  )
};

export default GraphChart