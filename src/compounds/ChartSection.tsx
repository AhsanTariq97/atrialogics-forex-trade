import React, { useState, useRef, useContext } from 'react'
import dynamic from 'next/dynamic'
import GraphSectionHead from '../molecules/GraphSectionHead'
// import GraphChart from '../molecules/GraphChart'
import ChartControlBtns from '../molecules/ChartControlBtns'
// import ChartSidebarFrame43 from '../molecules/ChartSidebarFrame43'
import NewOrderPopup from '../molecules/NewOrderPopup'
import OrderAdded from '../atoms/OrderAdded'
import { Chart } from 'chart.js'

import { ChartStoreContext } from '../utils/chartStore'

const GraphChart = dynamic(() => import('../molecules/GraphChart'), { ssr: false });

const ChartSection = () => {

  const { chartFullScreen, newOrder } = useContext(ChartStoreContext)

  // const [ chartFullScreen, setChartFullScreen ] = useState(false)
  // const [ newOrder, setNewOrder ] = useState(false)
  const [ sellPopup, setSellPopup ] = useState(false)
  const [ buyPopup, setBuyPopup ] = useState(false)

  const [lineChart, setLineChart] = useState(false)

  const chartRef = useRef<Chart | null>(null);
  
  const handleResetZoom = () => {
    const chartInstance = chartRef.current;
    if (chartInstance) {
      chartInstance.resetZoom(); 
    }
  };
  
  const handleZoomIn = () => {
    const chartInstance = chartRef.current;
    if (chartInstance) {
      chartInstance.zoom(1.1); 
    }
  };
  
  const handleZoomOut = () => {
    const chartInstance = chartRef.current;
    if (chartInstance) {
      chartInstance.zoom(0.9);
    }  
  };

  return (
    <div className={`order-2 flex flex-col items-start justify-start border border-[#DDE1E4] bg-[#FFFFF4] rounded-lg col-span-2 ${chartFullScreen ? '!w-screen max-h-screen !h-screen fixed top-0 left-0 bg-[#FFFFF4] px-8 z-20 overflow-auto' : 'w-full h-full'}`}>
        <GraphSectionHead lineChart={lineChart} setLineChart={setLineChart} setSellPopup={setSellPopup} setBuyPopup={setBuyPopup} handleResetZoom={handleResetZoom} handleZoomIn={handleZoomIn} handleZoomOut={handleZoomOut} />
        <GraphChart chartRef={chartRef} lineChart={lineChart} />
        {chartFullScreen && <ChartControlBtns onFullScreen={true} lineChart={lineChart} setLineChart={setLineChart} handleResetZoom={handleResetZoom} handleZoomIn={handleZoomIn} handleZoomOut={handleZoomOut} />}
        {/* <div className='absolute top-0 right-0'>
            <ChartSidebarFrame43 />
        </div> */}
        {newOrder && <NewOrderPopup sellPopup={sellPopup} setSellPopup={setSellPopup} buyPopup={buyPopup} setBuyPopup={setBuyPopup} />}
        {sellPopup && <OrderAdded />}
        {buyPopup && <OrderAdded />}
    </div>
  )
}

export default ChartSection