import React from 'react'

const LoginPage = () => {

    function getFlagEmoji(countryCode: string) {
        return countryCode.toUpperCase().replace(/./g, char => 
            String.fromCodePoint(127397 + char.charCodeAt(0))
        );
      }
      
  return (
    <div className='bg-[#FFFFF4] h-screen flex justify-center items-center'>
        <div className='border border-[#5290F7] rounded p-8 max-w-md mx-auto'>
            <div className='flex flex-col items-center justify-between w-full p-8 rounded bg-[#EFF6FF] space-y-8'>
                <h1 className='text-4xl font-extrabold text-[#5290F7]'>Trading Crowd</h1>
                <div className='w-full space-y-2'>
                    <div className='flex flex-col items-start justify-between w-full space-y-1'>
                        <label htmlFor="email" className='pl-0.5 text-xs'>EMAIL</label>
                        <input type="email" name="email" className='border border-[#BFDBFE] rounded p-2 w-full bg-[#FFFFF4]' />
                    </div>
                    <div className='flex flex-col items-start justify-between w-full space-y-1'>
                        <label htmlFor="password" className='pl-0.5 text-xs'>PASSWORD</label>
                        <input type="password" name="password" className='border border-[#BFDBFE] rounded p-2 w-full bg-[#FFFFF4]' />
                        <p className='self-end text-xs font-medium'>Forgot your password?</p>
                    </div>
                </div>
                <button className='bg-[#5290F7] rounded w-full text-[#FFFFF4] font-semibold py-3'>SIGN IN</button>
            </div>
            <div className='flex flex-col items-center justify-between py-2 space-y-2'>
                <p className='pb-2 text-sm font-medium'>Don't have an account?</p>
                <button className='text-[#5290F7] rounded w-full border border-[#7EA1F9] text-sm font-extrabold py-3'>TRY DEMO</button>
                <div className='rounded border border-[#7EA1F9] text-[9px] flex justify-between items-center space-x-2 px-2'>
                    <p className='text-base'>{getFlagEmoji('gb')}</p>
                    <p>EN</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoginPage