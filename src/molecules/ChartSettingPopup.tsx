import React, {useState} from 'react'
import { MdToggleOff, MdToggleOn } from "react-icons/md";

const ChartFXPopup = () => {

  const [toggleGrid, setToggleGrid] = useState(false)
  const [togglePositions, setTogglePositions] = useState(false)

  return (
    <div className='absolute top-8 -translate-x-full xs:-translate-x-0 flex flex-col justify-between items-start px-3 py-2 space-y-2 bg-[#FBFAFA] border border-[#E5E4E4] rounded w-40'>
        <p className='text-xs font-medium'>GRAPH SETTINGS</p>
        <div className='flex flex-col items-start justify-between w-full space-y-1'>
            <div className='flex items-center justify-between w-full'>
                <p className='text-xs font-medium'>Display grid</p>
                {toggleGrid && <MdToggleOn className='text-[#5290F7]' size={25} onClick={() => setToggleGrid(prev => !prev)}/>}
                {!toggleGrid && <MdToggleOff className='text-[#acacac]' size={25} onClick={() => setToggleGrid(prev => !prev)}/>}
            </div>
            <div className='flex items-center justify-between w-full'>
                <p className='text-xs font-medium'>Display positions</p>
                {togglePositions && <MdToggleOn className='text-[#5290F7]' size={25} onClick={() => setTogglePositions(prev => !prev)}/>}
                {!togglePositions && <MdToggleOff className='text-[#acacac]' size={25} onClick={() => setTogglePositions(prev => !prev)}/>}
            </div>
        </div>
    </div>
  )
}

export default ChartFXPopup