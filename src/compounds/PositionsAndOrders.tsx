import React, {useState} from 'react'
import PositionsAndOrdersTab from '../molecules/PositionsAndOrdersTab'
import PositionAndOrdersPending from '../molecules/PositionAndOrdersPending'
import PositionAndOrdersOpen from '../molecules/PositionAndOrdersOpen'
import PositionAndOrdersClosed from '../molecules/PositionAndOrdersClosed'
import PositionAndOrdersFinance from '../molecules/PositionAndOrdersFinance'

const PositionsAndOrders = () => {

  const [activeTab, setActiveTab] = useState('PENDING ORDERS')

  return (
    <div className='bg-[#FFFFF4] rounded-lg mx-1 md:mx-4'>
      <PositionsAndOrdersTab activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'PENDING ORDERS' && <PositionAndOrdersPending />}
      {activeTab === 'OPEN POSITIONS' && <PositionAndOrdersOpen />}
      {activeTab === 'CLOSED POSITIONS' && <PositionAndOrdersClosed />}
      {activeTab === 'FINANCE' && <PositionAndOrdersFinance />}
    </div>
  )
}

export default PositionsAndOrders