import React, {useState, useEffect, useContext} from 'react'
import Navbar from '../compounds/Navbar'
import FavoritesSection from '../compounds/FavoritesSection'
import PositionsAndOrders from '../compounds/PositionsAndOrders'
import ChartSection from '../compounds/ChartSection'
import NewTradingAccountPopup from '../molecules/NewTradingAccountPopup'
import WithdrawFromAccountPopup from '../atoms/WithdrawFromAccountPopup'
import FundTradingAccountPopup from '../molecules/FundTradingAccountPopup'
import AboutUsPopup from '../molecules/AboutUsPopup'

import { ChartStoreContext } from '../utils/chartStore'

const Frame7Page = () => {

  const { 
    showWeeklyData, showMonthlyData, showYearlyData, currentYear, currentMonth, currentDay, 
    apiData, setApiData
  } = useContext(ChartStoreContext)

  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)
  const [show4, setShow4] = useState(false)

  const apiKey = process.env.NEXT_PUBLIC_POLYGON_API_KEY;

  const formatDate = (date: Date) => {
    const year = String(date.getFullYear());
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const today = new Date()
  const currentDate = formatDate(today);

  const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
  const weekAgoDate = formatDate(weekAgo);
  
  const tenDaysAgo = new Date(today.getTime() - 10 * 24 * 60 * 60 * 1000);
  const tenDaysAgoDate = formatDate(tenDaysAgo);

  const currentYearStr = String(currentYear)
  const currentMonthStr = String(currentMonth).padStart(2, '0')
  const currentDayStr = String(currentDay).padStart(2, '0')
  
  let url: string
  url = `https://api.polygon.io/v2/aggs/ticker/C:EURUSD/range/1/day/${tenDaysAgoDate}/${currentDate}?adjusted=true&sort=asc&limit=1000&apiKey=${apiKey}`

  if (showYearlyData) {
    url = `https://api.polygon.io/v2/aggs/ticker/C:EURUSD/range/1/day/${currentYearStr}-01-01/${currentYearStr}-12-31?adjusted=true&sort=asc&limit=1000&apiKey=${apiKey}`
  } else if (showMonthlyData) {
    url = `https://api.polygon.io/v2/aggs/ticker/C:EURUSD/range/1/day/${currentYearStr}-${currentMonthStr}-01/${currentYearStr}-${currentMonthStr}-${currentDayStr}?adjusted=true&sort=asc&limit=1000&apiKey=${apiKey}`
  } else if (showWeeklyData) {
    url = `https://api.polygon.io/v2/aggs/ticker/C:EURUSD/range/1/day/${weekAgoDate}/${currentDate}?adjusted=true&sort=asc&limit=1000&apiKey=${apiKey}`
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setApiData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [url]);

  if (apiData === undefined) {
    return <div className='flex flex-col items-center justify-center w-screen h-screen'><p>Loading...</p></div>
  }

  if (apiData.results === undefined) {
    return (
      <div className='flex flex-col items-center justify-center w-screen h-screen'>
        <p className=''>Error: API call limit reached</p> 
        {/* <p className=''>Reload in a minute</p> */}
      </div>
    ) 
  }

  // console.log(apiData)

  return (
    
      <div className='bg-[#F4F8FD]'>
          <Navbar />
          <div className='items-start mx-1 my-4 lg:grid gird-cols-1 lg:grid-cols-3 md:mx-4'>
            <ChartSection />
            <FavoritesSection />
          </div>
          <PositionsAndOrders />
          <div className='fixed flex bottom-4 left-4'>
            <button className='w-6 h-6 text-white rounded-full bg-cyan-600' onClick={() => setShow1(prev => !prev)}>1</button>
            {show1 && <NewTradingAccountPopup />}
            <button className='w-6 h-6 text-white rounded-full bg-cyan-600' onClick={() => setShow2(prev => !prev)}>2</button>
            {show2 && <WithdrawFromAccountPopup />}
            <button className='w-6 h-6 text-white rounded-full bg-cyan-600' onClick={() => setShow3(prev => !prev)}>3</button>
            {show3 && <FundTradingAccountPopup />}
            <button className='w-6 h-6 text-white rounded-full bg-cyan-600' onClick={() => setShow4(prev => !prev)}>4</button>
            {show4 && <AboutUsPopup />}
          </div>
      </div>
  )
}

export default Frame7Page