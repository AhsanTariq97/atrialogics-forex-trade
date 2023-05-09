import React, { useContext } from 'react'
import dynamic from 'next/dynamic'
import GraphSectionHead from '../molecules/GraphSectionHead'
import ChartControlBtns from '../molecules/ChartControlBtns'
// import ChartSidebarFrame43 from '../molecules/ChartSidebarFrame43'
import NewOrderPopup from '../molecules/NewOrderPopup'
import OrderAdded from '../atoms/OrderAdded'

import { ChartStoreContext } from '../utils/chartStore'

const GraphChart = dynamic(() => import('../molecules/GraphChart'), { ssr: false });

const ChartSection = () => {

  const { chartFullScreen, newOrder, sellPopup, buyPopup } = useContext(ChartStoreContext)

  return (
    <div className={`order-2 flex flex-col items-start justify-start border border-[#DDE1E4] bg-[#FFFFF4] rounded-lg col-span-2 ${chartFullScreen ? '!w-screen max-h-screen !h-screen fixed top-0 left-0 bg-[#FFFFF4] px-8 z-20 overflow-auto' : 'w-full h-full'}`}>
        <GraphSectionHead />
        <GraphChart />
        {chartFullScreen && <ChartControlBtns onFullScreen={true} />}
        {/* <div className='absolute top-0 right-0'>
            <ChartSidebarFrame43 />
        </div> */}
        {newOrder && <NewOrderPopup />}
        {sellPopup && <OrderAdded />}
        {buyPopup && <OrderAdded />}
    </div>
  )
}

export default ChartSection