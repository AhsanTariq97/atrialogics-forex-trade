import React from 'react'
import { IoClose } from 'react-icons/io5'
import FundTradingAccountCard from '../atoms/FundTradingAccountCard'

const FundTradingAccountPopup = () => {
  return (
    <div className='fixed flex flex-col items-center justify-start w-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-[#F4F8FD]'>
        <div className='relative flex items-center justify-center w-full border-b border-[#B5D1F8]'>
            <h5 className='py-4 text-xs font-medium'>FUND YOUR 256900 TRADING ACCOUNT</h5>
            <button className='bg-[#E0EEFF] rounded p-2 absolute top-2 right-2'><IoClose /></button>
        </div>
        <div className='grid grid-cols-3 gap-3 py-8 mx-auto'>
            <FundTradingAccountCard img='/assets/icons/Icon - BTC.svg' text='BTCUSDT' />
            <FundTradingAccountCard img='/assets/icons/Icon - ETH.svg' text='ETHUSDT' />
            <FundTradingAccountCard img='/assets/icons/Icon - SOL.svg' text='SOLUSDT' />
            <FundTradingAccountCard img='/assets/icons/Icon - ADA.svg' text='BTCUSDT' />
            <FundTradingAccountCard img='/assets/icons/Icon - SOL.svg' text='SOLUSDT' />
            <FundTradingAccountCard img='/assets/icons/Icon - BTC.svg' text='BTCUSDT' />
            <FundTradingAccountCard img='/assets/icons/Icon - BTC.svg' text='BTCUSDT' />
            <FundTradingAccountCard img='/assets/icons/Icon - ETH.svg' text='ETHUSDT' />
            <FundTradingAccountCard img='/assets/icons/Icon - ADA.svg' text='BTCUSDT' />
        </div>
    </div>
  )
}

export default FundTradingAccountPopup