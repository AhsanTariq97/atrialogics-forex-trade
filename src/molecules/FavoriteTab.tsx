import React from 'react'
import { FaStar } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";

const FavoriteTab = () => {
  return (
    <div className='flex flex-col items-center justify-between px-3 mt-8 sm:mt-20'>
        <div className='grid grid-cols-2 items-center w-full xs:space-x-4 space-y-2 xs:space-y-0'>
            <div className='col-span-2 xs:col-span-1 flex items-center justify-center'>
                <div className='flex items-center justify-start space-x-2 border-b-2 border-[#2F80ED] text-[#2F80ED] px-2 py-1'>
                    <h3 className='text-sm'>FAVORITES</h3>
                    <FaStar />
                </div>
                <h3 className='border-b-2 border-[#D9D9D9] text-sm pl-4 py-1'>ALL SYMBOLS</h3>
            </div>
            <div className='col-span-2 xs:col-span-1 border border-[#B4B4B4] rounded flex items-center px-1 space-x-1 max-w-xs mx-auto'>
                <AiOutlineSearch />
                <input type="text" placeholder='Search for asset to trade....' className='text-sm bg-transparent focus:outline-none' />
            </div>
        </div>
    </div>
  )
}

export default FavoriteTab