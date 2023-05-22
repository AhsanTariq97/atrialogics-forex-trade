import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import LogoutModal from '../atoms/LogoutModal';

const Frame54Navbar = ({ setActiveFrame54Tab }: {setActiveFrame54Tab: React.Dispatch<React.SetStateAction<string>>;}) => {

    const [navSidebar, setNavSidebar] = useState(false)
    const [logoutModal, setLogoutModal] = useState(false)
      
    const sidebarRef = useRef(null);

    useOutsideAlerter(sidebarRef, navSidebar, setNavSidebar);
    
  return (
        <nav className='flex items-center justify-between p-4 border-b'>
            <Link href='/frame7'><Image src='/assets/icons/backarrow.svg' alt='' width={20} height={20} /></Link>
            <div className='items-center justify-between hidden pl-40 space-x-12 lg:flex'>
                <Link href='/profile'><div className='flex items-center justify-between space-x-1'>
                    <Image src='/assets/icons/unverified.svg' alt='' width={24} height={24} />
                    <h4>UNVERIFIED</h4>
                </div></Link>
                <Link href='/frame51'><div className='flex items-center justify-between space-x-1'>
                    <div className='bg-white rounded-full w-max'>
                        <Image src='/assets/icons/users.svg' alt='' width={24} height={24} />
                    </div>
                    <h4>BECOME AN IB</h4>
                </div></Link>
                <Link href='/frame54'><div className='flex items-center justify-between space-x-1' onClick={() => setActiveFrame54Tab('COPY TRADING')}>
                    <div className='bg-white rounded-full w-max'>
                        <Image src='/assets/icons/users.svg' alt='' width={24} height={24} />
                    </div>
                    <h4>COPY TRADING</h4>
                </div></Link>
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
            <div ref={sidebarRef} className={`${navSidebar ? '' : 'hidden'} fixed z-20 right-0 px-4 py-4 top-[56.8px] bg-gradient-navSidebar`}>
                <ul className='flex flex-col items-center justify-between'>
                    <Link href='/profile'><li className='cursor-pointer w-full text-center py-3 font-semibold px-6 border-b border-[#10B981]'>Profile</li></Link>
                    <Link href='/security'><li className='cursor-pointer w-full text-center py-3 font-semibold px-6 border-b border-[#10B981]'>Security</li></Link>
                    <Link href='/frame51'><li className='cursor-pointer w-full text-center py-3 font-semibold px-6 border-b border-[#10B981]'>Become an IB</li></Link>
                    <Link href='/frame54'><li className='cursor-pointer w-full text-center py-3 font-semibold px-6 border-b border-[#10B981]' onClick={() => setActiveFrame54Tab('COPY TRADING')}>Copy Trading</li></Link>
                    <Link href='/frame46'><li className='cursor-pointer w-full text-center py-3 font-semibold px-6 border-b border-[#10B981]'>Restart Application</li></Link>
                    <Link href='/frame46'><li className='w-full px-6 py-3 font-semibold text-center cursor-pointer'>Default</li></Link>
                    <li className='w-full px-6 py-3 font-semibold text-center cursor-pointer' onClick={() => setLogoutModal(true)}>Logout</li>
                    {logoutModal && <LogoutModal setLogoutModal={setLogoutModal} />}
                </ul>
            </div>
        </nav>
    )
}

export default Frame54Navbar

function useOutsideAlerter(ref: any, isVisible: boolean, setIsVisible: React.Dispatch<React.SetStateAction<boolean>>) {
    useEffect(() => {
      function handleClickOutside(event: { target: any; }) {
        if (ref.current && !ref.current.contains(event.target) && isVisible) {
          
          setIsVisible(prev => !prev)
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref, isVisible, setIsVisible]);
}