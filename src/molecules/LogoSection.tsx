import React from 'react'
import Logo from '../atoms/Logo'
import DemoMatch from '../atoms/DemoMatch'

const LogoSection = ({ activeTab }: {activeTab: string}) => {
  return (
    <div className='relative flex items-center justify-between w-full col-span-1 px-2 md:col-span-2 lg:col-span-1 sm:px-8'>
        <Logo />
        <DemoMatch />
        {activeTab === 'PENDING ORDERS' && <div className='absolute -bottom-24 right-0 bg-[#EEEEEE] px-4 py-4 hidden sm:flex flex-col justify-between items-start space-y-3'>
          <div className='flex items-center space-x-4 text-xs justfy-between'>
            <p className='bg-[#eb4e5c] px-1 text-white rounded'>LIVE</p>
            <p>256899-Match-Trader</p>
          </div>
          <div className='flex items-center space-x-4 text-xs justfy-between'>
            <p className='bg-[#eb4e5c] px-1 text-white rounded'>LIVE</p>
            <p>256893-Match-Trader</p>
          </div>
          <div className='flex items-center space-x-4 text-xs justfy-between'>
            <p className='bg-[#56b786] px-1 text-white rounded'>Demo</p>
            <p>256038-Match-Trader Demo</p>
          </div>
        </div>}
    </div>
  )
}

export default LogoSection