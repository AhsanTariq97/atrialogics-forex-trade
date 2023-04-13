import React from 'react'
import { FaStar } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";

const FavortiteTab = () => {
  return (
    <div className='flex flex-col items-center justify-between px-3 mt-20'>
        <div className='flex items-center justify-between w-full space-x-4'>
            <div className='flex items-center-justify-between'>
                <div className='flex items-center justify-start space-x-2 border-b-2 border-[#2F80ED] text-[#2F80ED] px-2 py-1'>
                    <h3 className='text-sm'>FAVORITES</h3>
                    <FaStar />
                </div>
                <h3 className='border-b-2 border-[#D9D9D9] text-sm pl-4 py-1'>ALL SYMBOLS</h3>
            </div>
            <div className='border border-[#B4B4B4] rounded flex items-center px-1 space-x-1'>
                <AiOutlineSearch />
                <input type="text" placeholder='Search for asset to trade....' className='text-sm bg-transparent focus:outline-none' />
            </div>
        </div>
    </div>
  )
}

export default FavortiteTab