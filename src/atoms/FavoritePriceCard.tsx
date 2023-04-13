import React from 'react'
import Image from 'next/image'
import { RiArrowUpSFill } from "react-icons/ri";

interface FavoritePriceCardProps {
    image: string;
    name: string;
    price: string;
    priceColorRed?: boolean;
    spread: string;
    change: string;
}

const FavoritePriceCard = ({ image, name, price, priceColorRed, spread, change }: FavoritePriceCardProps) => {
  return (
    <div className='border border-[#D9D9D9] rounded grid grid-cols-5 px-4 py-1 w-full'>
        <div className='flex items-center space-x-4'>
            <Image src={image} alt='' width={24} height={24} />
            <h4 className='text-xs font-medium'>{name}</h4>
        </div>
        <p className={`${priceColorRed ? 'text-[#EB5757]' : 'text-[#10B981]'} col-span-2 text-center`}>{price}</p>
        <p className='text-right'>{spread}</p>
        <div className='text-[#EB5757] flex items-center justify-end space-x-1'>
            <RiArrowUpSFill />
            <h4>{change}</h4>
        </div>
    </div>
  )
}

export default FavoritePriceCard