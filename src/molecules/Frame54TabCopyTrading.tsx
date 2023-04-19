import React from 'react'
import Frame54TabCopyTradingCard from './Frame54TabCopyTradingCard'

const Frame54TabCopyTrading = () => {
  return (
        <div className='flex flex-col items-center justify-center w-full px-4 space-y-4'>
            <h3 className='text-lg font-bold'>Available money managers</h3>
            <div className='bg-white h-[1px] w-20'></div>
            <div className='grid items-center grid-cols-1 gap-4 md:grid-cols-3'>
                <div className='md:col-span-2 flex items-center justify-between h-full text-[#535353] bg-[#9EEDD3] border border-[#F5F5F5] rounded-xl px-6 py-2'>
                    <button className={`sm:pb-3 w-48 lg:w-72 text-center border-b-4 border-[#F4F9FF]`}>ALL</button>
                    <button className={`sm:pb-3 w-48 lg:w-72 text-center border-b border-[#F4F9FF]`}>PAMN</button>
                    <button className={`sm:pb-3 w-48 lg:w-72 text-center border-b border-[#F4F9FF]`}>SOCIAL TRADING</button>
                </div>
                <div className='col-span-1 flex flex-col items-start justify-between text-[#535353] bg-[#9EEDD3] border border-[#F5F5F5] rounded-xl px-6 py-2'>
                    <p className=''>Search</p>
                    <p className=''>Offer</p>
                    <div className='bg-[#535353] h-[1px] w-full mt-2'></div>
                </div>
            </div>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
                <Frame54TabCopyTradingCard img='/assets/frame54graph2.svg' />
                <Frame54TabCopyTradingCard img='/assets/frame54graph.svg' />
                <Frame54TabCopyTradingCard img='/assets/frame54graph1.svg' />
                <Frame54TabCopyTradingCard img='/assets/frame54graph.svg' />
                <Frame54TabCopyTradingCard img='/assets/frame54graph2.svg' />
                <Frame54TabCopyTradingCard img='/assets/frame54graph2.svg' />
            </div>
        </div>
    )
}

export default Frame54TabCopyTrading