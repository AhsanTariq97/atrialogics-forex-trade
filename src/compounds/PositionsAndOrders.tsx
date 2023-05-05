import React, {useContext} from 'react'
import PositionsAndOrdersTab from '../molecules/PositionsAndOrdersTab'
import PositionAndOrdersPending from '../molecules/PositionAndOrdersPending'
import PositionAndOrdersOpen from '../molecules/PositionAndOrdersOpen'
import PositionAndOrdersClosed from '../molecules/PositionAndOrdersClosed'
import PositionAndOrdersFinance from '../molecules/PositionAndOrdersFinance'

import { ChartStoreContext } from '../utils/chartStore'

const PositionsAndOrders = () => {

  const { activeTab } = useContext(ChartStoreContext)

  return (
    <div className='bg-[#FFFFF4] rounded-lg mx-1 md:mx-4'>
      <PositionsAndOrdersTab />
      {activeTab === 'OPEN POSITIONS' && <PositionAndOrdersOpen />}
      {activeTab === 'PENDING ORDERS' && <PositionAndOrdersPending />}
      {activeTab === 'CLOSED POSITIONS' && <PositionAndOrdersClosed />}
      {activeTab === 'FINANCE' && <PositionAndOrdersFinance />}
    </div>
  )
}

export default PositionsAndOrders