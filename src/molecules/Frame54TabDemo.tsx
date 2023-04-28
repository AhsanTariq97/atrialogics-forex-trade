import React from 'react'
import Frame54Card from './Frame54Card'
import {HiPlus} from 'react-icons/hi2'

const Frame54TabDemo = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full space-y-4 lg:space-x-12 lg:space-y-0 lg:flex-row'>
        <Frame54Card demo={true} />
        <div className='flex flex-col items-center justify-center px-2 sm:px-7 w-[371.2px] sm:w-[410px] max-w-[410px] border-2 rounded-xl h-[291.2px] space-y-2'>
            <div className='bg-[#2F80ED] p-2 rounded-full'>
                <HiPlus size={34} />
            </div>
            <p className='text-xs'>ADD NEW ACCOUNT</p>
        </div>
    </div>
  )
}

export default Frame54TabDemo