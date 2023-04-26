import React from 'react'
import { IoClose } from 'react-icons/io5'

const FundTradingAccountPopup = () => {
  return (
    <div className='fixed flex flex-col items-center justify-start w-max -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-[#F4F9FF]'>
        <div className='relative flex items-center justify-center h-[110px] w-[327px]'>
            <h5 className='py-4 text-sm font-medium'>WITHDRAW FROM ACCOUNT 25960</h5>
            <button className='border border-[#D9D9D9] rounded p-1 absolute top-2 right-2'><IoClose size={25} /></button>
        </div>
    </div>
  )
}

export default FundTradingAccountPopup