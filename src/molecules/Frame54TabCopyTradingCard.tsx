import Image from 'next/image'
import React from 'react'
import {SlOptions} from 'react-icons/sl'

const Frame54TabCopyTradingCard = ({ img }: {img: string}) => {
  return (
    <div className='bg-[#F1F5F9] flex flex-col items-center justify-between px-4 max-w-[397px] border border-[#BFDBFE] rounded-3xl'>
        <button className='bg-[#3E6896] border border-[#3E6896] py-0.5 rounded-b-2xl w-48'>PAMN</button>
        <div className='flex items-center justify-between text-[#535353] w-full'>
            <div className='flex items-center justify-between space-x-2'>
                <Image src='/assets/icons/user-circle-fill.svg' alt='' width={41} height={41} />
                <p className='font-semibold'>178680</p>
            </div>
            <div className='flex flex-col items-end justify-between'>
                <p className='font-semibold text-[#154990]'>Offer</p>
                <p className='font-semibold'>Testowy Slave 3</p>
            </div>
        </div>
        <div className='flex flex-col items-start justify-between w-full pt-8 space-y-1'>
            <p className='text-[#154990] text-xs font-semibold'>Return of Investment</p>
            <h2 className='text-2xl font-semibold text-[#535353]'>1.1%</h2>
        </div>
        <div className='py-4 min-h-[150px]'>
            <Image src={img} alt='' width={266} height={129} />
        </div>
        <div className='flex flex-row items-center justify-center w-full pb-4 space-x-2 xs:space-x-4'>
            <button className={`text-sm font-semibold border border-[#154990] rounded-lg text-[#154990] w-40 py-1`}>STATISTICS</button>
            <button className={`font-semibold rounded-lg bg-[#154990] w-40 py-1`}>INVEST</button>
        </div>
    </div>
  )
}

export default Frame54TabCopyTradingCard