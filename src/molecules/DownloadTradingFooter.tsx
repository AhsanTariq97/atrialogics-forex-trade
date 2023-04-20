import React from 'react'
import Image from 'next/image'

const DownloadTradingFooter = () => {
  return (
    <div className='flex flex-col items-center justify-between pt-8 space-y-6'>
        <h2 className='text-3xl font-semibold text-center'>Download trading platform</h2>
        <div className='flex items-center justify-between space-x-6'>
            <div className='p-2 border border-black rounded-full'>
                <Image src='/assets/icons/apple.svg' alt='' width={31} height={31} className='' />
            </div>
            <div className='p-2 border border-black rounded-full'>
                <Image src='/assets/icons/android.svg' alt='' width={31} height={31} className='' />
            </div>
            <div className='p-2 border border-black rounded-full'>
                <Image src='/assets/icons/windows.svg' alt='' width={31} height={31} className='' />
            </div>
        </div>
        <div className='flex items-center justify-between space-x-2'>
            <Image src='/assets/icons/copyright.svg' alt='' width={16} height={16} className='' />
            <h5>MATCH-TRADE</h5>
        </div>
        <p className='text-sm'>Contact us at <a className='text-[#2F80ED]' href="mailto:support@match-trade.com">support@match-trade.com</a> if you encounter any problems  Version: v.0.36.2-1067-master</p>
    </div>
  )
}

export default DownloadTradingFooter