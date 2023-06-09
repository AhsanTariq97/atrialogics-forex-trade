import React, {useState} from 'react'
import Head from 'next/head'
import Frame54Navbar from '../compounds/Frame54Navbar'
import DownloadTradingFooter from '../molecules/DownloadTradingFooter'
import ChangePasswordForm from '../molecules/ChangePasswordForm';
import withAuth from '../utils/authToken';

const SecurityPage = () => {

    const [activeFrame54Tab, setActiveFrame54Tab ] = useState('TRADING COPY')

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className='text-white bg-gradient'>
            <Frame54Navbar setActiveFrame54Tab={setActiveFrame54Tab} />
            <div className='flex flex-col items-center justify-between py-16 space-y-8'>
                <h1 className='text-3xl font-bold'>Security</h1>
                <div className='flex items-center justify-center'>
                    <h3 className='font-medium border-b-2 border-[#D9D9D9] text-center px-12 pb-2'>TWO-FACTOR AUTHORIZATION</h3>
                    <h3 className='font-medium border-b-4 border-[#F4F9FF] text-center px-12 pb-2'>CHANGE PASSWORD</h3>
                </div>
                <h1 className='text-3xl font-bold'>Change User Password</h1>
            </div>
        </div>
        <div className='flex flex-col items-center justify-between px-4 py-16 space-y-24'>
            <ChangePasswordForm />
            <DownloadTradingFooter />
        </div>
      </main>
    </>
  )
}

export default withAuth(SecurityPage)