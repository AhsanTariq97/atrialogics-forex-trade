import Image from 'next/image'
import React from 'react'
import {IoPower} from 'react-icons/io5'

const ChartSidebarFrame43 = () => {

    function getFlagEmoji(countryCode: string) {
        return countryCode.toUpperCase().replace(/./g, char => 
            String.fromCodePoint(127397 + char.charCodeAt(0))
        );
    }

    return (
    <div className='flex flex-col justify-between items-start bg-[#F4F9FF] rounded-lg pl-8 pr-4 h-full py-3 space-y-3'>
        <button className='flex items-center justify-start space-x-2'>
            <Image src='/assets/chart-sidebar/deposit.svg' alt='' width={18} height={18} />
            <p className='text-sm font-medium'>DEPOSIT</p>
        </button>
        <button className='flex items-center justify-start space-x-2'>
            <Image src='/assets/chart-sidebar/withdraw.svg' alt='' width={18} height={18} />
            <p className='text-sm font-medium'>WITHDRAW</p>
        </button>
        <button className='flex items-center justify-start space-x-2'>
            <Image src='/assets/chart-sidebar/financial-operations.svg' alt='' width={18} height={18} />
            <p className='text-sm font-medium'>FINANCIAL OPERATIONS</p>
        </button>
        <button className='flex items-center justify-start space-x-2'>
            <Image src='/assets/chart-sidebar/edit-profile.svg' alt='' width={18} height={18} />
            <p className='text-sm font-medium'>EDIT PROFILE</p>
        </button>
        <button className='flex items-center justify-start space-x-2'>
            <Image src='/assets/chart-sidebar/money-manager.svg' alt='' width={18} height={18} />
            <p className='text-sm font-medium'>BECOME MONEY MANAGER</p>
        </button>
        <button className='flex items-center justify-start space-x-2'>
            <Image src='/assets/chart-sidebar/user-setting.svg' alt='' width={18} height={18} />
            <p className='text-sm font-medium'>USER SETTINGS</p>
        </button>
        <button className='flex items-center justify-start space-x-2'>
            <Image src='/assets/chart-sidebar/restart.svg' alt='' width={18} height={18} />
            <p className='text-sm font-medium'>RESTART</p>
        </button>
        <button className='flex items-center justify-start space-x-2'>
            <Image src='/assets/chart-sidebar/about-us.svg' alt='' width={18} height={18} />
            <p className='text-sm font-medium'>ABOUT US</p>
        </button>
        <button className='flex items-center justify-start space-x-2'>
            <Image src='/assets/chart-sidebar/contact.svg' alt='' width={18} height={18} />
            <p className='text-sm font-medium'>CONTACT</p>
        </button>
        <div className='flex items-center justify-between w-full pr-4'>
            <div className='flex items-center space-x-1'>
                <p className='text-base'>{getFlagEmoji('gb')}</p>
                <p className='text-[9px] font-medium'>EN</p>
            </div>
            <div className='flex items-center space-x-1'>
                <p className='text-[9px] font-medium'>LIGHT</p>
                <div className='rounded-full bg-[#535353] p-1.5'></div>
            </div>
            <IoPower />
        </div>
    </div>
  )
}
  
export default ChartSidebarFrame43
