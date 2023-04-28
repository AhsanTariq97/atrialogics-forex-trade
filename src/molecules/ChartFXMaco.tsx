import React, {useState, useEffect} from 'react'
import {GrFormAdd, GrFormSubtract} from 'react-icons/gr'

interface Props {
    fxData: {[key: string]: any};
    setfxData: any;
    // setfxData: React.Dispatch<React.SetStateAction<{[key: string]: any}>>;
}

const ChartFXMaco: React.FC<Props> = ({ fxData, setfxData }) => {

    const [ NPCSTMA, setNPCSTMA ] = useState<number>(fxData.maco.NPCSTMA)
    const [ NPCLTMA, setNPCLTMA ] = useState<number>(fxData.maco.NPCLTMA)
    const [ NPCSL, setNPCSL ] = useState<number>(fxData.maco.NPCSL)
    const [ histogramColor, setHistogramColor ] = useState<number>(fxData.maco.histogramColor)

    const [maco, setMaco] = useState({NPCSTMA: NPCSTMA, NPCLTMA: NPCLTMA, NPCSL: NPCSL, histogramColor: histogramColor})

    const setMacoFn = () => {
        setMaco({...maco, NPCSTMA: NPCSTMA, NPCLTMA: NPCLTMA, NPCSL: NPCSL, histogramColor: histogramColor})
    }
    
    useEffect(() => {
        setfxData({...fxData, maco})
    }, [maco])

    return (
    <div className='flex flex-col items-start justify-between w-full h-full px-2 py-4 space-y-8'>
        <div className='flex flex-col items-start justify-between w-full text-center'>
            <p className='text-xs font-medium text-left'>Number of periods for calculation of Short term Moving Average</p>
            <div className='grid items-center w-full grid-cols-7 border border-[#CDCDCD] rounded bg-[#F4F9FF]'>
                <GrFormAdd className='mx-auto cursor-pointer' onClick={() => setNPCSTMA(NPCSTMA + 1)}/>
                <p className='col-span-5 py-1 border-l border-r'>{NPCSTMA}</p>
                <GrFormSubtract className='mx-auto cursor-pointer' onClick={() => setNPCSTMA(NPCSTMA - 1)} />
            </div>
            <p className='pt-2 text-xs font-medium text-left'>Number of periods for calculation of Long term Moving Average</p>
            <div className='grid items-center w-full grid-cols-7 border border-[#CDCDCD] rounded bg-[#F4F9FF]'>
                <GrFormAdd className='mx-auto cursor-pointer' onClick={() => setNPCLTMA(NPCLTMA + 1)}/>
                <p className='col-span-5 py-1 border-l border-r'>{NPCLTMA}</p>
                <GrFormSubtract className='mx-auto cursor-pointer' onClick={() => setNPCLTMA(NPCLTMA - 1)} />
            </div>
            <p className='pt-2 text-xs font-medium text-left'>Number of periods for calculation of Signal Line</p>
            <div className='grid items-center w-full grid-cols-7 border border-[#CDCDCD] rounded bg-[#F4F9FF]'>
                <GrFormAdd className='mx-auto cursor-pointer' onClick={() => setNPCSL(NPCSL + 1)}/>
                <p className='col-span-5 py-1 border-l border-r'>{NPCSL}</p>
                <GrFormSubtract className='mx-auto cursor-pointer' onClick={() => setNPCSL(NPCSL - 1)} />
            </div>
            <p className='pt-2 text-xs font-medium'>Histogram Color</p>
            <div className='grid items-center justify-center w-full grid-cols-7'>
                <div className='bg-[#56B786] w-[24px] h-[22px] mx-auto'></div>
                <input type="number" className='text-right bg-transparent outline-none border border-[#CDCDCD] rounded' min={1} max={99} step={1} defaultValue={fxData.maco.histogramColor || 1} onChange={(e) => setHistogramColor(parseInt(e.target.value))} />
                <span>px</span>
                {/* <p className='col-span-6 py-1 pl-4 text-left border border-[#CDCDCD] rounded'>1 px</p> */}
            </div>
        </div>
        <button className='w-[208px] bg-[#5290F7] text-sm font-semibold rounded text-white py-4 self-end' onClick={setMacoFn}>ADD MACO</button>
    </div>
  )
}

export default ChartFXMaco