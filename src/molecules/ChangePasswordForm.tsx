import React from 'react'

const ChangePasswordForm = () => {
  return (
    <div className='flex flex-col items-center w-full max-w-md px-8 py-12 space-y-8 shadow-lg jusitfy-between rounded-xl'>
        <div className='flex flex-col items-start justify-between w-full space-y-2'>
            <label htmlFor="" className='text-xl font-semibold'>Current password</label>
            <input type="password" className='outline-none border-b border-[#2F80ED] w-full'/>
        </div>
        <div className='flex flex-col items-start justify-between w-full space-y-2'>
            <label htmlFor="" className='text-xl font-semibold'>New password</label>
            <input type="password" className='outline-none border-b border-[#2F80ED] w-full'/>
        </div>
        <div className='flex flex-col items-start justify-between w-full space-y-2'>
            <label htmlFor="" className='text-xl font-semibold'>Repeat password</label>
            <input type="password" className='outline-none border-b border-[#2F80ED] w-full' />
        </div>
        <div className='w-full'>
            <button className='bg-[#2F80ED] rounded-lg text-xl font-semibold w-full py-3 mt-6 text-white'>CHANGE PASSWORD</button>
        </div>
    </div>
  )
}

export default ChangePasswordForm