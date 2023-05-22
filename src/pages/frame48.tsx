import React, {useState} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Frame54Navbar from '../compounds/Frame54Navbar'
import DownloadTradingFooter from '../molecules/DownloadTradingFooter'
import PaypalWithdraw from '../atoms/PaypalWithdraw'
import PaymentMethodCard from '../atoms/PaymentMethodCard'
import withAuth from '../utils/authToken'

const Frame48Page = () => {

    const [activeFrame54Tab, setActiveFrame54Tab ] = useState('TRADING COPY')

    const [paymentMethod, setPaymentMethod ] = useState('')

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
            <div className='relative flex flex-col items-center justify-between px-4 pt-16 space-y-4 sm:flex-row md:px-16 sm:space-y-0'>
                <div className='bg-[#EB5757] py-3 px-8 rounded-[20px]'>
                    <h3 className='font-extrabold'>LIVE</h3>
                </div>
                <h3 className='text-xl font-bold'>BALANCE</h3>
                <div></div>
            </div>
            <div className="relative py-8">
                <div className="absolute z-10 p-4 text-5xl font-bold transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-6xl min-w-max">100000.00 USD</div>
                <div className="absolute left-0 z-0 hidden w-1/6 h-px bg-white lg:w-1/4 md:block top-1/2"></div>
                <div className="absolute right-0 z-0 hidden w-1/6 h-px bg-white lg:w-1/4 md:block top-1/2"></div>
            </div>
            <div className='flex flex-col items-center justify-between px-4 pt-2 pb-16 space-y-12 md:px-16'>
                <div className='flex flex-col items-center justify-between space-y-2 text-center'>
                    <h3 className='text-xl font-bold'>EQUITY:  100000.00 USD  |   MARGIN:  0.00USD</h3>
                </div>
                <div className='flex flex-wrap items-center justify-center md:w-4/5'>
                    <PaymentMethodCard paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} img='/assets/bitcoin.svg' text='BTC' />
                    <PaymentMethodCard paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} img='/assets/credit_card.svg' text='Bank Transfer USD' />
                    <PaymentMethodCard paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} img='/assets/usdt.svg' text='USDT ERC20 (CA)' />
                    <PaymentMethodCard paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} img='/assets/usdt.svg' text='USDT ERC20 (online payment)' />
                    <PaymentMethodCard paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} img='/assets/change-balance.svg' text='Change Balance' />
                    <PaymentMethodCard paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} img='/assets/skrill.svg' text='Skrill' />
                    <PaymentMethodCard paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} img='/assets/paypal.svg' text='Paypal' />
                    <PaymentMethodCard paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} img='/assets/internal-transfer.svg' text='Internal Transfer' />
                </div>
            </div>
            <div className='bg-[#2F80ED] z-50 p-2 w-16 h-16 flex justify-center items-center rounded-full fixed bottom-24 right-8 cursor-pointer'>
                <Image src='/assets/icons/earphones.svg' alt='' width={28} height={28} className='' />
            </div>
        </div>
        <div className='flex flex-col items-center justify-between px-4 py-16 space-y-24'>
            {paymentMethod === '' && <div className='flex flex-col items-center justify-between pt-16 space-y-4'>
                <div className='p-1.5 border border-black rounded-full'>
                    <Image src='/assets/icons/arrowup-7.svg' alt='' width={28} height={28} className='' />
                </div>
                <h3 className='text-lg font-bold'>Choose your payment method above</h3>
            </div>}
            {paymentMethod === 'Paypal' && <PaypalWithdraw />}
            <DownloadTradingFooter />
        </div>
      </main>
    </>
  )
}

export default withAuth(Frame48Page)