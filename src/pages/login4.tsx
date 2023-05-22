import Image from 'next/image';
import React, { useRef } from 'react'
import { useRouter } from 'next/router';
import GoogleReCaptcha from 'react-google-recaptcha';
import ReCAPTCHA from 'react-google-recaptcha';
import Link from 'next/link';
import withAuth from '../utils/authToken';

const LoginPage4 = () => {

    function getFlagEmoji(countryCode: string) {
        return countryCode.toUpperCase().replace(/./g, char => 
            String.fromCodePoint(127397 + char.charCodeAt(0))
        );
    }

    

  return (
    <main className='bg-[#FFFFF4] h-screen'>
        <nav className='grid items-center grid-cols-3 px-4 py-8 mx-auto sm:px-16'>
            <h1 className='text-2xl font-extrabold text-[#003960]'>Trading Crowd</h1>
            <div className='flex items-center justify-end col-span-2 space-x-4 lg:col-start-3'>
                <div className='rounded border border-[#7EA1F9] text-[9px] flex justify-between items-center space-x-1 sm:space-x-2 px-1 sm:px-2'>
                    <p className='text-base'>{getFlagEmoji('gb')}</p>
                    <p>EN</p>
                </div>
                <p className='text-sm font-semibold text-[#003960]'>Already a user?</p>
                <Link href='/login'><button className='bg-[#5290F7] text-sm font-semibold rounded text-white py-2 px-6'>SIGN IN</button></Link>
            </div>
        </nav>
        <section className='flex flex-col items-center justify-center px-4 py-32 mx-auto space-y-8 md:flex-row md:space-y-0'>
            <div className='flex flex-col items-start justify-center col-span-2 px-8 space-y-4 md:items-end md:w-2/5'>
                <h1 className='text-4xl lg:text-6xl text-[#5290F7] font-bold md:text-right'>Open demo account</h1>
                <p className='text-lg lg:text-2xl text-[#003960] font-semibold'>Fill out registration form</p>
            </div>
            <div className='w-full md:w-3/5 flex flex-col items-start justify-between min-w-[320px] max-w-lg mx-auto px-6 py-4 rounded bg-[#EFF6FF] space-y-4 border border-[#BFDBFE]'>
                <h1 className='text-xl font-semibold'>Terms and conditions</h1>
                <div className='flex flex-col items-center justify-between w-full space-y-4'>
                    <p>I agree to Terms and Conditions</p>
                    
                    <ReCAPTCHA size="normal" sitekey='6LelI5QlAAAAAABvwav5tsdTLPof5PJJJdYeoLFk' />
                </div>
                <div className='flex items-center justify-between w-full'>
                    <Link href='/signup'><button className='border border-[#5290F7] rounded text-xs text-[#535353] font-bold py-3 px-4 self-end'>PREVIOUS STEP</button></Link>
                    <Link href='/frame7'><button className='bg-[#5290F7] rounded text-xs text-white font-bold py-3 px-4 self-end'>NEXT STEP</button></Link>
                </div>
            </div>
        </section>
    </main>
  )
}

export default withAuth(LoginPage4)