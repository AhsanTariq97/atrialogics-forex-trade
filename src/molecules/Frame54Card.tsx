import React from 'react'
import {SlOptions} from 'react-icons/sl'

const Frame54Card = ({ demo }: {demo?: boolean}) => {
  return (
    <div className='relative flex flex-col items-center justify-between pt-5 space-y-6 px-2 sm:px-7 max-w-[410px] border-2 rounded-xl'>
        <div className='flex flex-col items-start justify-between space-y-2'>
            <h2 className='text-2xl font-bold'>10000.00 USD</h2>
            <p className='text-xs'>Account:  256033, Match-Trader Demo</p>
        </div>
        <div className='flex flex-row items-center justify-center w-full space-x-3'>
            {!demo && <button className={`text-sm border-2 border-[#56B786] rounded bg-[#56B786] py-2 ${demo ? 'w-[170px]' : 'w-[108px]'}`}>DEPOSIT</button>}
            {demo && <button className={`text-sm border-2 border-[#56B786] rounded bg-[#56B786] py-2 ${demo ? 'w-[170px]' : 'w-[108px]'}`}>CONVERT TO LIVE</button>}
            {!demo && <button className={`text-sm border-2 border-[#EB5757] rounded bg-[#EB7070] py-2 ${demo ? 'w-[170px]' : 'w-[108px]'}`}>WITHDRAW</button>}
            <button className={`text-sm border-2 border-[#2F80ED] rounded bg-[#2F80ED] py-2 ${demo ? 'w-[170px]' : 'w-[108px]'}`}>GO & TRADE</button>
        </div>
        <div className='flex flex-col items-center justify-between w-full space-y-1'>
            <div className='border-b-2 border-[#D9D9D9] w-full flex justify-between items-center'>
                <p className='pb-2 text-xs'>Initial deposit</p>
                <p className='pb-2 text-xs'>10000</p>
            </div>
            <div className='border-b-2 border-[#D9D9D9] w-full flex justify-between items-center'>
                <p className='pb-2 text-xs'>Leverage</p>
                <p className='pb-2 text-xs'>1: 100</p>
            </div>
            <p className='w-full text-xs justify-self-start'>Description</p>
        </div>
        <button className='px-12 py-1 text-xs border-2 border-b-0 rounded-t-lg'>SHOW ACCOUNT DETAILS</button>
        <SlOptions className='absolute top-0 right-6' />
    </div>
  )
}

export default Frame54Card