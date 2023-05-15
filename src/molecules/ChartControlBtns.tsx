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

const ChartControlBtns = ({ onFullScreen }: { onFullScreen?: boolean }) => {

    const { 
        showWeeklyData, showMonthlyData, showYearlyData,
        setShowWeeklyData, setShowMonthlyData, setShowYearlyData,
        lineChart, setLineChart, chartRef, currentYear, setCurrentYear, 
        currentMonth, setCurrentMonth, setCurrentDay, 
    } = useContext(ChartStoreContext)

    const handleResetZoom = () => {
      const chartInstance = chartRef.current;
      if (chartInstance) {
        chartInstance.resetZoom(); 
      }
    };
    
    const handleZoomIn = () => {
      const chartInstance = chartRef.current;
      if (chartInstance) {
        chartInstance.zoom(1.1); 
      }
    };
    
    const handleZoomOut = () => {
      const chartInstance = chartRef.current;
      if (chartInstance) {
        chartInstance.zoom(0.9);
      }  
    };

    const getMaxDayOfMonth = (month: number) => {
      const monthValue = month - 1;
      if (isNaN(monthValue) || monthValue < 0 || monthValue > 11) {
        return
      }

      const today = new Date();
      today.setMonth(monthValue + 1);
      today.setDate(0);

      return today.getDate();
    }

    const moveBackwards = () => {
      if (showYearlyData) {
        setCurrentYear(currentYear - 1)
      } else if (showMonthlyData) {
          if (currentMonth > 1) {
            setCurrentMonth(currentMonth - 1)
            setCurrentDay(getMaxDayOfMonth(currentMonth - 1))
          } else if (currentMonth == 1) {
            setCurrentMonth(12)
            setCurrentYear(currentYear - 1)
          }
      }
    }

    
    const moveForwards = () => {
      const today = new Date()
      
      if (showYearlyData) {
        if (currentYear < today.getFullYear()) {
          setCurrentYear(currentYear + 1)
        }
      } else if (showMonthlyData) {
          if (currentMonth < 12) {
            if (currentYear <= today.getFullYear() && currentMonth < today.getMonth() + 1) {
              setCurrentMonth(currentMonth + 1)
              setCurrentDay(getMaxDayOfMonth(currentMonth + 1))
            }
          } else if (currentMonth == 12 && currentYear < today.getFullYear()) {
            setCurrentMonth(1)
            setCurrentYear(currentYear + 1)
          }
      } 
    }
      
    const [selectFilter, setSelectFilter] = useState<boolean>()
    const [selectChartType, setSelectChartType] = useState<boolean>()
    const [selectLineStyle, setSelectLineStyle] = useState<boolean>()
    const [selectFunction, setSelectFunction] = useState<boolean>()
    const [selectSetting, setSelectSetting] = useState<boolean>()
    
  return (
    <div className={`${onFullScreen ? 'flex md:hidden mx-auto py-8 w-full flex-wrap' : 'md:flex hidden' } items-center justify-center space-x-2 text-right`}>
        <button className='my-2 border border-[#BFDBFE] rounded bg-[#F4F8FD] w-7 h-7 flex items-center justify-center' onClick={moveBackwards}><HiOutlineBackward /></button>
        <button className={`${showYearlyData ? 'bg-[#2F80ED] text-white' : 'bg-[#F4F8FD]'} border border-[#BFDBFE] rounded w-7 h-7 flex items-center justify-center`} onClick={() => setShowYearlyData((prev: any) => !prev)}>Y</button>
        <button className={`${showMonthlyData ? 'bg-[#2F80ED] text-white' : 'bg-[#F4F8FD]'} border border-[#BFDBFE] rounded w-7 h-7 flex items-center justify-center`} onClick={() => setShowMonthlyData((prev: any) => !prev)}>M</button>
        <button className={`${showWeeklyData ? 'bg-[#2F80ED] text-white' : 'bg-[#F4F8FD]'} border border-[#BFDBFE] rounded w-7 h-7 flex items-center justify-center`} onClick={() => setShowWeeklyData((prev: any) => !prev)}>W</button>
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
            <button className={`${selectChartType ? 'bg-[#2F80ED]' : 'bg-[#F4F8FD]'} border border-[#BFDBFE] rounded w-7 h-7 flex items-center justify-center`} onClick={() => setSelectChartType(prev => !prev)}>
                {lineChart ? (<AiOutlineRise className={`${selectChartType ? 'text-white' : ''}`} />) : (<Image src='/assets/icons/adjustvertical.svg' className={`${selectChartType ? 'brightness-[100]' : ''}`} alt='' width={15} height={18} />)}
            </button>
            {selectChartType && <div className='absolute top-8 bg-[#F4F9FF] border border-[#D9D9D9] rounded p-1 space-y-1'>
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
        <button className='border border-[#BFDBFE] rounded bg-[#F4F8FD] w-7 h-7 flex items-center justify-center' onClick={moveForwards}><HiOutlineForward /></button>
    </div>
  )
}

export default ChartControlBtns