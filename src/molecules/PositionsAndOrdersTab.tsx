import Image from 'next/image'
import React, { useState } from 'react'

interface MyProps {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

const PositionsAndOrdersTab = ({ activeTab, setActiveTab }: MyProps ) => {

    const [showSidebar, setShowSidebar] = useState(false)

    const onTabClick = (e: any) => {
        setActiveTab(e.target.textContent);
        setShowSidebar(prev => !prev)
    }

  return (
    <div className='px-4'>
        <div className='flex items-center justify-between w-full text-sm md:text-base border-b-2 xl:border-b-0 border-[#D9D9D9]'>
            <div className='relative flex items-center justify-between px-2 md:px-4 xl:border-b-2 border-[#D9D9D9]'>
                <Image src={`${showSidebar ? '/assets/icons/menu-close.svg' : '/assets/icons/menu-hamburger.svg'}`} className='z-10 mx-2 cursor-pointer sm:hidden brightness-0' alt='' width={20} height={20} onClick={() => setShowSidebar(prev => !prev)} />
                <h3 className={`hidden sm:block px-2 md:px-4 py-2 cursor-pointer ${activeTab === 'OPEN POSITIONS' ? 'text-[#2F80ED] border-b-2 border-[#2F80ED]' : ''}`} onClick={onTabClick}>OPEN POSITIONS</h3>
                <h3 className={`hidden sm:block px-2 md:px-4 py-2 cursor-pointer ${activeTab === 'PENDING ORDERS' ? 'text-[#2F80ED] border-b-2 border-[#2F80ED]' : ''}`} onClick={onTabClick}>PENDING ORDERS</h3>
                <h3 className={`hidden sm:block px-2 md:px-4 py-2 cursor-pointer ${activeTab === 'FINANCE' ? 'text-[#2F80ED] border-b-2 border-[#2F80ED]' : ''}`} onClick={onTabClick}>FINANCE</h3>
                <h3 className={`hidden sm:block px-2 md:px-4 py-2 cursor-pointer ${activeTab === 'CLOSED POSITIONS' ? 'text-[#2F80ED] border-b-2 border-[#2F80ED]' : ''}`} onClick={onTabClick}>CLOSED POSITIONS</h3>
                {/* Displaying one for small screen based on active */}
                <h3 className={`sm:hidden px-2 md:px-4 py-2 cursor-pointer text-[#2F80ED] border-b-2 border-[#2F80ED]`}>{activeTab}</h3>
                {showSidebar && <div className='absolute px-6 py-2 pl-16 -top-2 -left-8 sm:hidden bg-slate-300'>
                    <h3 className={`px-1 py-2 cursor-pointer w-max ${activeTab === 'OPEN POSITIONS' ? 'text-[#2F80ED]' : ''}`} onClick={onTabClick}>OPEN POSITIONS</h3>
                    <h3 className={`px-1 py-2 cursor-pointer w-max ${activeTab === 'PENDING ORDERS' ? 'text-[#2F80ED]' : ''}`} onClick={onTabClick}>PENDING ORDERS</h3>
                    <h3 className={`px-1 py-2 cursor-pointer w-max ${activeTab === 'FINANCE' ? 'text-[#2F80ED]' : ''}`} onClick={onTabClick}>FINANCE</h3>
                    <h3 className={`px-1 py-2 cursor-pointer w-max ${activeTab === 'CLOSED POSITIONS' ? 'text-[#2F80ED]' : ''}`} onClick={onTabClick}>CLOSED POSITIONS</h3>
                </div>}
            </div>
            {(activeTab === 'FINANCE' || activeTab === 'CLOSED POSITIONS') && <div className='hidden xl:flex items-center justify-center space-x-8 text-[#535353]'>
                <div className='border border-[#B4B4B4] rounded text-sm px-2'>
                    <p className='font-medium'>From</p>
                    <h5 className='font-bold'>Last 24h</h5>
                </div>
                <div className='border border-[#B4B4B4] rounded text-sm px-2'>
                    <p className='font-medium'>Operations types</p>
                    {activeTab === 'FINANCE' && <h5 className='font-bold'>Deposit, Withdrawal, Credit in...</h5>}
                    {activeTab === 'CLOSED POSITIONS' && <h5 className='font-bold'>ALLIMUNIUM, GER30CASH, CAB..</h5>}
                </div>
                <div className=''>
                    <p className='font-medium'>TOTAL PROFIT</p>
                    <h3 className='text-xl font-semibold'>0.00 <span className='text-[10px] align-super'>USD</span></h3>
                </div>
            </div>}
            <div className='flex items-center justify-between space-x-2'>
                <h4 className='text-[#535353] font-medium'>EXPAND LIST</h4>
                <div className='border border-[#D9D9D9] p-1 rounded'>
                    <Image src='/assets/icons/expand.svg' alt='' width={24} height={24} />
                </div>
            </div>
        </div>
        {(activeTab === 'FINANCE' || activeTab === 'CLOSED POSITIONS') && <div className='xl:hidden flex items-center justify-center space-x-8 text-[#535353]'>
            <div className='border border-[#B4B4B4] rounded text-sm px-2'>
                <p className='font-medium'>From</p>
                <h5 className='font-bold'>Last 24h</h5>
            </div>
            <div className='border border-[#B4B4B4] rounded text-sm px-2'>
                <p className='font-medium'>Operations types</p>
                {activeTab === 'FINANCE' && <h5 className='font-bold'>Deposit, Withdrawal, Credit in...</h5>}
                {activeTab === 'CLOSED POSITIONS' && <h5 className='font-bold'>ALLIMUNIUM, GER30CASH, CAB..</h5>}
            </div>
            <div className=''>
                <p className='font-medium'>TOTAL PROFIT</p>
                <h3 className='text-xl font-semibold'>0.00 <span className='text-[10px] align-super'>USD</span></h3>
            </div>
        </div>}
    </div>
  )
}

export default PositionsAndOrdersTab