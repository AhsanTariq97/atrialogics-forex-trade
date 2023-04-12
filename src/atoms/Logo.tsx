import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div className='flex flex-col items-center justify-between space-y-2'>
        <Image src='/assets/logo.svg' width={24} height={30.5} alt='' />
        <h1 className='text-[#2F80ED] font-extrabold min-w-max'>Trading Crowd</h1>
    </div>
  )
}

export default Logo