import React, {useState} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Frame54Navbar from '../compounds/Frame54Navbar'
import DownloadTradingFooter from '../molecules/DownloadTradingFooter'
import Link from 'next/link'
import PaypalWithdraw from '../atoms/PaypalWithdraw'
import {AiOutlineFileAdd} from 'react-icons/ai'

const Frame48Page = () => {

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
            <div className='flex flex-col items-center justify-between py-16'>
                <h1 className='text-2xl font-bold'>Profile</h1>
            </div>
            <div className='bg-[#2F80ED] p-2 w-16 h-16 flex justify-center items-center rounded-full fixed bottom-24 right-8 cursor-pointer'>
                <Image src='/assets/icons/earphones.svg' alt='' width={28} height={28} className='' />
            </div>
        </div>
        <div className='flex flex-col items-center justify-between px-8 py-16 space-y-24'>
            <div className='flex flex-col items-start justify-between space-y-8 w-full text-[#535353] px-8 py-12 shadow-lg rounded-xl'>
                <div className='flex flex-col items-start justify-between w-full space-y-3'>
                    <h2 className='text-[#52c2e4] text-xl font-bold pb-2'>Verification Documents</h2>
                    <div className='flex items-center justify-start space-x-8 sm:justify-between sm:w-1/3'>
                        <div className='flex flex-col items-start justify-between'>
                            <p className='font-semibold'>Aadhaar Card</p>
                            <div className='flex flex-col items-center justify-between border border-black rounded-lg w-[150px] p-2'>
                                <AiOutlineFileAdd size={50} />
                                <p className='text-center'>Drag & drop to upload document</p>
                            </div>
                            <p className='pt-4 text-xs font-semibold'>*Document required</p>
                        </div>
                        <div className='flex flex-col items-start justify-between'>
                            <p className='font-semibold'>Passport</p>
                            <div className='flex flex-col items-center justify-between border border-black rounded-lg w-[150px] p-2'>
                                <AiOutlineFileAdd size={50} />
                                <p className='text-center'>Drag & drop to upload document</p>
                            </div>
                            <p className='pt-4 text-xs font-semibold'>*Document required</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-start justify-between w-full space-y-3'>
                    <h2 className='text-[#52c2e4] text-xl font-bold pb-2'>Personal Details</h2>
                    <div className='flex flex-col items-start justify-between w-full space-y-1'>
                        <label className='font-semibold'>First Name</label>
                        <input type="text" placeholder='First Name' className='font-medium border-b border-[#52c2e4] w-full outline-none' required />
                    </div>
                    <div className='flex flex-col items-start justify-between w-full space-y-1'>
                        <label className='font-semibold'>Last Name</label>
                        <input type="text" placeholder='Last Name' className='font-medium border-b border-[#52c2e4] w-full outline-none' required />
                    </div>
                    <div className='flex flex-col items-start justify-between w-full space-y-1'>
                        <label className='font-semibold'>Date of Birth</label>
                        <input type="text" placeholder='dd/mm/yyyy' className='font-medium border-b border-[#52c2e4] w-full outline-none' required />
                    </div>
                    <div className='flex flex-col items-start justify-between w-full space-y-1'>
                        <label className='font-semibold'>Phone number</label>
                        <input type="text" placeholder='+1234567890' className='font-medium border-b border-[#52c2e4] w-full outline-none' required />
                    </div>
                </div>
                <div className='flex flex-col items-start justify-between w-full space-y-3'>
                    <h2 className='text-[#52c2e4] text-xl font-bold pb-2'>Address Details</h2>
                    <div className='flex flex-col items-start justify-between w-full space-y-1'>
                        <label className='font-semibold'>City</label>
                        <input type="text" placeholder='City' className='font-medium border-b border-[#52c2e4] w-full outline-none' required />
                    </div>
                    <div className='flex flex-col items-start justify-between w-full space-y-1'>
                        <label className='font-semibold'>Postal ZIP Code</label>
                        <input type="text" placeholder='Postal ZIP Code' className='font-medium border-b border-[#52c2e4] w-full outline-none' required />
                    </div>
                    <div className='flex flex-col items-start justify-between w-full space-y-1'>
                        <label className='font-semibold'>Country</label>
                        <input type="text" placeholder='' className='font-medium border-b border-[#52c2e4] w-full outline-none' required />
                    </div>
                    <div className='flex flex-col items-start justify-between w-full space-y-1'>
                        <label className='font-semibold'>State</label>
                        <input type="text" placeholder='State' className='font-medium border-b border-[#52c2e4] w-full outline-none' required />
                    </div>
                </div>
                <div className='flex flex-col items-start justify-between w-full space-y-3'>
                    <h2 className='text-[#52c2e4] text-xl font-bold pb-2'>Bank Info</h2>
                    <div className='flex flex-col items-start justify-between w-full space-y-1'>
                        <label className='font-semibold'>Account Name</label>
                        <input type="text" placeholder='Account Name' className='font-medium border-b border-[#52c2e4] w-full outline-none' required />
                    </div>
                    <div className='flex flex-col items-start justify-between w-full space-y-1'>
                        <label className='font-semibold'>Bank Account</label>
                        <input type="text" placeholder='Bank Account' className='font-medium border-b border-[#52c2e4] w-full outline-none' required />
                    </div>
                    <div className='flex flex-col items-start justify-between w-full space-y-1'>
                        <label className='font-semibold'>Bank Address</label>
                        <input type="text" placeholder='Bank Address' className='font-medium border-b border-[#52c2e4] w-full outline-none' required />
                    </div>
                    <div className='flex flex-col items-start justify-between w-full space-y-1'>
                        <label className='font-semibold'>Swift Code</label>
                        <input type="text" placeholder='Swift Code' className='font-medium border-b border-[#52c2e4] w-full outline-none' required />
                    </div>
                    <div className='flex flex-col items-start justify-between w-full space-y-1'>
                        <label className='font-semibold'>Bank Name</label>
                        <input type="text" placeholder='Bank Name' className='font-medium border-b border-[#52c2e4] w-full outline-none' required />
                    </div>
                </div>
                <div className='flex flex-col items-start justify-between w-full space-y-3'>
                    <h2 className='text-[#52c2e4] text-xl font-bold pb-2'>Questionnaire</h2>
                    <div>
                        <p className='font-semibold'>How often have you traded Futures, Options or ETFs in the last 12 months?</p>
                        <label><input className='mr-2' type="radio" name='future-trade-frequency' value='frequently' id='frequently' />
                        Frequently</label><br />
                        <label><input className='mr-2' type="radio" name='future-trade-frequency' value='regularly' id='regularly' />
                        Regularly</label><br />
                        <label><input className='mr-2' type="radio" name='future-trade-frequency' value='occasionally' id='occasionally' />
                        Occasionally</label><br />
                        <label><input className='mr-2' type="radio" name='future-trade-frequency' value='never' id='never' />
                        Never</label>
                    </div>
                    <div>
                        <p className='font-semibold'>How often have you traded Spread Bets, CFDs or margined FX in the last 12 months?</p>
                        <label> <input className='mr-2' type="radio" name='spread-bets-frequency' value='frequently' id='frequently' />
                        Frequently</label><br />
                        <label> <input className='mr-2' type="radio" name='spread-bets-frequency' value='regularly' id='regularly' />
                        Regularly</label><br />
                        <label> <input className='mr-2' type="radio" name='spread-bets-frequency' value='occasionally' id='occasionally' />
                        Occasionally</label><br />
                        <label> <input className='mr-2' type="radio" name='spread-bets-frequency' value='never' id='never' />
                        Never</label>
                    </div>
                    <div>
                        <p className='font-semibold'>Do you have work experience that provides you with a good understanding of trading Spread Bets or CFDs?</p>
                        <label><input className='mr-2' type="radio" name='work-experience' value='yes' id='yes' />
                        Yes</label><br />
                        <label><input className='mr-2' type="radio" name='work-experience' value='no' id='no' />
                        No</label><br />
                    </div>
                    <div>
                        <p className='font-semibold'>Do you have qualifications that assist your understanding of CFDs?</p>
                        <label><input className='mr-2' type="radio" name='qualifications' value='yes' id='yes' />
                        Yes</label><br />
                         <label><input className='mr-2' type="radio" name='qualifications' value='no' id='no' />
                        No</label><br />
                    </div>
                </div>
                <button className='bg-[#52c2e4] font-semibold rounded-lg text-white px-8 py-3'>NEXT STEP</button>
                
                <div className='flex items-center justify-center w-full'>
                    <button className='bg-[#52c2e4] font-semibold rounded-lg text-white px-8 py-3 mt-4'>SAVE</button>
                </div>
            </div>
            <DownloadTradingFooter />
        </div>
      </main>
    </>
  )
}

export default Frame48Page