import React from 'react'

const AccountData = () => {
  return (
    <div className='flex items-center justify-between text-[#535353] space-x-4 self-stretch'>
        <div className='flex flex-col items-start justify-between'>
            <h5 className='text-xs'>BALANCE:</h5>
            <h3 className='text-[#10B981]'>10,000.00 <span className='text-[10px] align-super'>USD</span></h3>
        </div>
        <div className='flex flex-col items-start justify-between'>
            <h5 className='text-xs'>EQUITY:</h5>
            <h3 className='text-[#10B981]'>10,000.00 <span className='text-[10px] align-super'>USD</span></h3>
        </div>
    </div>
  )
}

export default AccountData