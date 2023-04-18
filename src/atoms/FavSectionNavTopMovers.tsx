import React from 'react'
import Image from 'next/image'
import {FaSortUp} from 'react-icons/fa'

const FavSectionNavCalender = () => {
  return (
    <div className='flex flex-col items-center justify-between w-full px-4 space-y-1'>
        <div className='grid grid-cols-2 items-center justify-between w-full px-2 border border-[#EAEBEC] rounded py-1'>
          <div className='flex items-center px-2 space-x-2'>
            <Image src='/assets/flags/Rectangle 58.svg' width={24} height={24} alt='' />
            <p className='col-span-2 pl-2 text-[#535353] text-xs'>XRPUSD</p>
          </div>
          <div className='flex items-center space-x-1 justify-self-end'>
            <p className='text-xs'>Daily change: </p>
            <div className='text-xs text-[#EB5757] flex items-end space-x-1'><FaSortUp /><p>0.23%</p></div>
          </div>
        </div>
        <div className='grid grid-cols-2 items-center justify-between w-full px-2 border border-[#EAEBEC] rounded py-1'>
          <div className='flex items-center px-2 space-x-2'>
            <Image src='/assets/flags/Rectangle 54.svg' width={24} height={24} alt='' />
            <p className='col-span-2 pl-2 text-[#535353] text-xs'>ETCUSD</p>
          </div>
          <div className='flex items-center space-x-1 justify-self-end'>
            <p className='text-xs'>Daily change: </p>
            <div className='text-xs text-[#EB5757] flex items-end space-x-1'><FaSortUp /><p>0.23%</p></div>
          </div>
        </div>
    </div>
  )
}

export default FavSectionNavCalender