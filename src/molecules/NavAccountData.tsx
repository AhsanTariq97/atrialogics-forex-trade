import React from 'react'
import AccountData from '../atoms/AccountData'
import Image from 'next/image'

const NavAccountData = () => {
  return (
    <div className='flex items-center justify-between bg-[#FFFFF4] border-l border-r border-[#D9D9D9] col-span-2 py-1'>
        <AccountData heading1='BALANCE: ' amount1='10,000.00' heading2='EQUITY: ' amount2='10,000.00' />
        <AccountData heading1='FREE FUNDS: ' amount1='10,000.00' heading2='MARGIN: ' amount2='0.00' />
        <AccountData heading1='MARGIN LEVEL: ' amount1='0.00' percentage1='%' heading2='PROFIT: ' amount2='0.00' profit={true} />
        <div className='border border-[#D9D9D9] rounded p-2 mx-4'>
          <Image src='/assets/icons/user-outline.svg' alt='' width={29} height={29} />
        </div>
    </div>
  )
}

export default NavAccountData