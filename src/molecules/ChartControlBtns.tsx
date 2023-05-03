import React, {useState} from 'react'
import Image from 'next/image';
import { HiMagnifyingGlassPlus, HiMagnifyingGlassMinus } from "react-icons/hi2";
import { MdOutlineCenterFocusWeak } from "react-icons/md";
import { SlPencil } from "react-icons/sl";
import { AiOutlineFunction, AiOutlineSetting, AiOutlineRise } from "react-icons/ai";
import { BsFastForward } from "react-icons/bs";
import ChartFXPopup from './ChartFXPopup';
import ChartSettingPopup from './ChartSettingPopup';
import ChartLineStylePopup from './ChartLineStylePopup';

const ChartControlBtns = ({ onFullScreen, handleResetZoom, handleZoomIn, handleZoomOut }: {
    onFullScreen?: boolean, 
    handleResetZoom: () => void, 
    handleZoomIn: () => void, 
    handleZoomOut: () => void
}) => {
      
    const [selectFilter, setSelectFilter] = useState<boolean>()
    const [selectFilter2, setSelectFilter2] = useState<boolean>()
    const [selectLineStyle, setSelectLineStyle] = useState<boolean>()
    const [selectFunction, setSelectFunction] = useState<boolean>()
    const [selectSetting, setSelectSetting] = useState<boolean>()
    
  return (
    <div className={`${onFullScreen ? 'flex md:hidden mx-auto py-8' : 'md:flex hidden' } items-center justify-center space-x-2 text-right`}>
        <div className='relative'>
            <button className={`${selectFilter ? 'bg-[#2F80ED] text-white' : 'bg-[#F4F8FD]'} border border-[#BFDBFE] rounded w-7 h-7 flex items-center justify-center`} onClick={() => setSelectFilter(prev => !prev)}>D1</button>
            {selectFilter && <div className='absolute top-8 bg-[#F4F9FF] border border-[#D9D9D9] rounded text-left p-1 space-y-1'>
                <p className={`text-xs font-medium`}>M1</p>
                <p className={`text-xs font-medium`}>M5</p>
                <p className={`text-xs font-medium`}>M15</p>
                <p className={`text-xs font-medium`}>M30</p>
                <p className={`text-xs font-medium`}>H1</p>
                <p className={`text-xs font-medium`}>H4</p>
                <p className={`text-xs font-medium text-[#2F80ED]`}>D1</p>
                <p className={`text-xs font-medium`}>W1</p>
            </div>}
        </div>
        <div className='relative'>
            <button className={`${selectFilter2 ? 'bg-[#2F80ED]' : 'bg-[#F4F8FD]'} border border-[#BFDBFE] rounded w-7 h-7 flex items-center justify-center`} onClick={() => setSelectFilter2(prev => !prev)}><Image src='/assets/icons/adjustvertical.svg' className={`${selectFilter2 ? 'brightness-[100]' : ''}`} alt='' width={15} height={18} /></button>
            {selectFilter2 && <div className='absolute top-8 bg-[#F4F9FF] border border-[#D9D9D9] rounded p-1 space-y-1'>
                <Image src='/assets/icons/adjustvertical.svg' alt='' width={15} height={18} />
                <AiOutlineRise />
            </div>}
        </div>
        <button className='border border-[#BFDBFE] rounded bg-[#F4F8FD] w-7 h-7 flex items-center justify-center' onClick={handleZoomIn}><HiMagnifyingGlassPlus /></button>
        <button className='border border-[#BFDBFE] rounded bg-[#F4F8FD] w-7 h-7 flex items-center justify-center' onClick={handleZoomOut}><HiMagnifyingGlassMinus /></button>
        <button className='border border-[#BFDBFE] rounded bg-[#F4F8FD] w-7 h-7 flex items-center justify-center' onClick={handleResetZoom}><MdOutlineCenterFocusWeak /></button>
        <div className='relative'>
            <button className={`${selectLineStyle ? 'bg-[#2F80ED] text-white' : 'bg-[#F4F8FD]'} border border-[#BFDBFE] rounded w-7 h-7 flex items-center justify-center`} onClick={() => setSelectLineStyle(prev => !prev)}><SlPencil /></button>
            {selectLineStyle && <ChartLineStylePopup />}
        </div>
        <div className='relative'>
            <button className={`${selectFunction ? 'bg-[#2F80ED] text-white' : 'bg-[#F4F8FD]'} border border-[#BFDBFE] rounded w-7 h-7 flex items-center justify-center`} onClick={() => setSelectFunction(prev => !prev)}><AiOutlineFunction /></button>
            {selectFunction && <ChartFXPopup />}
        </div>
        <div className='relative'>
            <button className={`${selectSetting ? 'bg-[#2F80ED] text-white' : 'bg-[#F4F8FD]'} border border-[#BFDBFE] rounded w-7 h-7 flex items-center justify-center`} onClick={() => setSelectSetting(prev => !prev)}><AiOutlineSetting /></button>
            {selectSetting && <ChartSettingPopup />}
        </div>
        <button className='border border-[#BFDBFE] rounded bg-[#F4F8FD] w-7 h-7 flex items-center justify-center'><BsFastForward /></button>
    </div>
  )
}

export default ChartControlBtns