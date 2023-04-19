import React, { useState } from 'react'
import Image from 'next/image'
import Router from 'next/router';
import Link from 'next/link';

const Frame54Navbar = ({ setActiveFrame54Tab }: {setActiveFrame54Tab: React.Dispatch<React.SetStateAction<string>>;}) => {

    const [navSidebar, setNavSidebar] = useState(false)

  return (
        <nav className='flex items-center justify-between p-4 border-b'>
            <Image src='/assets/icons/backarrow.svg' alt='' width={20} height={20} />
            <div className='items-center justify-between hidden pl-40 space-x-12 lg:flex'>
                <div className='flex items-center justify-between space-x-1'>
                    <Image src='/assets/icons/unverified.svg' alt='' width={24} height={24} />
                    <h4>UNVERIFIED</h4>
                </div>
                <div className='flex items-center justify-between space-x-1'>
                    <div className='bg-white rounded-full w-max'>
                        <Image src='/assets/icons/users.svg' alt='' width={24} height={24} />
                    </div>
                    <h4>BECOME AN IB</h4>
                </div>
                <div className='flex items-center justify-between space-x-1'>
                    <div className='bg-white rounded-full w-max'>
                        <Image src='/assets/icons/users.svg' alt='' width={24} height={24} />
                    </div>
                    <h4>COPY TRADING</h4>
                </div>
                <div className='flex items-center justify-between space-x-1'>
                    <Image src='/assets/icons/refresh.svg' alt='' width={24} height={24} />
                    <h4>REFRESH</h4>
                </div>
            </div>
            <div className='flex items-center justify-between space-x-12'>
                <div className='flex items-center justify-between space-x-2'>
                    <h4>ENGLISH</h4>
                    <Image src='/assets/icons/dropdown2.svg' alt='' width={15} height={15} />
                </div>
                <Image src={`${navSidebar ? '/assets/icons/menuicon.svg' : '/assets/icons/menuicon.svg'}`} alt='' className='cursor-pointer' width={24} height={24} onClick={() => setNavSidebar(prev => !prev)} />
            </div>
            <div className={`${navSidebar ? '' : 'hidden'} fixed z-10 right-0 px-4 py-4 top-[56.8px] bg-gradient-navSidebar`}>
                <ul className='flex flex-col items-center justify-between'>
                    <li className='cursor-pointer w-full text-center py-3 font-semibold px-6 border-b border-[#10B981]'>Profile</li>
                    <li className='cursor-pointer w-full text-center py-3 font-semibold px-6 border-b border-[#10B981]'>Security</li>
                    <li className='cursor-pointer w-full text-center py-3 font-semibold px-6 border-b border-[#10B981]'>Become an IB</li>
                    <li className='cursor-pointer w-full text-center py-3 font-semibold px-6 border-b border-[#10B981]' onClick={() => setActiveFrame54Tab('COPY TRADING')}>Copy Trading</li>
                    <li className='cursor-pointer w-full text-center py-3 font-semibold px-6 border-b border-[#10B981]'>Restart Application</li>
                    <li className='w-full px-6 py-3 font-semibold text-center cursor-pointer'>Default</li>
                </ul>
            </div>
        </nav>
    )
}

export default Frame54Navbar