import React from 'react'

const ChartFXAvgDirectional = () => {
  return (
    <div className='flex flex-col items-start justify-between w-full h-full px-2 py-4 space-y-8'>
        <div className='flex flex-col items-start justify-between w-full text-center'>
            <p className='text-xs font-medium'>Number of periods for calculation of the indicator</p>
            <div className='grid w-full grid-cols-7 border border-[#CDCDCD] rounded bg-[#F4F9FF]'>
                <p>+</p>
                <p className='col-span-5 py-1 border-l border-r'>14</p>
                <p>-</p>
            </div>
            <p className='pt-2 text-xs font-medium'>Positive directional indicator</p>
            <div className='grid w-full grid-cols-7 items-center justify-center border border-[#CDCDCD] rounded'>
                <div className='bg-[#EB5757] w-[24px] h-[22px] mx-auto'></div>
                <p className='col-span-6 py-1 pl-4 text-left border-l'>1 px</p>
            </div>
            <p className='pt-2 text-xs font-medium'>Average directional index</p>
            <div className='grid w-full grid-cols-7 items-center justify-center border border-[#CDCDCD] rounded'>
                <div className='bg-[#56B786] w-[24px] h-[22px] mx-auto'></div>
                <p className='col-span-6 py-1 pl-4 text-left border-l'>1 px</p>
            </div>
            <p className='pt-2 text-xs font-medium'>Average directional index</p>
            <div className='grid w-full grid-cols-7 items-center justify-center border border-[#CDCDCD] rounded'>
                <div className='bg-[#93B1FE] w-[24px] h-[22px] mx-auto'></div>
                <p className='col-span-6 py-1 pl-4 text-left border-l'>1 px</p>
            </div>
        </div>
        <button className='w-[208px] bg-[#5290F7] text-sm font-semibold rounded text-white py-4 self-end'>ADD AVERAGE DIRECTIONAL</button>
    </div>
  )
}

export default ChartFXAvgDirectional