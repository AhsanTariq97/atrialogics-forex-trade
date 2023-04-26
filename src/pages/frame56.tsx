import React, {useState} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Frame54Navbar from '../compounds/Frame54Navbar'
import Link from 'next/link'
import DownloadTradingFooter from '../molecules/DownloadTradingFooter'
import ChangePasswordForm from '../molecules/ChangePasswordForm'

const Frame56Page = () => {

    const [activeFrame54Tab, setActiveFrame54Tab ] = useState('')

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className='relative text-white bg-gradient'>
            <Frame54Navbar setActiveFrame54Tab={setActiveFrame54Tab} />
            <div className='flex flex-col items-center justify-between py-16 space-y-8'>
                <h1 className='text-3xl font-bold'>Security</h1>
                <div className='flex items-center justify-center'>
                    <h3 className='font-medium px-16 py-2 border-b-2 border-[#D9D9D9]'>TWO-FACTOR AUTHORIZATION</h3>
                    <h3 className='font-medium px-16 py-2 border-b-4 border-[#F4F9FF]'>CHANGE PASWORD</h3>
                </div>
                <h1 className='pt-4 text-3xl font-bold'>Change User Password</h1>
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

export default Frame56Page