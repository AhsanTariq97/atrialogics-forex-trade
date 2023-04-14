import React from 'react'
import Image from 'next/image'
import { RiArrowUpSFill } from "react-icons/ri";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { IoIosAdd } from "react-icons/io";

interface FavoritePriceCardBuySellProps {
    image: string;
    name: string;
    spread: string;
    change: string;
}

const FavoritePriceCardBuySell = ({ image, name, spread, change }: FavoritePriceCardBuySellProps) => {
  return (
    <div className='border border-[#D9D9D9] rounded px-4 py-1 space-y-2'>
      <div className='grid w-full grid-cols-5'>
          <div className='flex items-center space-x-4'>
              <Image src={image} alt='' width={24} height={24} />
              <h4 className='text-xs font-medium'>{name}</h4>
          </div>
          <div className='flex flex-col xs:flex-row items-center justify-between col-span-2 xs:space-x-2 text-center space-y-2 xs:space-y-0'>
            <button className='flex items-center space-x-1 border border-[#D9D9D9] rounded px-2 py-1'><BsFillInfoCircleFill /><span> Info</span></button>
            <button className='flex items-center space-x-1 border border-[#D9D9D9] rounded px-2 py-1'><IoIosAdd /><span> New Order</span></button>
          </div>
          <p className='text-right h-max self-center'>{spread}</p>
          <div className='text-[#EB5757] flex items-center justify-end space-x-1'>
              <RiArrowUpSFill />
              <h4>{change}</h4>
          </div>
      </div>
      <div className='grid grid-cols-3 space-x-2'>
        <button className='bg-[#EF4444] border border-[#EF4444] rounded text-white text-[10px] font-medium text-left px-3 py-1.5'>SELL <br /><span className='text-xl'>1.08386</span></button>
        <div className='grid grid-cols-2 grid-rows-3 border border-[#D9D9D9] rounded'>
          <p className='text-[10px] font-medium col-span-2 row-span-2 border-b border-[#D9D9D9] text-center'>VOLUME <br /><span className='text-sm'>0.01</span></p>
          <p className='text-center'>+</p>
          <p className='border-l border-[#D9D9D9] text-center'>-</p>
        </div>
        <button className='bg-[#10B981] border border-[#10B981] rounded text-white text-[10px] font-medium text-right px-3 py-1.5'>BUY <br /><span className='text-xl'>1.08387</span></button>
      </div>
    </div>
  )
}

export default FavoritePriceCardBuySell