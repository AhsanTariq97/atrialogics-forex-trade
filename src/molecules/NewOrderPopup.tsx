import React, { useContext, useState } from 'react'
import { IoClose, IoAddOutline } from 'react-icons/io5'

import { ChartStoreContext } from '../utils/chartStore'

const NewOrderPopup = ({ sellPopup, setSellPopup, buyPopup, setBuyPopup }: {
    sellPopup: boolean,
    setSellPopup: React.Dispatch<React.SetStateAction<boolean>>,
    buyPopup: boolean,
    setBuyPopup: React.Dispatch<React.SetStateAction<boolean>>,
}) => {

    const { setNewOrder, newOrderActiveTab, setNewOrderActiveTab } = useContext(ChartStoreContext)


    // const [newOrderActiveTab, setNewOrderActiveTab] = useState('PENDING ORDER')

    const onClickTab = (e: any) => {
        setNewOrderActiveTab(e.target.textContent)
    }
    
  return (
    <div className='fixed top-0 flex flex-col items-center justify-between w-11/12 px-1 pt-4 space-y-4 bg-white shadow-md left-4 xs:w-96'>
        <button className='bg-[#E0EEFF] rounded p-2 absolute top-2 right-2' onClick={() => setNewOrder(false)}><IoClose /></button>
        <h2 className='text-2xl font-semibold'>EURUSD</h2>
        <div className='flex items-center justify-center w-full border border-[#E9E7E7] rounded bg-[#E6E4E42B]'>
            <button className={`w-1/2 py-1.5 font-medium ${newOrderActiveTab === 'MARKET' && 'border-b-2 border-[#5290F7]'}`} onClick={onClickTab}>MARKET</button>
            <button className={`w-1/2 py-1.5 font-medium ${newOrderActiveTab === 'PENDING ORDER' && 'border-b-2 border-[#5290F7]'}`} onClick={onClickTab}>PENDING ORDER</button>
        </div>
        <div className='flex items-center justify-center w-full px-2 space-x-2'>
            <div className='w-1/2 grid items-center grid-cols-5 text-center border border-[#E9E7E7] bg-[#E6E4E42B] rounded'>
                <p>-</p>
                <p className='col-span-3 text-sm font-medium border-l border-r border-[#E1EEFF] leading-none'>VOLUME<br /><span className='text-base font-medium text-[#535353]'>0.01</span></p>
                <p>+</p>
            </div>
            {newOrderActiveTab === 'PENDING ORDER' && <div className='w-1/2 grid items-center grid-cols-5 text-center border border-[#E9E7E7] bg-[#E6E4E42B] rounded'>
                <p>-</p>
                <p className='col-span-3 text-sm font-medium border-l border-r border-[#E1EEFF] leading-none'>PRICE<br /><span className='text-base font-medium text-[#535353]'>1.09030</span></p>
                <p>+</p>
            </div>}
        </div>
        <div className='grid items-center w-full grid-cols-2 text-center'>
            <p className='text-[10px] font-medium'>REQUESTED MARGIN<br /><span className='text-base font-medium text-[#535353]'>10.90 <span className='text-[10px] align-super'>USD</span></span></p>
            <p className='text-[10px] font-medium'>FREE FUNDS<br /><span className='text-base font-medium text-[#535353]'>9989.08 <span className='text-[10px] align-super'>USD</span></span></p>
        </div>
        <p className='border border-[#E1EEFF] rounded-2xl w-5/6 px-6 py-1 font-medium text-base'>0.11 %</p>
        <div className='grid items-center w-full grid-cols-2 text-center'>
            <p className='text-[10px] font-medium'>COMMISSION<br /><span className='text-base font-medium text-[#535353]'>0.00 <span className='text-[10px] align-super'>USD</span></span></p>
            <p className='text-[10px] font-medium'>SPREAD<br /><span className='text-base font-medium text-[#535353]'>0.01 <span className='text-[10px] align-super'>USD</span></span></p>
        </div>
        <div className='flex items-center justify-between w-full space-x-2'>
            <div className='flex items-center justify-between space-x-1'>
                <button className='border border-[#E1EEFF] rounded-sm p-1'><IoAddOutline /></button>
                <p className='text-xs font-medium w-max '>Stop loss</p>
            </div>
            <div className='bg-[#E1EEFF] h-0.5 w-full'></div>
            <div className='flex items-center justify-between space-x-1'>
                <p className='text-xs font-medium w-max'>Take Profit</p>
                <button className='border border-[#E1EEFF] rounded-sm p-1'><IoAddOutline /></button>
            </div>
        </div>
        <div className='grid items-center w-full grid-cols-2 gap-1'>
            <button className='text-sm text-white font-medium bg-[#EB5757] border border-[#EF4444] rounded py-2' onClick={() => setSellPopup(prev => !prev)}>SELL LIMIT <br /><span className='text-xl font-medium text-center'>1.08386</span></button>
            <button className='text-sm text-white font-medium bg-[#56B786] border border-[#56B786] rounded py-2' onClick={() => setBuyPopup(prev => !prev)}>BUY LIMIT <br /><span className='text-xl font-medium text-center'>1.08386</span></button>
        </div>
    </div>
  )
}

export default NewOrderPopup