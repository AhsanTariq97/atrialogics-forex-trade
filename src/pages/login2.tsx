import Link from 'next/link';
import React from 'react'

const LoginPage = () => {

    function getFlagEmoji(countryCode: string) {
        return countryCode.toUpperCase().replace(/./g, char => 
            String.fromCodePoint(127397 + char.charCodeAt(0))
        );
      }
      
  return (
    <main className='bg-[#FFFFF4] h-screen'>
        <nav className='grid items-center grid-cols-3 px-16 py-8 mx-auto'>
            <h1 className='text-2xl font-extrabold text-[#003960]'>Trading Crowd</h1>
            <div className='flex items-center justify-start col-start-3 space-x-4'>
                <div className='rounded border border-[#7EA1F9] text-[9px] flex justify-between items-center space-x-2 px-2'>
                    <p className='text-base'>{getFlagEmoji('gb')}</p>
                    <p>EN</p>
                </div>
                <p className='text-sm font-semibold text-[#003960]'>Already a user?</p>
                <button className='bg-[#5290F7] text-sm font-semibold rounded text-white py-2 px-6'>SIGN IN</button>
            </div>
        </nav>
        <section className='flex flex-col items-center justify-center py-32 mx-auto space-y-8 md:flex-row md:space-y-0'>
            <div className='flex flex-col items-start justify-center col-span-2 px-8 space-y-4 md:items-end md:w-2/5'>
                <h1 className='text-4xl lg:text-6xl text-[#5290F7] font-bold md:text-right'>Open demo account</h1>
                <p className='text-lg lg:text-2xl text-[#003960] font-semibold'>Fill out registration form</p>
            </div>
            <div className='2-3/5 flex flex-col items-start justify-between min-w-[430px] mx-auto px-6 py-4 rounded bg-[#EFF6FF] space-y-4 border border-[#BFDBFE]'>
                <h1 className='text-xl font-semibold'>Account type</h1>
                <div className='flex flex-col items-start justify-between w-full space-y-1'>
                    <label htmlFor="match-traders-demo" className='text-xs font-semibold'>OFFER</label>
                    <input type="text" name='match-traders-demo' className='border border-[#BFDBFE] rounded p-2 w-full bg-[#FBF6F64A] text-sm' placeholder='MATCH-TRADER DEMO' />
                </div>
                <Link href='/login3'><button className='bg-[#5290F7] rounded text-xs text-[#FFFFF4] font-bold py-3 px-4 self-end'>NEXT STEP</button></Link>
            </div>
        </section>
    </main>
  )
}

export default LoginPage