import React, { useState } from 'react'

export const ChartStoreContext = React.createContext<any>(null)

export default ({ children }: {children: React.ReactNode}) => {

  const [activeTab, setActiveTab] = useState('PENDING ORDERS')

  const [apiData, setApiData] = useState();
  
  const [showCurrentWeekData, setShowCurrentWeekData] = useState(false);
  const [showCurrentMonthData, setShowCurrentMonthData] = useState(false);
  const [showCurrentYearData, setShowCurrentYearData] = useState(false);

  const [ chartFullScreen, setChartFullScreen ] = useState(false)
  const [ newOrder, setNewOrder ] = useState(false)
  const [newOrderActiveTab, setNewOrderActiveTab] = useState('PENDING ORDER')


  const store = {
    activeTab: activeTab, 
    setActiveTab: setActiveTab,
    showCurrentWeekData: showCurrentWeekData,
    setShowCurrentWeekData: setShowCurrentWeekData,
    showCurrentMonthData: showCurrentMonthData,
    setShowCurrentMonthData: setShowCurrentMonthData,
    showCurrentYearData: showCurrentYearData,
    setShowCurrentYearData: setShowCurrentYearData,
    apiData: apiData,
    setApiData: setApiData,
    chartFullScreen: chartFullScreen,
    setChartFullScreen: setChartFullScreen,
    newOrder: newOrder,
    setNewOrder: setNewOrder,
    newOrderActiveTab: newOrderActiveTab,
    setNewOrderActiveTab: setNewOrderActiveTab,
  }

  return (
        <ChartStoreContext.Provider value={store}>
            {children}
        </ChartStoreContext.Provider>
  ) 
}