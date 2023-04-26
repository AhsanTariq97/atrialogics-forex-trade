import React from 'react'

const ChartFXIchimokuCloud = () => {
  return (
    <div className='flex flex-col items-start justify-between w-full h-full px-2 py-4 space-y-8'>
        <div className='flex flex-col items-start justify-between w-full text-center'>
            <p className='text-xs font-medium'>Conversion Period</p>
            <div className='grid w-full grid-cols-7 border border-[#CDCDCD] rounded bg-[#F4F9FF]'>
                <p>+</p>
                <p className='col-span-5 py-1 border-l border-r'>14</p>
                <p>-</p>
            </div>
            <p className='pt-2 text-xs font-medium'>Base Period</p>
            <div className='grid w-full grid-cols-7 border border-[#CDCDCD] rounded bg-[#F4F9FF]'>
                <p>+</p>
                <p className='col-span-5 py-1 border-l border-r'>14</p>
                <p>-</p>
            </div>
            <p className='pt-2 text-xs font-medium'>Span Period</p>
            <div className='grid w-full grid-cols-7 border border-[#CDCDCD] rounded bg-[#F4F9FF]'>
                <p>+</p>
                <p className='col-span-5 py-1 border-l border-r'>14</p>
                <p>-</p>
            </div>
            <p className='pt-2 text-xs font-medium'>Displacement</p>
            <div className='grid w-full grid-cols-7 border border-[#CDCDCD] rounded bg-[#F4F9FF]'>
                <p>+</p>
                <p className='col-span-5 py-1 border-l border-r'>14</p>
                <p>-</p>
            </div>
        </div>
        <button className='w-[208px] bg-[#5290F7] text-sm font-semibold rounded text-white py-4 self-end'>ADD ICHIMOKU CLOUD</button>
    </div>
  )
}

export default ChartFXIchimokuCloud