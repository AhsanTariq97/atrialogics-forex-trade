import React from 'react'
import Image from 'next/image'

const FavSectionNavCalender = () => {
  return (
    <div className='flex flex-col items-center justify-between w-full px-4 space-y-1'>
        <div className='grid grid-cols-4 items-center justify-between w-full px-2 border border-[#EAEBEC] rounded'>
          <div className='flex items-center px-2 space-x-2'>
            <Image src='/assets/flags/Rectangle 58.svg' width={24} height={24} alt='' />
            <div className='text-[#EF4444]'>MON <br /><span className='text-black'>06:30</span></div>
          </div>
          <p className='col-span-2 pl-2 text-[#535353] text-xs'>ECB Member de Guindos Speaks</p>
          <div className='flex items-center space-x-1 justify-self-end'>
            <p className='text-xs'>Impact: </p>
            <Image src='/assets/icons/impact.svg' width={22} height={6} alt='' />
          </div>
        </div>
        <div className='grid grid-cols-4 items-center w-full px-2 border border-[#EAEBEC] rounded'>
          <div className='flex items-center px-2 space-x-2'>
            <Image src='/assets/flags/Rectangle 54.svg' width={24} height={24} alt='' />
            <div className='text-[#EF4444]'>MON <br /><span className='text-black'>23:50</span></div>
          </div>
          <p className='col-span-2 pl-2 text-[#535353] text-xs'>Manufacturing PMI-fin....</p>
          <div className='flex items-center space-x-1 justify-self-end'>
            <p className='text-xs'>Impact: </p>
            <Image src='/assets/icons/impact.svg' width={22} height={6} alt='' />
          </div>
        </div>
    </div>
  )
}

export default FavSectionNavCalender