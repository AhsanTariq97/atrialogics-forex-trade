import React from 'react'

const PaypalWithdraw = () => {
  return (
    <div className='flex flex-col items-center justify-between space-y-12 text-[#535353] px-4 py-8 w-4/5 shadow-lg rounded-xl'>
        <h2 className='text-2xl font-bold text-[#535353]'>Paypal</h2>
        <div className='flex flex-col items-start justify-between space-y-10 w-full max-w-[450px]'>
            <div className='flex flex-col items-start justify-between w-full'>
                <label className='text-sm font-bold'>Payment info</label>
                <input type="text" placeholder='Paypal account' className='text-xl font-medium border-b border-[#535353] w-full outline-none' />
            </div>
            <input type="text" placeholder='Paypal account' className='text-xl font-medium border-b border-[#535353] w-full outline-none' />
            <input type="text" placeholder='Amount in USD' className='text-xl font-medium border-b border-[#535353] w-full outline-none' />
            <div className='flex flex-col items-start justify-between w-full space-y-4'>
                <p className='text-sm font-bold'>You will receive 0.00 USD</p>
                <button className='w-full bg-[#2F80ED] text-sm font-bold rounded-lg text-white py-4'>WITHDRAW</button>
            </div>
        </div>
    </div>
  )
}

export default PaypalWithdraw