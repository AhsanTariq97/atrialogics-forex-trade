import React from 'react'
import Image from 'next/image'

const ChartLineStylePopup = () => {
  return (
    <div className='absolute top-8 bg-[#FBFAFA] border border-[#E5E4E4] rounded p-1 flex flex-col justify-between items-start space-y-2 w-max'>
        <div className='flex items-center justify-start w-full space-x-3'>
            <div className='flex items-center justify-center border border-[#E1EEFF] bg-[#F4F9FF] w-7 h-7 rounded-sm'>
                <Image src='/assets/line-style/Line 32.svg' alt='' width={2} height={20} />
            </div>
            <p className='text-xs font-medium'>Vertical Line</p>
        </div>
        <div className='flex items-center justify-start w-full space-x-3'>
            <div className='flex items-center justify-center border border-[#E1EEFF] bg-[#F4F9FF] w-7 h-7 rounded-sm'>
                <Image src='/assets/line-style/Group 158.svg' alt='' width={20} height={20} />
            </div>
            <p className='text-xs font-medium'>Channel</p>
        </div>
        <div className='flex items-center justify-start w-full space-x-3'>
            <div className='flex items-center justify-center border border-[#E1EEFF] bg-[#F4F9FF] w-7 h-7 rounded-sm'>
                <Image src='/assets/line-style/Line 33.svg' alt='' width={20} height={20} />
            </div>
            <p className='text-xs font-medium'>Horizontal line</p>
        </div>
        <div className='flex items-center justify-start w-full space-x-3'>
            <div className='flex items-center justify-center border border-[#E1EEFF] bg-[#F4F9FF] w-7 h-7 rounded-sm'>
                <Image src='/assets/line-style/Line 34.svg' alt='' width={20} height={20} />
            </div>
            <p className='text-xs font-medium'>Trend line</p>
        </div>
        <div className='flex items-center justify-start w-full space-x-3'>
            <div className='flex items-center justify-center border border-[#E1EEFF] bg-[#F4F9FF] w-7 h-7 rounded-sm'>
                <Image src='/assets/line-style/Group 78.svg' alt='' width={20} height={20} />
            </div>
            <p className='text-xs font-medium'>Fibonacci</p>
        </div>
    </div>
  )
}

export default ChartLineStylePopup