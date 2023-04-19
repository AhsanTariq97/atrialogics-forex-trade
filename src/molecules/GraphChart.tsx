import React, { useRef, useEffect, useState } from "react";
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
  import { Data } from '../utils/Data'

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
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
  
  const labels = ['Jul 16', 'Jul 17', 'Jul 18', 'Jul 19', 'Jul 20', 'Jul 21', 'Jul 22', 'Jul 23'];
  
  export const data = {
    labels,
    datasets: [
        {
            label: "1st Price",
            data: Data.map((data) => data.firstPrice),
            backgroundColor: [
              "#EB5757",
            ],
        },
        {
            label: "2nd Price",
            data: Data.map((data) => data.secondPrice),
            backgroundColor: [
              "#2F80ED",
            ],
        },
        {
            label: "3rd Price",
            data: Data.map((data) => data.thirdPrice),
            backgroundColor: [
              "#EB5757",
            ],
        },
        {
            label: "4th Price",
            data: Data.map((data) => data.fourthPrice),
            backgroundColor: [
              "#2F80ED",
            ],
        },
    ],
  };
  

const GraphChart = () => {

    return (
        <Bar options={options} data={data} />
    )
};

export default GraphChart
