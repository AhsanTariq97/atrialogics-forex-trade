import React, {useState, useEffect} from 'react'
import Navbar from '../compounds/Navbar'
import FavoritesSection from '../compounds/FavoritesSection'
import PositionsAndOrders from '../compounds/PositionsAndOrders'
import ChartSection from '../compounds/ChartSection'
import NewTradingAccountPopup from '../molecules/NewTradingAccountPopup'
import WithdrawFromAccountPopup from '../atoms/WithdrawFromAccountPopup'
import FundTradingAccountPopup from '../molecules/FundTradingAccountPopup'
import AboutUsPopup from '../molecules/AboutUsPopup'

const Frame7Page = () => {

  const [activeTab, setActiveTab] = useState('PENDING ORDERS')
  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)
  const [show4, setShow4] = useState(false)

  const apiKey = process.env.NEXT_PUBLIC_POLYGON_API_KEY;

  const [apiData, setApiData] = useState();

  const url = `https://api.polygon.io/v2/aggs/ticker/C:EURUSD/range/1/day/2023-04-01/2023-04-30?adjusted=true&sort=asc&limit=120&apiKey=${apiKey}`

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setApiData(data);
    };

    fetchData();
  }, []);

  console.log(apiData)
  
  const formattedDateTimeFn = (dateInMS: number) => {
    const date = new Date(dateInMS);
  
    const year = date.getFullYear(); // Get the year (e.g. 2021)
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Get the month (0-11) and pad with a leading zero
    const day = String(date.getDate()).padStart(2, '0'); // Get the day of the month (1-31) and pad with a leading zero
    const hours = String(date.getHours()).padStart(2, '0'); // Get the hours (0-23) and pad with a leading zero
    const minutes = String(date.getMinutes()).padStart(2, '0'); // Get the minutes (0-59) and pad with a leading zero
    const seconds = String(date.getSeconds()).padStart(2, '0'); // Get the seconds (0-59) and pad with a leading zero
  
    const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    return formattedDateTime
  }

  return (
    <div className='bg-[#F4F8FD]'>
        <Navbar activeTab={activeTab} />
        <div className='items-start mx-1 my-4 lg:grid gird-cols-1 lg:grid-cols-3 md:mx-4'>
          <ChartSection apiData={apiData} />
          <FavoritesSection />
        </div>
        <PositionsAndOrders activeTab={activeTab} setActiveTab={setActiveTab} apiData={apiData} formattedDateTimeFn={formattedDateTimeFn} />
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