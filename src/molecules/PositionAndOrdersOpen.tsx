import React, {useState, useEffect} from 'react'
import { TbArrowsSort } from 'react-icons/tb'
import { FaSortDown } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'

interface MyProps {
  apiData: any;
  formattedDateTimeFn: (dateInMS: number) => string
}


const PositionAndOrdersPending = ({apiData, formattedDateTimeFn}: MyProps) => {
  
  const reversedApiData = [...apiData.results].reverse()

  return (
    <div className='bg-[#F4F8FD] max-h-80 overflow-auto'>
      <table className='w-full h-full'>
        <thead className='text-[10px] font-medium'>
          <tr className='border border-[#D9D9D9]'>
            <th className='py-1.5 rounded-l-2xl'><div className='flex items-center justify-center space-x-1'><p>ID</p><TbArrowsSort/></div></th>
            <th className='py-1.5'><div className='flex items-center justify-center space-x-1'><p>SYMBOL</p><TbArrowsSort/></div></th>
            <th className='py-1.5'><div className='flex items-center justify-center space-x-1'><p>OPEN TIME</p><TbArrowsSort/></div></th>
            <th className='py-1.5'><div className='flex items-center justify-center space-x-1'><p>VOLUME</p><TbArrowsSort/></div></th>
            <th className='py-1.5'><div className='flex items-center justify-center space-x-1'><p>SIDE</p><TbArrowsSort/></div></th>
            <th className='py-1.5'><div className='flex items-center justify-center space-x-1'><p>OPEN PRICE</p><TbArrowsSort/></div></th>
            <th className='py-1.5'><div className='flex items-center justify-center space-x-1'><p>CURRENT PRICE</p><TbArrowsSort/></div></th>
            <th className='py-1.5'><div className='flex items-center justify-center space-x-1'><p>STOP LOSS</p><TbArrowsSort/></div></th>
            <th className='py-1.5'><div className='flex items-center justify-center space-x-1'><p>TAKE PROFIT</p><TbArrowsSort/></div></th>
            <th className='py-1.5'><div className='flex items-center justify-center space-x-1'><p>SWAP</p><TbArrowsSort/></div></th>
            <th className='py-1.5'><div className='flex items-center justify-center space-x-1'><p>COMISSION</p><TbArrowsSort/></div></th>
            <th className='py-1.5'><div className='flex items-center justify-center space-x-1'><p>NET PROFIT</p><TbArrowsSort/></div></th>
            <th className='py-1.5 px-1'><div className='flex items-center justify-center space-x-1 border border-[#D9D9D9] rounded-sm'><p>SELECT ALL</p><FaSortDown/></div></th>
          </tr>
        </thead>
        <tbody className='text-xs font-medium'>
          {reversedApiData.map((entry: any, index: number) => {
            return (
              <tr key={index} className='border border-[#D9D9D9]'>
                <td className='py-1.5 text-center rounded-l-2xl'>W1680201139157</td>
                <td className='text-center'>{apiData?.ticker.slice(2)}</td>
                <td className='text-center'>{formattedDateTimeFn(entry.t)}</td>
                <td className='text-center'>{entry.vw}</td>
                <td className='text-center'><p className='border border-[#EF4444] text-[#EF4444] bg-[#FFDFDF] rounded-sm w-max mx-auto px-1 font-medium'>Sell</p></td>
                <td className='text-center'>{entry.o}</td>
                <td className='text-center'>{entry.c}</td>
                <td className='text-center'>0.00000</td>
                <td className='text-center'>0.00000</td>
                <td className='text-center text-[#10B981]'>0.04</td>
                <td className='text-center'>0.04</td>
                <td className='text-center text-[#10B981]'>2.95</td>
                <td className=''><IoMdClose className='mx-auto border border-[#D9D9D9] rounded' width={12} height={12}/></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default PositionAndOrdersPending