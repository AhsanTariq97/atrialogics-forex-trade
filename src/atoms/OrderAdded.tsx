import React from 'react'
import {BsCheckCircleFill} from 'react-icons/bs'

const OrderAdded = () => {
  return (
    <div className='border border-[#10B981] rounded-md flex justify-center items-center space-x-2 w-72 py-4 absolute top-16 right-8'>
        <BsCheckCircleFill className='text-[#10B981]' />
        <div className='flex flex-col items-start justify-between space-y-2'>
            <p className='text-[#10B981] font-semibold text-sm'>Order successfully added</p>
            <p className='text-xs font-medium'>Buy 0.01 EURUSD at price 1.09030</p>
        </div>
    </div>
  )
}

export default OrderAdded