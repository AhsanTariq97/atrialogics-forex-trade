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
    showCurrentWeekData, showCurrentMonthData, showCurrentYearData,
    setApiData
  } = useContext(ChartStoreContext)

  // const [activeTab, setActiveTab] = useState('PENDING ORDERS')
  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)
  const [show4, setShow4] = useState(false)

  const apiKey = process.env.NEXT_PUBLIC_POLYGON_API_KEY;

  // const [apiData, setApiData] = useState();
  
  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // const [showCurrentWeekData, setShowCurrentWeekData] = useState(false);
  // const [showCurrentMonthData, setShowCurrentMonthData] = useState(false);
  // const [showCurrentYearData, setShowCurrentYearData] = useState(false);

  const today = new Date()
  const currentDate = formatDate(today);

  const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
  const weekAgoDate = formatDate(weekAgo);
  
  const tenDaysAgo = new Date(today.getTime() - 10 * 24 * 60 * 60 * 1000);
  const tenDaysAgoDate = formatDate(tenDaysAgo);
  
  const currentMonth = String(today.getMonth() + 1).padStart(2, '0')
  const currentYear = String(today.getFullYear())

  let url: string
  url = `https://api.polygon.io/v2/aggs/ticker/C:EURUSD/range/1/day/${tenDaysAgoDate}/${currentDate}?adjusted=true&sort=asc&limit=1000&apiKey=${apiKey}`

  if (showCurrentYearData) {
    url = `https://api.polygon.io/v2/aggs/ticker/C:EURUSD/range/1/day/${currentYear}-01-01/${currentDate}?adjusted=true&sort=asc&limit=1000&apiKey=${apiKey}`
  } else if (showCurrentMonthData) {
    url = `https://api.polygon.io/v2/aggs/ticker/C:EURUSD/range/1/day/${currentYear}-${currentMonth}-01/${currentDate}?adjusted=true&sort=asc&limit=1000&apiKey=${apiKey}`
  } else if (showCurrentWeekData) {
    url = `https://api.polygon.io/v2/aggs/ticker/C:EURUSD/range/1/day/${weekAgoDate}/${currentDate}?adjusted=true&sort=asc&limit=1000&apiKey=${apiKey}`
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setApiData(data);
    };

    fetchData();
  }, [url]);

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