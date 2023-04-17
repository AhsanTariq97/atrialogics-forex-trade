import Image from 'next/image'
import React, { useState } from 'react'

interface MyProps {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

const PositionsAndOrdersTab = ({ activeTab, setActiveTab }: MyProps ) => {

    const [showSidebar, setShowSidebar] = useState(false)

  return (
    <div className='px-4 py-2'>
        <div className='flex items-center justify-between w-full border-b-2 border-[#D9D9D9] text-sm md:text-base'>
            <div className='relative flex items-center justify-between space-x-2 md:space-x-4 '>
                <Image src={`${showSidebar ? '/assets/icons/menu-close.svg' : '/assets/icons/menu-hamburger.svg'}`} className='sm:hidden brightness-0' alt='' width={20} height={20} onClick={() => setShowSidebar(prev => !prev)} />
                <h3 className={`hidden sm:block px-1 py-2 ${activeTab === 'OPEN POSITIONS' ? 'text-[#2F80ED] border-b-2 border-[#2F80ED]' : ''}`} onClick={(e) => setActiveTab(e.target.textContent)}>OPEN POSITIONS</h3>
                <h3 className={`hidden sm:block px-1 py-2 ${activeTab === 'PENDING ORDERS' ? 'text-[#2F80ED] border-b-2 border-[#2F80ED]' : ''}`} onClick={(e) => setActiveTab(e.target.textContent)}>PENDING ORDERS</h3>
                <h3 className={`hidden sm:block px-1 py-2 ${activeTab === 'FINANCE' ? 'text-[#2F80ED] border-b-2 border-[#2F80ED]' : ''}`} onClick={(e) => setActiveTab(e.target.textContent)}>FINANCE</h3>
                <h3 className={`hidden sm:block px-1 py-2 ${activeTab === 'CLOSED POSITIONS' ? 'text-[#2F80ED] border-b-2 border-[#2F80ED]' : ''}`} onClick={(e) => setActiveTab(e.target.textContent)}>CLOSED POSITIONS</h3>
                {/* Displaying one for small screen based on active */}
                <h3 className={`sm:hidden px-1 py-2 text-[#2F80ED] border-b-2 border-[#2F80ED]`}>{activeTab}</h3>
                {showSidebar && <div className='absolute px-8 py-2 -left-4 top-8 sm:hidden bg-slate-300'>
                    <h3 className={`px-1 py-2 w-max ${activeTab === 'OPEN POSITIONS' ? 'text-[#2F80ED]' : ''}`} onClick={(e) => setActiveTab(e.target.textContent)}>OPEN POSITIONS</h3>
                    <h3 className={`px-1 py-2 w-max ${activeTab === 'PENDING ORDERS' ? 'text-[#2F80ED]' : ''}`} onClick={(e) => setActiveTab(e.target.textContent)}>PENDING ORDERS</h3>
                    <h3 className={`px-1 py-2 w-max ${activeTab === 'FINANCE' ? 'text-[#2F80ED]' : ''}`} onClick={(e) => setActiveTab(e.target.textContent)}>FINANCE</h3>
                    <h3 className={`px-1 py-2 w-max ${activeTab === 'CLOSED POSITIONS' ? 'text-[#2F80ED]' : ''}`} onClick={(e) => setActiveTab(e.target.textContent)}>CLOSED POSITIONS</h3>
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