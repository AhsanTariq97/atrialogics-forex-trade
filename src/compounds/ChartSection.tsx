import React, { useState } from 'react'
import GraphSectionHead from '../molecules/GraphSectionHead'
import GraphChart from '../molecules/GraphChart'
import GraphControlBtns from '../molecules/ChartControlBtns'
import ChartSidebarFrame43 from '../molecules/ChartSidebarFrame43'
import NewOrderPopup from '../molecules/NewOrderPopup'
import OrderAdded from '../atoms/OrderAdded'

const ChartSection = ({apiData}: {apiData: any}) => {

  const [ chartFullScreen, setChartFullScreen ] = useState(false)
  const [ newOrder, setNewOrder ] = useState(false)
  const [ sellPopup, setSellPopup ] = useState(false)
  const [ buyPopup, setBuyPopup ] = useState(false)

  return (
    <div className={`order-2 flex flex-col items-start justify-start border border-[#DDE1E4] bg-[#FFFFF4] rounded-lg col-span-2 ${chartFullScreen ? '!w-screen max-h-screen !h-screen fixed top-0 left-0 bg-[#FFFFF4] px-8 z-20 overflow-auto' : 'w-full h-full'}`}>
        <GraphSectionHead apiData={apiData} chartFullScreen={chartFullScreen} setChartFullScreen={setChartFullScreen} setNewOrder={setNewOrder} setSellPopup={setSellPopup} setBuyPopup={setBuyPopup} />
        <GraphChart apiData={apiData} />
        {chartFullScreen && <GraphControlBtns onFullScreen={true} />}
        {/* <div className='absolute top-0 right-0'>
            <ChartSidebarFrame43 />
        </div> */}
        {newOrder && <NewOrderPopup setNewOrder={setNewOrder} sellPopup={sellPopup} setSellPopup={setSellPopup} buyPopup={buyPopup} setBuyPopup={setBuyPopup} />}
        {sellPopup && <OrderAdded />}
        {buyPopup && <OrderAdded />}
    </div>
  )
}

export default ChartSection