import React from 'react'
import Logo from '../atoms/Logo'
import DemoMatch from '../atoms/DemoMatch'

const LogoSection = () => {
  return (
    <div className='flex items-center justify-between w-full col-span-1 px-8'>
        <Logo />
        <DemoMatch />
    </div>
  )
}

export default LogoSection