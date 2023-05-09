import { Chart } from 'chart.js';
import React, { useState, useRef } from 'react'

export const ChartStoreContext = React.createContext<any>(null)

export default ({ children }: {children: React.ReactNode}) => {

  const [activeTab, setActiveTab] = useState('PENDING ORDERS')

  const [apiData, setApiData] = useState();
  
  const [showWeeklyData, setShowWeeklyData] = useState(false);
  const [showMonthlyData, setShowMonthlyData] = useState(false);
  const [showYearlyData, setShowYearlyData] = useState(false);

  const [chartFullScreen, setChartFullScreen] = useState(false)
  const [newOrder, setNewOrder] = useState(false)
  const [newOrderActiveTab, setNewOrderActiveTab] = useState('PENDING ORDER')

  const [ sellPopup, setSellPopup ] = useState(false)
  const [ buyPopup, setBuyPopup ] = useState(false)

  const [lineChart, setLineChart] = useState(false)

  const [showTrend, setShowTrend] = useState(false)

  const chartRef = useRef<Chart | null>(null);

  const today = new Date()
  const [currentYear, setCurrentYear] = useState(today.getFullYear())
  const [currentMonth, setCurrentMonth] = useState(today.getMonth() + 1)
  const [currentDay, setCurrentDay] = useState(today.getDate())

  const store = {
    activeTab: activeTab, 
    setActiveTab: setActiveTab,
    showWeeklyData: showWeeklyData,
    setShowWeeklyData: setShowWeeklyData,
    showMonthlyData: showMonthlyData,
    setShowMonthlyData: setShowMonthlyData,
    showYearlyData: showYearlyData,
    setShowYearlyData: setShowYearlyData,
    apiData: apiData,
    setApiData: setApiData,
    chartFullScreen: chartFullScreen,
    setChartFullScreen: setChartFullScreen,
    newOrder: newOrder,
    setNewOrder: setNewOrder,
    newOrderActiveTab: newOrderActiveTab,
    setNewOrderActiveTab: setNewOrderActiveTab,
    sellPopup: sellPopup,
    setSellPopup: setSellPopup,
    buyPopup: buyPopup,
    setBuyPopup: setBuyPopup,
    lineChart: lineChart,
    setLineChart: setLineChart,
    chartRef: chartRef,
    currentYear: currentYear,
    setCurrentYear: setCurrentYear,
    currentMonth: currentMonth,
    setCurrentMonth: setCurrentMonth,
    currentDay: currentDay,
    setCurrentDay: setCurrentDay,
    showTrend: showTrend,
    setShowTrend: setShowTrend,
  }

  return (
        <ChartStoreContext.Provider value={store}>
            {children}
        </ChartStoreContext.Provider>
  ) 
}