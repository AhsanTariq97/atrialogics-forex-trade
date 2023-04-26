import React from 'react'
import FundTradingAccountCard from '../atoms/FundTradingAccountCard'
import Logo from '../atoms/Logo'

const AboutUsPopup = () => {
  return (
    <div className='fixed flex flex-col items-center justify-start w-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-[#F4F8FD] border border-[#2F80ED] rounded-lg'>
        <div className='flex items-center justify-center w-full border-b border-[#D9D9D9]'>
            <h5 className='py-4 text-sm font-extrabold'>ABOUT US</h5>
        </div>
        <div className='flex flex-col items-start justify-between w-full p-6 pt-4 space-y-2'>
            <div className='mx-auto'>
                <Logo />
            </div>
            <p className='text-lg font-medium'>COMPANY NAME: TRADING-CROWD</p>
            <p className='text-lg font-medium'>EMAIL: <a className='text-[#2F80ED]' href="mailto:support@trade-crowd.com">support@trade-crowd.com</a></p>
        </div>
    </div>
  )
}

export default AboutUsPopup