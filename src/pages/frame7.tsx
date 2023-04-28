import React, {useState} from 'react'
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

  return (
    <div className='bg-[#F4F8FD]'>
        <Navbar activeTab={activeTab} />
        <div className='items-start mx-1 my-4 lg:grid gird-cols-1 lg:grid-cols-3 md:mx-4'>
          <ChartSection />
          <FavoritesSection />
        </div>
        <PositionsAndOrders activeTab={activeTab} setActiveTab={setActiveTab} />
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