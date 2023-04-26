import Image from 'next/image'
import React from 'react'

const FundTradingAccountCard = ({ img, text }: {img: string, text: string}) => {
  return (
    <div className='flex flex-col items-center justify-center space-y-2 border border-[#D9D9D9] rounded bg-[#F0F3F7] w-[158px] h-[143px] pt-6'>
        <Image src={img} alt='' width={60} height={60} />
        <h3 className='font-semibold'>{text}</h3>
    </div>
  )
}

export default FundTradingAccountCard