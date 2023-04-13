import React from 'react'
import LogoSection from '../molecules/LogoSection'
import NavAccountData from '../molecules/NavAccountData'

const Navbar = () => {
  return (
    <nav className='grid grid-cols-3 items-center bg-[#FAFAFA] border-b border-[#D9D9D9]'>
        <LogoSection />
        <NavAccountData />
    </nav>
  )
}

export default Navbar