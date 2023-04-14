import React from 'react'
import AccountData from '../atoms/AccountData'
import Image from 'next/image'

const NavAccountData = () => {
  return (
    <div className='flex items-center justify-end md:justify-center lg:bg-[#FFFFF4] md:border-l border-r border-[#D9D9D9] col-span-2 md:col-span-1 lg:col-span-2 py-1'>
        <AccountData heading1='BALANCE: ' amount1='10,000.00' heading2='EQUITY: ' amount2='10,000.00' />
        <AccountData heading1='FREE FUNDS: ' amount1='10,000.00' heading2='MARGIN: ' amount2='0.00' />
        <AccountData heading1='MARGIN LEVEL: ' amount1='0.00' percentage1='%' heading2='PROFIT: ' amount2='0.00' profit={true} />
        <button className='lg:hidden bg-[#2F80ED] text-white font-semibold px-3 py-3 rounded min-w-max text-sm sm:text-base'>OPEN LIVE ACCOUNT</button>
        <div className='border border-[#D9D9D9] rounded sm:p-2 mx-4 '>
          <Image src='/assets/icons/user-outline.svg' alt='' width={29} height={29} />
        </div>
    </div>
  )
}

export default NavAccountData