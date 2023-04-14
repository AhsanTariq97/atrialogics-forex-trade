import Image from 'next/image';
import React from 'react'
import { FaStar } from "react-icons/fa";
import { HiMagnifyingGlassPlus, HiMagnifyingGlassMinus } from "react-icons/hi2";
import { MdOutlineCenterFocusWeak } from "react-icons/md";
import { SlPencil } from "react-icons/sl";
import { AiOutlineFunction, AiOutlineSetting } from "react-icons/ai";
import { BsFastForward } from "react-icons/bs";


const GraphSectionHead = () => {
  return (
    <div className='grid items-center w-full grid-cols-4 pl-8 pr-4'>
        <div className='flex flex-col items-start justify-between col-span-1'>
            <div className='flex items-center justify-start space-x-2 text-[#2F80ED] py-1'>
                <h3 className='text-xl font-semibold text-black'>EURUSD</h3>
                <FaStar />
            </div>
            <div className='flex items-center justify-start space-x-2'>
                <p className='text-[#535353] text-[10px] font-medium'>L: <span className='text-[#EF4444]'>1.08235</span></p>
                <p className='text-[#535353] text-[10px] font-medium'>H: <span className='text-[#10B981]'>1.09261</span></p>
            </div>
        </div>
        <div className='hidden sm:flex items-center justify-center col-span-2 space-x-2 text-right'>
            <button className='border border-[#BFDBFE] rounded bg-[#F4F8FD] w-7 h-7 flex items-center justify-center'>D1</button>
            <div className='border border-[#BFDBFE] rounded bg-[#F4F8FD] w-7 h-7 flex items-center justify-center'><Image src='/assets/icons/adjustvertical.svg' alt='' width={15} height={18} /></div>
            <button className='border border-[#BFDBFE] rounded bg-[#F4F8FD] w-7 h-7 flex items-center justify-center'><HiMagnifyingGlassPlus /></button>
            <button className='border border-[#BFDBFE] rounded bg-[#F4F8FD] w-7 h-7 flex items-center justify-center'><HiMagnifyingGlassMinus /></button>
            <button className='border border-[#BFDBFE] rounded bg-[#F4F8FD] w-7 h-7 flex items-center justify-center'><MdOutlineCenterFocusWeak /></button>
            <button className='border border-[#BFDBFE] rounded bg-[#F4F8FD] w-7 h-7 flex items-center justify-center'><SlPencil /></button>
            <button className='border border-[#BFDBFE] rounded bg-[#F4F8FD] w-7 h-7 flex items-center justify-center'><AiOutlineFunction /></button>
            <button className='border border-[#BFDBFE] rounded bg-[#F4F8FD] w-7 h-7 flex items-center justify-center'><AiOutlineSetting /></button>
            <button className='border border-[#BFDBFE] rounded bg-[#F4F8FD] w-7 h-7 flex items-center justify-center'><BsFastForward /></button>
        </div>
        <div className='flex items-center justify-end space-x-2 sm:col-start-4 col-span-2 sm:col-span-1 col-start-3'>
            <div className='flex flex-col items-end justify-between'>
                <p className='text-right text-[10px] font-medium'>PLATFORM TIME</p>
                <p className='text-xs font-medium text-right'>29 Mar 2023 18-26:45 UTC +0</p>
            </div>
            <div className='border border-[#D9D9D9] p-1 rounded'>
                <Image src='/assets/icons/expand.svg' alt='' width={24} height={24} />
            </div>
        </div>
    </div>
  )
}

export default GraphSectionHead