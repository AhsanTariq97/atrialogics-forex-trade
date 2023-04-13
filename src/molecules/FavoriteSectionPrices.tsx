import React from 'react'
import FavoritePriceCard from '../atoms/FavoritePriceCard'
import FavoritePriceCardBuySell from '../atoms/FavoritePriceCardBuySell'

const FavoriteSectionPrices = () => {
  return (
    <div className='flex flex-col items-start justify-between w-full px-2 py-2 space-y-2'>
        <div className='grid w-full grid-cols-5 px-4'>
            <h3 className='text-[11px] font-medium text-[#535353]'>SYMBOL</h3>
            <h3 className='text-[11px] font-medium text-[#535353] col-span-2 text-center'>PRICE</h3>
            <h3 className='text-[11px] font-medium text-[#535353] text-right'>SPREAD</h3>
            <h3 className='text-[11px] font-medium text-[#535353] text-right'>CHANGE</h3>
        </div>
        <FavoritePriceCard image='/assets/flags/Rectangle 58.svg' name='GBPUSD' price='1.23072' spread='3' change='0.18%' />
        <FavoritePriceCard image='/assets/flags/Rectangle 54.svg' name='GBPUSD' price='1.23072' spread='9' change='0.18%' />
        <FavoritePriceCard image='/assets/flags/Rectangle 40.svg' name='XAUUSD' price='1967.69' priceColorRed={true} spread='38' change='0.23%' />
        <FavoritePriceCardBuySell image='/assets/flags/Rectangle 37.svg' name=' EURUSD' spread='1' change='0.01%' />
    </div>
  )
}

export default FavoriteSectionPrices