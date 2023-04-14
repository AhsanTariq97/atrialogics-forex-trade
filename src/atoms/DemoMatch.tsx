import React from 'react'
import Image from 'next/image'

const DemoMatch = () => {
  return (
    <div className='hidden md:flex items-center justify-between space-x-2'>
        <p className='bg-[#56B786] px-[4px] text-[10px] rounded text-white'>DEMO</p>
        <p className='text-[#535353]'>256038 - MATCH-TRAD...</p>
        <p className='bg-[#EF4444] px-[4px] text-[10px] rounded text-white'>UNVERIFIED</p>
        <Image src='/assets/icons/dropdown.svg' width={10} height={5} alt='' />
    </div>
  )
}

export default DemoMatch