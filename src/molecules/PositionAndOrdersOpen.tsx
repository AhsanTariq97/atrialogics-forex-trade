import React from 'react'
import { TbArrowsSort } from 'react-icons/tb'
import { FaSortDown } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'

const PositionAndOrdersPending = () => {
  return (
    <div className='flex flex-col items-center justify-between pb-8 bg-[#F4F8FD] '>
      <table className='w-full h-full '>
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
          <tr className='border border-[#D9D9D9]'>
            <td className='py-1.5 text-center rounded-l-2xl'>W1680201139157</td>
            <td className='text-center'>EURUSD</td>
            <td className='text-center'>30.03.2023 18:46:23</td>
            <td className='text-center'>0.01</td>
            <td className='text-center'><p className='border border-[#EF4444] text-[#EF4444] bg-[#FFDFDF] rounded-sm w-max mx-auto px-1 font-medium'>Sell</p></td>
            <td className='text-center'>1.09024</td>
            <td className='text-center'>1.08733</td>
            <td className='text-center'>0.00000</td>
            <td className='text-center'>0.00000</td>
            <td className='text-center text-[#10B981]'>0.04</td>
            <td className='text-center'>0.04</td>
            <td className='text-center text-[#10B981]'>2.95</td>
            <td className=''><IoMdClose className='mx-auto border border-[#D9D9D9] rounded' width={12} height={12}/></td>
          </tr>
          <tr className='border border-[#D9D9D9] rounded'>
            <td className='py-1.5 text-center'>W1680201139157</td>
            <td className='text-center'>EURUSD</td>
            <td className='text-center'>30.03.2023 18:46:23</td>
            <td className='text-center'>0.01</td>
            <td className='text-center'><p className='border border-[#EF4444] text-[#EF4444] bg-[#FFDFDF] rounded-sm w-max mx-auto px-1 font-medium'>Sell</p></td>
            <td className='text-center'>1.09024</td>
            <td className='text-center'>1.08733</td>
            <td className='text-center'>0.00000</td>
            <td className='text-center'>0.00000</td>
            <td className='text-center text-[#10B981]'>0.04</td>
            <td className='text-center'>0.04</td>
            <td className='text-center text-[#10B981]'>2.95</td>
            <td className=''><IoMdClose className='mx-auto border border-[#D9D9D9] rounded' width={12} height={12}/></td>
          </tr>
          <tr className='border border-[#D9D9D9] rounded'>
            <td className='py-1.5 text-center'>W1680201139157</td>
            <td className='text-center'>EURUSD</td>
            <td className='text-center'>30.03.2023 18:46:23</td>
            <td className='text-center'>0.01</td>
            <td className='text-center'><p className='border border-[#10B981] text-[#10B981] bg-[#E1F6EB] rounded-sm w-max mx-auto px-1 font-medium'>Sell</p></td>
            <td className='text-center'>1.09024</td>
            <td className='text-center'>1.08733</td>
            <td className='text-center'>0.00000</td>
            <td className='text-center'>0.00000</td>
            <td className='text-center text-[#10B981]'>0.04</td>
            <td className='text-center'>0.04</td>
            <td className='text-center text-[#10B981]'>2.95</td>
            <td className=''><IoMdClose className='mx-auto border border-[#D9D9D9] rounded' width={12} height={12}/></td>
          </tr>
          <tr className='border border-[#D9D9D9] rounded'>
            <td className='py-1.5 text-center'>W1680201139157</td>
            <td className='text-center'>EURUSD</td>
            <td className='text-center'>30.03.2023 18:46:23</td>
            <td className='text-center'>0.01</td>
            <td className='text-center'><p className='border border-[#EF4444] text-[#EF4444] bg-[#FFDFDF] rounded-sm w-max mx-auto px-1 font-medium'>Sell</p></td>
            <td className='text-center'>1.09024</td>
            <td className='text-center'>1.08733</td>
            <td className='text-center'>0.00000</td>
            <td className='text-center'>0.00000</td>
            <td className='text-center text-[#10B981]'>0.04</td>
            <td className='text-center'>0.04</td>
            <td className='text-center text-[#10B981]'>2.95</td>
            <td className=''><IoMdClose className='mx-auto border border-[#D9D9D9] rounded' width={12} height={12}/></td>
          </tr>
          <tr className='border border-[#D9D9D9] rounded'>
            <td className='py-1.5 text-center'>W1680201139157</td>
            <td className='text-center'>EURUSD</td>
            <td className='text-center'>30.03.2023 18:46:23</td>
            <td className='text-center'>0.01</td>
            <td className='text-center'><p className='border border-[#EF4444] text-[#EF4444] bg-[#FFDFDF] rounded-sm w-max mx-auto px-1 font-medium'>Sell</p></td>
            <td className='text-center'>1.09024</td>
            <td className='text-center'>1.08733</td>
            <td className='text-center'>0.00000</td>
            <td className='text-center'>0.00000</td>
            <td className='text-center text-[#EF4444]'>0.04</td>
            <td className='text-center'>0.04</td>
            <td className='text-center text-[#10B981]'>2.95</td>
            <td className=''><IoMdClose className='mx-auto border border-[#D9D9D9] rounded' width={12} height={12}/></td>
          </tr>
          <tr className='border border-[#D9D9D9] rounded'>
            <td className='py-1.5 text-center'>W1680201139157</td>
            <td className='text-center'>EURUSD</td>
            <td className='text-center'>30.03.2023 18:46:23</td>
            <td className='text-center'>0.01</td>
            <td className='text-center'><p className='border border-[#EF4444] text-[#EF4444] bg-[#FFDFDF] rounded-sm w-max mx-auto px-1 font-medium'>Sell</p></td>
            <td className='text-center'>1.09024</td>
            <td className='text-center'>1.08733</td>
            <td className='text-center'>0.00000</td>
            <td className='text-center'>0.00000</td>
            <td className='text-center text-[#10B981]'>0.04</td>
            <td className='text-center'>0.04</td>
            <td className='text-center text-[#EF4444]'>2.95</td>
            <td className=''><IoMdClose className='mx-auto border border-[#D9D9D9] rounded' width={12} height={12}/></td>
          </tr>
          <tr className='border border-[#D9D9D9] rounded'>
            <td className='py-1.5 text-center'>W1680201139157</td>
            <td className='text-center'>EURUSD</td>
            <td className='text-center'>30.03.2023 18:46:23</td>
            <td className='text-center'>0.01</td>
            <td className='text-center'><p className='border border-[#EF4444] text-[#EF4444] bg-[#FFDFDF] rounded-sm w-max mx-auto px-1 font-medium'>Sell</p></td>
            <td className='text-center'>1.09024</td>
            <td className='text-center'>1.08733</td>
            <td className='text-center'>0.00000</td>
            <td className='text-center'>0.00000</td>
            <td className='text-center text-[#10B981]'>0.04</td>
            <td className='text-center'>0.04</td>
            <td className='text-center text-[#EF4444]'>2.95</td>
            <td className=''><IoMdClose className='mx-auto border border-[#D9D9D9] rounded' width={12} height={12}/></td>
          </tr>
          
        </tbody>
      </table>
    </div>
  )
}

export default PositionAndOrdersPending