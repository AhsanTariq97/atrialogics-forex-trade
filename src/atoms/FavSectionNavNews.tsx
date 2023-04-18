import React from 'react'
import Image from 'next/image'

const FavSectionNavCalender = () => {
  return (
    <div className='flex flex-col items-center justify-between w-full px-4 space-y-1'>
        <div className='flex items-center justify-between space-x-2 w-full px-2 border border-[#EAEBEC] rounded py-1'>
          <Image src='/assets/icons/close-news.svg' width={19} height={19} alt='' />
          <p className='text-[#535353] text-xs'>EUR/USD Price Analysis: Drops below 1.09 as double top for.....</p>
          <p className='text-xs'>06:30</p>
        </div>
        <div className='flex items-center justify-between space-x-2 w-full px-2 border border-[#EAEBEC] rounded py-1'>
          <Image src='/assets/icons/close-news.svg' width={19} height={19} alt='' />
          <p className='text-[#535353] text-xs'>EUR/USD Price Analysis: Drops below 1.09 as double top for.....</p>
          <p className='text-xs'>23:50</p>
        </div>
    </div>
  )
}

export default FavSectionNavCalender