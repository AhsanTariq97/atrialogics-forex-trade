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
import withAuth from '../utils/authToken'

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
    return (
      <div role="status" className='flex items-center justify-center w-screen h-screen'>
          <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-[#7187A2]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>
          <span className="sr-only">Loading...</span>
      </div>
    )
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

export default withAuth(Frame7Page)