import React from 'react'
import Logo from '../atoms/Logo'
import DemoMatch from '../atoms/DemoMatch'

const LogoSection = () => {
  return (
    <div className='flex items-center justify-between max-w-md'>
        <Logo />
        <DemoMatch />
    </div>
  )
}

export default LogoSection