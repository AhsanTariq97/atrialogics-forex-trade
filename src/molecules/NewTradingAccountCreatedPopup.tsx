import React from 'react'
import { IoClose } from 'react-icons/io5'
import NewTradingAccountPopup from './NewTradingAccountPopup'
import Link from 'next/link'

const NewTradingAccountCreatedPopup = ({setOpenAccount}: {setOpenAccount: React.Dispatch<React.SetStateAction<boolean>>}) => {
  return (
    <div className='fixed flex flex-col items-center justify-start w-11/12 max-w-[550px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 border border-[#D9D9D9] rounded-lg bg-[#FFFFF4]'>
        <div className='flex items-center justify-center border-b border-[#CEE3FD] py-4 w-full'>
            <h5 className='w-full px-4 text-xs font-semibold text-left'>NEW TRADING ACCOUNT</h5>
            <button className='border border-[#D9D9D9] rounded p-1.5 absolute top-2 right-4' onClick={() => setOpenAccount(prev => !prev)}><IoClose /></button>
        </div>
        <div className='flex flex-col items-center justify-between py-4 space-y-4'>
            <p className='text-sm font-semibold text-[#535353]'>Your new trading account has been created. Would you like to switch to it?</p>
            <div className='flex items-start justify-center space-x-3'>
                <Link href='/frame54'><button className='text-sm font-semibold text-white bg-[#2F80ED] border border-[#2F80ED] rounded w-44 py-3'>OPEN LIVE ACCOUNT</button></Link>
                <button className='text-sm font-semibold text-[#2F80ED] border border-[#2F80ED] rounded w-44 py-3'>SWITCH ACCOUNT</button>
            </div>
        </div>
    </div>
  )
}

export default NewTradingAccountCreatedPopup