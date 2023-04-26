import React, {useState} from 'react'
import { IoClose } from 'react-icons/io5'
import NewTradingAccountCreatedPopup from './NewTradingAccountCreatedPopup'

const NewTradingAccountPopup = () => {

    const [openAccount, setOpenAccount] = useState(false)

  return (
    <div className='fixed flex flex-col items-center justify-start w-11/12 max-w-[600px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 border border-[#D9D9D9] rounded-lg bg-[#FBFCFD]'>
        <div className='flex items-center justify-center border-b border-[#CEE3FD] py-4 w-full'>
            <h5 className='text-xs font-semibold'>OPEN NEW TRADING ACCOUNT</h5>
            <button className='border border-[#D9D9D9] rounded p-1.5 absolute top-2 right-4'><IoClose /></button>
        </div>
        <div className='flex flex-col items-center justify-between w-full px-4 py-2 space-y-4 sm:items-start sm:space-y-0 sm:flex-row'>
            <div className='flex items-start justify-start space-x-2 sm:space-x-0 sm:w-1/4 sm:space-y-2 sm:flex-col'>
                <button className='text-sm font-semibold text-white bg-[#2F80ED] border border-[#2F80ED] rounded w-32 py-2'>LIVE ACCOUNT</button>
                <button className='text-sm font-semibold text-[#2F80ED] border border-[#2F80ED] rounded w-32 py-2'>DEMO ACCOUNT</button>
            </div>
            <div className='flex flex-col items-center justify-between w-full mb-2 space-y-8 sm:w-3/4'>
                <div className='border border-[#CCCBCB] rounded flex flex-col justify-between items-start w-full px-4 py-2 space-y-0.5'>
                    <p className='text-[10px] font-medium text-[#535353]'>Offer</p>
                    <p className='text-sm font-semibold'>Match-Trader</p>
                </div>
                <button className='w-56 border border-[#56B786] bg-[#56B786] text-sm font-semibold text-white self-end py-3 rounded' onClick={() => setOpenAccount(prev => !prev)}>OPEN NEW TRADING ACCOUNT</button>
            </div>
        </div>
        {openAccount && <NewTradingAccountCreatedPopup setOpenAccount={setOpenAccount} />}
    </div>
  )
}

export default NewTradingAccountPopup