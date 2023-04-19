import React from 'react'
import LogoSection from '../molecules/LogoSection'
import NavAccountData from '../molecules/NavAccountData'
import AccountData from '../atoms/AccountData'

const Navbar = ({ activeTab }: {activeTab: string}) => {
  return (
    <nav className='grid grid-cols-3 items-center bg-[#FAFAFA] border-b border-[#D9D9D9]'>
        <LogoSection activeTab={activeTab} />
        <NavAccountData />
        <div className='grid col-start-2 grid-rows-3 xs:grid-rows-1 xs:grid-cols-3 xs:col-span-full'>
          <AccountData heading1='BALANCE: ' amount1='10,000.00' heading2='EQUITY: ' amount2='10,000.00' smallScreen={true} />
          <AccountData heading1='FREE FUNDS: ' amount1='10,000.00' heading2='MARGIN: ' amount2='0.00' smallScreen={true} />
          <AccountData heading1='MARGIN LEVEL: ' amount1='0.00' percentage1='%' heading2='PROFIT: ' amount2='0.00' profit={true} smallScreen={true} />
        </div>
    </nav>
  )
}

export default Navbar