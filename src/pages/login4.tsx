import Image from 'next/image';
import React from 'react'

const LoginPage = () => {

    function getFlagEmoji(countryCode: string) {
        return countryCode.toUpperCase().replace(/./g, char => 
            String.fromCodePoint(127397 + char.charCodeAt(0))
        );
      }
      
  return (
    <main className='bg-[#FFFFF4] h-screen'>
        <nav className='grid grid-cols-3 items-center mx-auto px-16 py-8'>
            <h1 className='text-2xl font-extrabold text-[#003960]'>Trading Crowd</h1>
            <div className='col-start-3 flex justify-start items-center space-x-4'>
                <div className='rounded border border-[#7EA1F9] text-[9px] flex justify-between items-center space-x-2 px-2'>
                    <p className='text-base'>{getFlagEmoji('gb')}</p>
                    <p>EN</p>
                </div>
                <p className='text-sm font-semibold text-[#003960]'>Already a user?</p>
                <button className='bg-[#5290F7] text-sm font-semibold rounded text-white py-2 px-6'>SIGN IN</button>
            </div>
        </nav>
        <section className='flex flex-col md:flex-row items-center justify-center py-32 mx-auto space-y-8 md:space-y-0'>
            <div className='col-span-2 flex flex-col justify-center items-start md:items-end px-8 space-y-4 md:w-2/5'>
                <h1 className='text-4xl lg:text-6xl text-[#5290F7] font-bold md:text-right'>Open demo account</h1>
                <p className='text-lg lg:text-2xl text-[#003960] font-semibold'>Fill out registration form</p>
            </div>
            <div className='2-3/5 flex flex-col items-start justify-between min-w-[430px] mx-auto px-6 py-4 rounded bg-[#EFF6FF] space-y-4 border border-[#BFDBFE]'>
                <h1 className='text-xl font-semibold'>Terms and conditions</h1>
                <div className='flex flex-col items-center justify-between w-full space-y-4'>
                    <p>I agree to Terms and Conditions</p>
                    <div className='flex justify-between items-center bg-[#BFDBFE38] min-w-[300px] w-[300px] border border-[#DDE1E4] rounded p-2'>
                        <p>I’m not a robot</p>
                        <div className='flex flex-col items-center justify-between'>
                            <Image src='/assets/icons/reCAPTCHA.svg' alt='' width={28} height={28} />
                            <p className='text-[10px]'>reCAPTCHA</p>
                            <p className='text-[10px]'>Privacy - Terms</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between items-center w-full'>
                    <button className='border border-[#5290F7] rounded text-xs text-[#535353] font-bold py-3 px-4 self-end'>PREVIOUS STEP</button>
                    <button className='bg-[#5290F7] rounded text-xs text-white font-bold py-3 px-4 self-end'>NEXT STEP</button>
                </div>
            </div>
        </section>
    </main>
  )
}

export default LoginPage