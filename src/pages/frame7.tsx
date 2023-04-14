import React from 'react'
import Navbar from '../compounds/Navbar'
import FavoritesSection from '../compounds/FavoritesSection'
import PositionsAndOrders from '../compounds/PositionsAndOrders'
import ChartSection from '../compounds/ChartSection'

const Frame7Page = () => {
  return (
    <div className='bg-[#F4F8FD]'>
        <Navbar />
        <div className='lg:grid items-start gird-cols-1 lg:grid-cols-3 mx-1 md:mx-4 my-4'>
          <ChartSection />
          <FavoritesSection />
        </div>
        <PositionsAndOrders />
        
    </div>
  )
}

export default Frame7Page