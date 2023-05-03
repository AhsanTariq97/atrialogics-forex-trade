import React, {useState} from 'react'
import PositionsAndOrdersTab from '../molecules/PositionsAndOrdersTab'
import PositionAndOrdersPending from '../molecules/PositionAndOrdersPending'
import PositionAndOrdersOpen from '../molecules/PositionAndOrdersOpen'
import PositionAndOrdersClosed from '../molecules/PositionAndOrdersClosed'
import PositionAndOrdersFinance from '../molecules/PositionAndOrdersFinance'

interface MyProps {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  apiData: any;
  formattedDateTimeFn: (dateInMS: number) => string
}

const PositionsAndOrders = ({ activeTab, setActiveTab, apiData, formattedDateTimeFn}: MyProps) => {

  return (
    <div className='bg-[#FFFFF4] rounded-lg mx-1 md:mx-4'>
      <PositionsAndOrdersTab activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'OPEN POSITIONS' && <PositionAndOrdersOpen apiData={apiData} formattedDateTimeFn={formattedDateTimeFn} />}
      {activeTab === 'PENDING ORDERS' && <PositionAndOrdersPending />}
      {activeTab === 'CLOSED POSITIONS' && <PositionAndOrdersClosed />}
      {activeTab === 'FINANCE' && <PositionAndOrdersFinance />}
    </div>
  )
}

export default PositionsAndOrders