import React, {useState, useEffect} from 'react'
import {GrFormAdd, GrFormSubtract} from 'react-icons/gr'

interface Props {
    fxData: {[key: string]: any};
    setfxData: any;
    // setfxData: React.Dispatch<React.SetStateAction<{[key: string]: any}>>;
}

const ChartFXBollingerBands: React.FC<Props> = ({ fxData, setfxData }) => {

    const [ NPCI, setNPCI ] = useState<number>(fxData.bollingerBands.NPCI)
    const [ SDM, setSDM ] = useState<number>(fxData.bollingerBands.SDM)
    const [ color1, setColor1 ] = useState<number>(fxData.bollingerBands.color1)
    const [ color2, setColor2 ] = useState<number>(fxData.bollingerBands.color2)
    const [ color3, setColor3 ] = useState<number>(fxData.bollingerBands.color3)

    const [bollingerBands, setBollingerBands] = useState({NPCI: NPCI, SDM: SDM, color1: color1, color2: color2, color3: color3})

    const setBollingerBandsFn = () => {
        setBollingerBands({...bollingerBands, NPCI: NPCI, SDM: SDM, color1: color1, color2: color2, color3: color3})
    }
    
    useEffect(() => {
        setfxData({...fxData, bollingerBands})
    }, [bollingerBands])

  return (
    <div className='flex flex-col items-start justify-between w-full h-full px-2 py-4 space-y-8'>
        <div className='flex flex-col items-start justify-between w-full text-center'>
            <p className='text-xs font-medium'>Number of periods for calculation of the indicator</p>
            <div className='grid items-center w-full grid-cols-7 border border-[#CDCDCD] rounded bg-[#F4F9FF]'>
                <GrFormAdd className='mx-auto cursor-pointer' onClick={() => setNPCI(NPCI! + 1)}/>
                <p className='col-span-5 py-1 border-l border-r'>{NPCI}</p>
                <GrFormSubtract className='mx-auto cursor-pointer' onClick={() => setNPCI(NPCI! - 1)} />
            </div>
            <p className='pt-2 text-xs font-medium'>Standard deviations multiplier</p>
            <div className='grid items-center w-full grid-cols-7 border border-[#CDCDCD] rounded bg-[#F4F9FF]'>
                <GrFormAdd className='mx-auto cursor-pointer' onClick={() => setSDM(SDM! + 1)}/>
                <p className='col-span-5 py-1 border-l border-r'>{SDM}</p>
                <GrFormSubtract className='mx-auto cursor-pointer' onClick={() => setSDM(SDM! - 1)} />
            </div>
            <p className='pt-2 text-xs font-medium'>Color</p>
            <div className='grid items-center justify-center w-full grid-cols-7'>
                <div className='bg-[#EB5757] w-[24px] h-[22px] mx-auto'></div>
                <input type="number" className='text-right bg-transparent outline-none' min={1} max={99} step={1} defaultValue={fxData.bollingerBands.color1 || 1} onChange={(e) => setColor1(parseInt(e.target.value))} />
                <span>px</span>
                {/* <p className='col-span-6 py-1 pl-4 text-left border border-[#CDCDCD] rounded'>1 px</p> */}
            </div>
            <p className='pt-2 text-xs font-medium'>Color</p>
            <div className='grid items-center justify-center w-full grid-cols-7'>
                <div className='bg-[#56B786] w-[24px] h-[22px] mx-auto'></div>
                <input type="number" className='text-right bg-transparent outline-none' min={1} max={99} step={1} defaultValue={fxData.bollingerBands.color2 || 1} onChange={(e) => setColor2(parseInt(e.target.value))} />
                <span>px</span>
                {/* <p className='col-span-6 py-1 pl-4 text-left border border-[#CDCDCD] rounded'>1 px</p> */}
            </div>
            <p className='pt-2 text-xs font-medium'>Color</p>
            <div className='grid items-center justify-center w-full grid-cols-7'>
                <div className='bg-[#56B786] w-[24px] h-[22px] mx-auto'></div>
                <input type="number" className='text-right bg-transparent outline-none' min={1} max={99} step={1} defaultValue={fxData.bollingerBands.color3 || 1} onChange={(e) => setColor3(parseInt(e.target.value))} />
                <span>px</span>
                {/* <p className='col-span-6 py-1 pl-4 text-left border border-[#CDCDCD] rounded'>1 px</p> */}
            </div>
        </div>
        <button className='w-[208px] bg-[#5290F7] text-sm font-semibold rounded text-white py-4 self-end' onClick={setBollingerBandsFn}>ADD BOLLINGER BANDS</button>
    </div>
  )
}

export default ChartFXBollingerBands