import Image from 'next/image'
import React from 'react'

const PositionsAndOrdersTab = () => {
  return (
    <div className='px-4 py-2'>
        <div className='flex items-center justify-between w-full border-b-2 border-[#D9D9D9]'>
            <div className='flex items-center justify-between'>
                <h3 className='px-4 py-2 '>OPEN POSITIONS</h3>
                <h3 className='px-4 py-2 text-[#2F80ED] border-b-2 border-[#2F80ED]'>PENDING ORDERS</h3>
                <h3 className='px-4 py-2 '>FINANCE</h3>
                <h3 className='px-4 py-2 '>CLOSED POSITIONS</h3>
            </div>
            <div className='flex items-center justify-between space-x-2'>
                <h4 className='text-[#535353] font-medium'>EXPAND LIST</h4>
                <div className='border border-[#D9D9D9] p-1 rounded'>
                    <Image src='/assets/icons/expand.svg' alt='' width={24} height={24} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default PositionsAndOrdersTab