import Image from 'next/image';
import React from 'react'
import { FaStar } from "react-icons/fa";
import GraphControlBtns from './ChartControlBtns';


const GraphSectionHead = ({chartFullScreen, setChartFullScreen, setNewOrder, setSellPopup, setBuyPopup}: {
    chartFullScreen: boolean,
    setChartFullScreen: React.Dispatch<React.SetStateAction<boolean>>,
    setNewOrder: React.Dispatch<React.SetStateAction<boolean>>,
    setSellPopup: React.Dispatch<React.SetStateAction<boolean>>,
    setBuyPopup: React.Dispatch<React.SetStateAction<boolean>>,
}) => {
    return (
    <div className='grid items-center w-full grid-cols-3 pl-4 pr-4'>
        <div className='flex flex-col items-start justify-between col-span-2 md:col-span-1'>
            <div className='flex items-center justify-between space-x-4'>
                <div className='flex items-center justify-start space-x-2 text-[#2F80ED] py-1'>
                    <h3 className='text-xl font-semibold text-black'>EURUSD</h3>
                    <FaStar />
                </div>
                {chartFullScreen && 
                <>
                    <button className='text-[#2F80ED] text-xs font-semibold border border-[#2F80ED] rounded px-2 py-1' onClick={() => setNewOrder(true)}>+New Order</button>
                    <div className='absolute hidden grid-cols-3 space-x-2 lg:grid top-16 left-16'>
                        <button className='bg-[#EF4444] border border-[#EF4444] rounded text-white text-[10px] font-medium text-left px-3 py-1.5' onClick={() => setSellPopup(prev => !prev)}>SELL <br /><span className='text-xl'>1.08386</span></button>
                        <div className='grid grid-cols-2 grid-rows-3 border bg-[#FFFFF4] border-[#D9D9D9] rounded'>
                            <p className='text-[10px] font-medium col-span-2 row-span-2 border-b border-[#D9D9D9] text-center'>VOLUME <br /><span className='text-sm'>0.01</span></p>
                            <p className='text-center'>+</p>
                            <p className='border-l border-[#D9D9D9] text-center'>-</p>
                        </div>
                        <button className='bg-[#10B981] border border-[#10B981] rounded text-white text-[10px] font-medium text-right px-3 py-1.5' onClick={() => setBuyPopup(prev => !prev)}>BUY <br /><span className='text-xl'>1.08387</span></button>
                    </div>
                </>
                }
                
            </div>
            <div className='flex items-center justify-start space-x-2'>
                <p className='text-[#535353] text-[10px] font-medium'>L: <span className='text-[#EF4444]'>1.08235</span></p>
                <p className='text-[#535353] text-[10px] font-medium'>H: <span className='text-[#10B981]'>1.09261</span></p>
            </div>
        </div>
        <div className='flex items-center justify-end col-span-1 space-x-4 md:col-span-2'>
            <GraphControlBtns />
            <div className='flex items-center justify-end col-span-2 col-start-3 space-x-2 sm:col-start-4 sm:col-span-1'>
                <div className='flex flex-col items-end justify-between'>
                    <p className='text-right text-[10px] font-medium'>PLATFORM TIME</p>
                    <p className='text-xs font-medium text-right'>29 Mar 2023 18-26:45 UTC +0</p>
                </div>
                <button className='border border-[#D9D9D9] p-1 rounded min-w-max' onClick={() => setChartFullScreen(prev => !prev)}>
                    <Image src={`${chartFullScreen ? '/assets/icons/expand-opp.svg' : '/assets/icons/expand.svg'}`} alt='' width={24} height={24} />
                </button>
            </div>
        </div>
    </div>
  )
}

export default GraphSectionHead