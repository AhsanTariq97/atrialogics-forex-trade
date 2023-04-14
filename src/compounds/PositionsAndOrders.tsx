import React from 'react'
import PositionsAndOrdersTab from '../molecules/PositionsAndOrdersTab'
import PositionAndOrdersDetail from '../molecules/PositionAndOrdersDetail'

const PositionsAndOrders = () => {
  return (
    <div className='bg-[#FFFFF4] rounded-lg mx-1 md:mx-4'>
      <PositionsAndOrdersTab />
      <PositionAndOrdersDetail />
    </div>
  )
}

export default PositionsAndOrders