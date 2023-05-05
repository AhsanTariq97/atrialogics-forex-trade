import React, {useContext, useState} from 'react'
import Image from 'next/image';
import { HiMagnifyingGlassPlus, HiMagnifyingGlassMinus, HiOutlineBackward, HiOutlineForward } from "react-icons/hi2";
import { MdOutlineCenterFocusWeak } from "react-icons/md";
import { SlPencil } from "react-icons/sl";
import { AiOutlineFunction, AiOutlineSetting, AiOutlineRise } from "react-icons/ai";
import ChartFXPopup from './ChartFXPopup';
import ChartSettingPopup from './ChartSettingPopup';
import ChartLineStylePopup from './ChartLineStylePopup';

import { ChartStoreContext } from '../utils/chartStore'

const ChartControlBtns = ({ onFullScreen, lineChart, setLineChart, handleResetZoom, handleZoomIn, handleZoomOut }: {
    onFullScreen?: boolean, 
    lineChart: boolean, 
    setLineChart: React.Dispatch<React.SetStateAction<boolean>>,
    handleResetZoom: () => void, 
    handleZoomIn: () => void, 
    handleZoomOut: () => void,
}) => {

    const { 
        showCurrentWeekData, showCurrentMonthData, showCurrentYearData,
        setShowCurrentWeekData, setShowCurrentMonthData, setShowCurrentYearData,
    } = useContext(ChartStoreContext)

      
    const [selectFilter, setSelectFilter] = useState<boolean>()
    const [selectFilter2, setSelectFilter2] = useState<boolean>()
    const [selectLineStyle, setSelectLineStyle] = useState<boolean>()
    const [selectFunction, setSelectFunction] = useState<boolean>()
    const [selectSetting, setSelectSetting] = useState<boolean>()
    
  return (
    <div className={`${onFullScreen ? 'flex md:hidden mx-auto py-8' : 'md:flex hidden' } items-center justify-center space-x-2 text-right`}>
        <button className='border border-[#BFDBFE] rounded bg-[#F4F8FD] w-7 h-7 flex items-center justify-center'><HiOutlineBackward /></button>
        <button className={`${showCurrentYearData ? 'bg-[#2F80ED] text-white' : 'bg-[#F4F8FD]'} border border-[#BFDBFE] rounded w-7 h-7 flex items-center justify-center`} onClick={() => setShowCurrentYearData((prev: any) => !prev)}>Y</button>
        <button className={`${showCurrentMonthData ? 'bg-[#2F80ED] text-white' : 'bg-[#F4F8FD]'} border border-[#BFDBFE] rounded w-7 h-7 flex items-center justify-center`} onClick={() => setShowCurrentMonthData((prev: any) => !prev)}>M</button>
        <button className={`${showCurrentWeekData ? 'bg-[#2F80ED] text-white' : 'bg-[#F4F8FD]'} border border-[#BFDBFE] rounded w-7 h-7 flex items-center justify-center`} onClick={() => setShowCurrentWeekData((prev: any) => !prev)}>W</button>
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
            <button className={`${selectFilter2 ? 'bg-[#2F80ED]' : 'bg-[#F4F8FD]'} border border-[#BFDBFE] rounded w-7 h-7 flex items-center justify-center`} onClick={() => setSelectFilter2(prev => !prev)}>
                {lineChart ? (<AiOutlineRise className={`${selectFilter2 ? 'text-white' : ''}`} />) : (<Image src='/assets/icons/adjustvertical.svg' className={`${selectFilter2 ? 'brightness-[100]' : ''}`} alt='' width={15} height={18} />)}
            </button>
            {selectFilter2 && <div className='absolute top-8 bg-[#F4F9FF] border border-[#D9D9D9] rounded p-1 space-y-1'>
                <Image src='/assets/icons/adjustvertical.svg' className={`cursor-pointer ${lineChart ? '' : 'svg-2F80ED'}`} alt='' width={15} height={18} onClick={() => setLineChart(false)} />
                <AiOutlineRise className={`cursor-pointer ${lineChart ? 'text-[#2F80ED]' : ''}`} onClick={() => setLineChart(true)} />
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
        <button className='border border-[#BFDBFE] rounded bg-[#F4F8FD] w-7 h-7 flex items-center justify-center'><HiOutlineForward /></button>
    </div>
  )
}

export default ChartControlBtns