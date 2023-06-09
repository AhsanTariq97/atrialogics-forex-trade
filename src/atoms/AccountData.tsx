import React from 'react'
import OpenAccountBtn from '../atoms/OpenAccountBtn'

interface AccountDataProps {
  heading1: string;
  amount1: string;
  percentage1?: string
  heading2: string;
  amount2: string;
  profit?: boolean;
  smallScreen?: boolean;
}

const AccountData = ({ heading1, amount1, percentage1, heading2, amount2, profit, smallScreen }: AccountDataProps) => {
  return (
    <div className={`${smallScreen ? 'flex lg:hidden xs:border-r' : 'hidden lg:flex border-r'}  items-center justify-between text-[#535353] space-x-2 xl:space-x-4 px-2 xl:px-4 my-3 border-[#D9D9D9]`}>
        <div className='flex flex-col items-start justify-between'>
            <h5 className='text-xs'>{heading1}</h5>
            <h3 className={`${percentage1 ? 'text-[#EF4444]' : 'text-[#10B981]' }`}>{amount1} <span className={`${percentage1 ? '' : 'align-super text-[10px]'}`}>{percentage1 ? percentage1 : 'USD'}</span></h3>
        </div>
        <div className='flex flex-col items-start justify-between'>
            <h5 className='text-xs'>{heading2}</h5>
            <h3 className={`${profit ? 'text-xl' : '' } text-[#10B981]`}>{amount2} <span className='text-[10px] align-super'>USD</span></h3>
        </div>
        {profit && !smallScreen && <OpenAccountBtn />}
    </div>
  )
}

export default AccountData