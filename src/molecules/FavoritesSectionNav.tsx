import Image from 'next/image'
import React from 'react'

const FavoritesSectionNav = () => {
  return (
    <div className='flex items-center justify-between px-4 py-2'>
        <div className='flex items-center justify-between space-x-3'>
            <h5 className='text-[10px] font-medium'>CALENDER</h5>
            <h5 className='text-[10px] font-medium'>COPY TRADING</h5>
            <h5 className='text-[10px] font-medium'>TOP MOVERS</h5>
            <h5 className='text-[10px] font-medium'>NEWS</h5>
            <h5 className='text-[10px] font-medium'>SOCIAL FEED</h5>
        </div>
        <div className='flex items-center justify-between'>
            <Image src='/assets/icons/arrowup-7.svg' width={24} height={24} alt='' />
            <Image src='/assets/icons/arrowdown-7.svg' width={24} height={24} alt='' />
        </div>
    </div>
  )
}

export default FavoritesSectionNav