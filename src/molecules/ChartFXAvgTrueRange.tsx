import React, {useState, useEffect} from 'react'
import {GrFormAdd, GrFormSubtract} from 'react-icons/gr'

interface Props {
  fxData: {[key: string]: any};
  setfxData: any;
  // setfxData: React.Dispatch<React.SetStateAction<{[key: string]: any}>>;
}

const ChartFXAvgTrueRange: React.FC<Props> = ({ fxData, setfxData }) => {

    const [ NPCI, setNPCI ] = useState<number>(fxData.avgTrueRange.NPCI)
    const [ color, setColor ] = useState<number>(fxData.avgTrueRange.color)

    const [avgTrueRange, setAvgTrueRange] = useState({NPCI: NPCI, color: color})

    const setAvgTrueRangeFn = () => {
        setAvgTrueRange({...avgTrueRange, NPCI: NPCI, color: color})
    }
    
    useEffect(() => {
        setfxData({...fxData, avgTrueRange})
    }, [avgTrueRange])

  return (
    <div className='flex flex-col items-start justify-between w-full h-full px-2 py-4 space-y-8'>
        <div className='flex flex-col items-start justify-between w-full text-center'>
            <p className='text-xs font-medium'>Number of periods for calculation of the indicator</p>
            <div className='grid w-full items-center grid-cols-7 border border-[#CDCDCD] rounded bg-[#F4F9FF]'>
                <GrFormAdd className='mx-auto cursor-pointer' onClick={() => setNPCI(NPCI + 1)}/>
                <p className='col-span-5 py-1 border-l border-r'>{NPCI}</p>
                <GrFormSubtract className='mx-auto cursor-pointer' onClick={() => setNPCI(NPCI - 1)} />
            </div>
            <p className='pt-2 text-xs font-medium'>Color</p>
            <div className='grid items-center justify-center w-full grid-cols-7'>
                <div className='bg-[#EB5757] w-[24px] h-[22px] mx-auto'></div>
                <input type="number" className='text-right bg-transparent outline-none border border-[#CDCDCD] rounded' min={1} max={99} step={1} defaultValue={fxData.avgTrueRange.color || 1} onChange={(e) => setColor(parseInt(e.target.value))} />
                <span>px</span>
                {/* <p className='col-span-6 py-1 pl-4 text-left border border-[#CDCDCD] rounded'>1 px</p> */}
            </div>
        </div>
        <button className='w-[208px] bg-[#5290F7] text-sm font-semibold rounded text-white py-4 self-end' onClick={setAvgTrueRangeFn}>ADD AVERAGE DIRECTIONAL</button>
    </div>
  )
}

export default ChartFXAvgTrueRange