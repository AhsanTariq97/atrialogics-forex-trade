import React, {useState} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Frame54Navbar from '../compounds/Frame54Navbar'
import Frame54TabLive from '../molecules/Frame54TabLive'
import Frame54TabDemo from '../molecules/Frame54TabDemo'
import Frame54TabCopyTrading from '../molecules/Frame54TabCopyTrading'
import DownloadTradingFooter from '../molecules/DownloadTradingFooter'

const Frame54Page = () => {

    const [activeFrame54Tab, setActiveFrame54Tab ] = useState('COPY TRADING')

    const onClickTabBtns = (e: any) => {
        setActiveFrame54Tab(e.target.textContent)
    }

  return (
    <>
        <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
            <div className='pb-16 text-white bg-gradient'>
                <Frame54Navbar setActiveFrame54Tab={setActiveFrame54Tab} />
                <div className='flex flex-col items-center justify-between py-8 space-y-4'>
                    <h2 className='text-2xl font-bold'>{activeFrame54Tab === 'COPY TRADING' ? 'Copy Trading' : 'Accounts'}</h2>
                    <div className='flex flex-col items-center justify-between space-y-2 sm:flex-row sm:space-y-0'>
                        <button className={`sm:pb-5 w-48 lg:w-72 text-center ${activeFrame54Tab === 'LIVE' ? 'border-b-4' : 'border-b'}`} onClick={onClickTabBtns}>LIVE</button>
                        <button className={`sm:pb-5 w-48 lg:w-72 text-center ${activeFrame54Tab === 'DEMO' ? 'border-b-4' : 'border-b'}`} onClick={onClickTabBtns}>DEMO</button>
                        <button className={`sm:pb-5 w-48 lg:w-72 text-center ${activeFrame54Tab === 'COPY TRADING' ? 'border-b-4' : 'border-b'}`} onClick={onClickTabBtns}>COPY TRADING</button>
                    </div>
                </div>
                {activeFrame54Tab === 'LIVE' && <Frame54TabLive />}
                {activeFrame54Tab === 'DEMO' && <Frame54TabDemo />}
                {activeFrame54Tab === 'COPY TRADING' && <Frame54TabCopyTrading />}
            </div>
            <div className='flex flex-col items-center justify-between px-4 py-16 space-y-24'>
                <div className='flex flex-col items-center justify-between space-y-12'>
                    <h1 className='text-3xl font-bold'>Special Offer</h1>
                    <Image src='/assets/special-offer.png' alt='' width={1061} height={356} className='' />
                </div>
                
                <DownloadTradingFooter />
            </div>
        </main>
    </>
  )
}

export default Frame54Page;

