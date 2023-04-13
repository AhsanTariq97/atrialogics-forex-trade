import React from 'react'
import GraphSectionHead from '../molecules/GraphSectionHead'
import GraphChart from '../molecules/GraphChart'

const ChartSection = () => {
  return (
    <div className='flex flex-col items-start justify-between border border-[#DDE1E4] bg-[#FFFFF4] rounded-lg w-full col-span-2'>
        <GraphSectionHead />
        {/* <GraphChart /> */}
    </div>
  )
}

export default ChartSection