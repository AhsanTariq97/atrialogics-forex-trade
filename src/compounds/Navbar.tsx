import React from 'react'
import LogoSection from '../molecules/LogoSection'
import NavAccountData from '../molecules/NavAccountData'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between'>
        <LogoSection />
        <NavAccountData />
    </nav>
  )
}

export default Navbar