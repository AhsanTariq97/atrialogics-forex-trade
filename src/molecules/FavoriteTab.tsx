import React from 'react'
import { FaStar } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";

const FavoriteTab = () => {
  return (
    <div className='flex flex-col items-center justify-between px-3'>
        <div className='grid items-center w-full grid-cols-2 space-y-2 xs:space-x-4 xs:space-y-0'>
            <div className='flex items-center justify-center col-span-2 xs:justify-start xs:col-span-1'>
                <div className='flex items-center justify-start space-x-2 border-b-2 border-[#2F80ED] text-[#2F80ED] px-2 lg:px-0 xl:px-2 py-1'>
                    <h3 className='text-sm lg:text-xs xl:text-sm'>FAVORITES</h3>
                    <FaStar />
                </div>
                <h3 className='border-b-2 border-[#D9D9D9] text-sm lg:text-xs xl:text-sm pl-4 lg:pl-2 xl:pl-4 py-1 whitespace-nowrap'>ALL SYMBOLS</h3>
            </div>
            <div className='col-span-2 xs:col-span-1 border border-[#B4B4B4] rounded flex items-center mx-auto px-1 space-x-1 max-w-xs overflow-x-hidden'>
                <AiOutlineSearch />
                <input type="text" placeholder='Search for asset to trade....' className='text-sm bg-transparent focus:outline-none' />
            </div>
        </div>
    </div>
  )
}

export default FavoriteTab