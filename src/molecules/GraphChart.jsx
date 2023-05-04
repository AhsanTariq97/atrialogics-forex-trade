import React, {useState} from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';

ChartJS.register( CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend );

import { Chart } from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';
import annotationPlugin from 'chartjs-plugin-annotation';

Chart.register(zoomPlugin, annotationPlugin);
Chart.register(PointElement, LineElement);
  
const GraphChart = ({ apiData, chartRef, lineChart }) => {

  const [showTrend, setShowTrend] = useState(false)

  const formattedDateFn = (dateInMS) => {
    const date = new Date(dateInMS);
  
    const year = date.getFullYear(); 
    const month = date.toLocaleString('default', { month: 'short' });
    const day = String(date.getDate()).padStart(2, '0'); 
  
    const formattedDate = `${day}-${month}-${year}`;
    return formattedDate
  }

  const labels = []
  apiData?.results.map((entry) => labels.push(formattedDateFn(entry.t)))

  const highValues = {
    type: 'line',
    backgroundColor: '#EB5757',
    borderColor: '#EB5757',
    borderWidth: 2,
    yScaleID: 'y',
    arrowHeads: {
      end: {
        display: true,
        fill: true,
      }
    },
    xMin: labels.length - 2,
    xMax: labels.length - 1,
    yMin: apiData?.results[apiData?.results.length - 2].h,
    yMax: apiData?.results[apiData?.results.length - 1].h,
  };

  const lowValues = {
    type: 'line',
    backgroundColor: '#2F80ED',
    borderColor: '#2F80ED',
    borderWidth: 2,
    yScaleID: 'y',
    arrowHeads: {
      end: {
        display: true,
        fill: true,
      }
    },
    xMin: labels.length - 2,
    xMax: labels.length - 1,
    yMin: apiData?.results[apiData?.results.length - 2].l,
    yMax: apiData?.results[apiData?.results.length - 1].l,
  };

  const askUserStart = 2
  const askUserEnd = 9
  const useHighValue  = false;

  const trendLine = {
    type: 'line',
    backgroundColor: '#10B981',
    borderColor: '#10B981',
    borderWidth: 1,
    yScaleID: 'y',
    xMin: askUserStart,
    xMax: askUserEnd,
    yMin: useHighValue ? apiData?.results[askUserStart].h : apiData?.results[askUserStart].l,
    yMax: useHighValue ? apiData?.results[askUserEnd].h : apiData?.results[askUserEnd].l,
  };

  const options = {
    indexAxis: 'x',
    elements: {
      bar: {
        borderWidth: 0,
      },
      line: {
        borderWidth: 2,
        fill: false,
      },
    },
    responsive: true,
    plugins: {
      zoom: {
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
      annotation: {
        annotations: lineChart ? (showTrend ? { highValues, lowValues, trendLine } : { highValues, lowValues } ) : {}, 
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

  const colors = ["#EB5757", "#2F80ED", /*"#4CAF50", "#FFC107", "#9C27B0"*/];

  const barData = {
    labels,
    datasets: [
        {
            label: "",
            data: apiData?.results.map((entry) => [entry.h, entry.l]),
            backgroundColor: apiData?.results.map((_, index) => colors[index % colors.length]),
        },
    ],
  };

  const lineData = {
    labels,
    datasets: [
      {
        label: "High",
        data: apiData?.results.map((entry) => entry.h),
        borderColor: "#EB5757",
      },
      {
        label: "Low",
        data: apiData?.results.map((entry) => entry.l),
        borderColor: "#2F80ED",
      },
    ],
  };

  return (
    <>
      {lineChart ? (<Line ref={chartRef} options={options} data={lineData} className='max-h-[calc(100vh-64px)]' />)
      : (<Bar ref={chartRef} options={options} data={barData} className='max-h-[calc(100vh-64px)]' />)}
    </>
  )
};

export default GraphChart
