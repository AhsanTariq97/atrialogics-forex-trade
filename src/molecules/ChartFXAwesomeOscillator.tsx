import React, {useState, useEffect} from 'react'
import {GrFormAdd, GrFormSubtract} from 'react-icons/gr'

interface Props {
    fxData: {[key: string]: any};
    setfxData: any;
    // setfxData: React.Dispatch<React.SetStateAction<{[key: string]: any}>>;
}

const ChartFXAwesomeOscillator: React.FC<Props> = ({ fxData, setfxData }) => {

    const [ NPCSTMA, setNPCSTMA ] = useState(14)
    const [ NPCLTMA, setNPCLTMA ] = useState(14)
    const [ color1, setColor1 ] = useState('1')
    const [ color2, setColor2 ] = useState('1')

    const [awesomeOscillatorData, setAwesomeOscillatorData] = useState({})

    const setAwesomeOscillator = () => {
        setAwesomeOscillatorData({...awesomeOscillatorData, NPCSTMA: NPCSTMA, NPCLTMA: NPCLTMA, color1: `${color1} px`, color2: `${color2} px`})
    }
    
    useEffect(() => {
        setfxData({...fxData, awesomeOscillatorData})
    }, [awesomeOscillatorData])
    
  return (
    <div className='flex flex-col items-start justify-between w-full h-full px-2 py-4 space-y-8'>
        <div className='flex flex-col items-start justify-between w-full text-center'>
            <p className='text-xs font-medium text-left'>Number of periods for calculation of Short Term Moving Average</p>
            <div className='grid items-center w-full grid-cols-7 border border-[#CDCDCD] rounded bg-[#F4F9FF]'>
                <GrFormAdd className='mx-auto cursor-pointer' onClick={() => setNPCSTMA(NPCSTMA + 1)}/>
                <p className='col-span-5 py-1 border-l border-r'>{NPCSTMA}</p>
                <GrFormSubtract className='mx-auto cursor-pointer' onClick={() => setNPCSTMA(NPCSTMA - 1)} />
            </div>
            <p className='pt-2 text-xs font-medium text-left'>Number of periods for calculation of Long Term Moving Average</p>
            <div className='grid items-center w-full grid-cols-7 border border-[#CDCDCD] rounded bg-[#F4F9FF]'>
                <GrFormAdd className='mx-auto cursor-pointer' onClick={() => setNPCLTMA(NPCLTMA + 1)}/>
                <p className='col-span-5 py-1 border-l border-r'>{NPCLTMA}</p>
                <GrFormSubtract className='mx-auto cursor-pointer' onClick={() => setNPCLTMA(NPCLTMA - 1)} />
            </div>
            <p className='pt-2 text-xs font-medium'>Color</p>
            <div className='grid items-center justify-center w-full grid-cols-7'>
                <div className='bg-[#EB5757] w-[24px] h-[22px] mx-auto'></div>
                <input type="number" className='text-right bg-transparent outline-none border border-[#CDCDCD] rounded' min={1} max={99} step={1} defaultValue={1} onChange={(e) => setColor1(e.target.value)} />
                <span>px</span>
                {/* <p className='col-span-6 py-1 pl-4 text-left border border-[#CDCDCD] rounded'>1 px</p> */}
            </div>
            <p className='pt-2 text-xs font-medium'>Color</p>
            <div className='grid items-center justify-center w-full grid-cols-7'>
                <div className='bg-[#56B786] w-[24px] h-[22px] mx-auto'></div>
                <input type="number" className='text-right bg-transparent outline-none border border-[#CDCDCD] rounded' min={1} max={99} step={1} defaultValue={1} onChange={(e) => setColor2(e.target.value)} />
                <span>px</span>
                {/* <p className='col-span-6 py-1 pl-4 text-left border border-[#CDCDCD] rounded'>1 px</p> */}
            </div>
        </div>
        <button className='w-[208px] bg-[#5290F7] text-sm font-semibold rounded text-white py-4 self-end' onClick={setAwesomeOscillator}>ADD AWESOME OSCILLATOR</button>
    </div>
  )
}

export default ChartFXAwesomeOscillator