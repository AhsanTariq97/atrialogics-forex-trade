import React from 'react'
import Image from 'next/image'

const FavSectionNavCalender = () => {
  return (
    <div className='flex flex-col items-center justify-between w-full px-4 space-y-1'>
        <div className='grid grid-cols-3 items-center w-full px-2 border border-[#EAEBEC] rounded py-1'>
          <div className='flex items-center px-2 space-x-2'>
            <Image src='/assets/icons/trade1.svg' width={48} height={24} alt='' />
            <p className='text-xs font-medium'>80085</p>
          </div>
          <p className='text-[#535353] text-xs justify-self-center'>PAMM</p>
          <div className='flex items-center space-x-1 justify-self-end'>
            <p className='text-xs'>ROI: <span className='text-[#56B786] font-semibold'>1,267.4 %</span> </p>
          </div>
        </div>
        <div className='grid grid-cols-3 items-center w-full px-2 border border-[#EAEBEC] rounded py-1'>
          <div className='flex items-center px-2 space-x-2'>
            <Image src='/assets/icons/trade2.svg' width={48} height={24} alt='' />
            <p className='text-xs font-medium'>Trade Blade</p>
          </div>
          <p className='text-[#535353] text-xs justify-self-center'>ST</p>
          <div className='flex items-center space-x-1 justify-self-end'>
            <p className='text-xs'>ROI: <span className='text-[#56B786] font-semibold'>221.5 %</span> </p>
          </div>
        </div>
    </div>
  )
}

export default FavSectionNavCalender