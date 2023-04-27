import React, {useState, useEffect} from 'react'
import {GrFormAdd, GrFormSubtract} from 'react-icons/gr'

interface Props {
    fxData: {[key: string]: any};
    setfxData: React.Dispatch<React.SetStateAction<{[key: string]: any}>>;
}

const ChartFXAvgDirectional: React.FC<Props> = ({ fxData, setfxData }) => {

    const [ NPCI, setNPCI ] = useState(14)
    const [ PDI, setPDI ] = useState('1')
    const [ ADI, setADI ] = useState('1')
    const [ NDI, setNDI ] = useState('1')

    const [avgDirectionalData, setAvgDirectionalData] = useState({})

    const setAvgDirectional = () => {
        setAvgDirectionalData({...avgDirectionalData, NPCI: NPCI, PDI: `${PDI} px`, ADI: `${ADI} px`, NDI: `${NDI} px`})
    }
    
    useEffect(() => {
        setfxData({...fxData, avgDirectionalData})
    }, [avgDirectionalData])


    return (
    <div className='flex flex-col items-start justify-between w-full h-full px-2 py-4 space-y-8'>
        <div className='flex flex-col items-start justify-between w-full text-center'>
            <p className='text-xs font-medium'>Number of periods for calculation of the indicator</p>
            <div className='grid items-center w-full grid-cols-7 border border-[#CDCDCD] rounded bg-[#F4F9FF]'>
                <GrFormAdd className='mx-auto cursor-pointer' onClick={() => setNPCI(NPCI + 1)}/>
                <p className='col-span-5 py-1 border-l border-r'>{NPCI}</p>
                <GrFormSubtract className='mx-auto cursor-pointer' onClick={() => setNPCI(NPCI - 1)} />
            </div>
            <p className='pt-2 text-xs font-medium'>Positive directional indicator</p>
            <div className='grid w-full grid-cols-7 items-center justify-center border border-[#CDCDCD] rounded'>
                <div className='bg-[#EB5757] w-[24px] h-[22px] mx-auto'></div>
                <input type="number" className='text-right bg-transparent outline-none' min={1} max={99} step={1} defaultValue={1} onChange={(e) => setPDI(e.target.value)} />
                <span>px</span>
                {/* <p className='col-span-6 py-1 pl-4 text-left border-l'>1 px</p> */}
            </div>
            <p className='pt-2 text-xs font-medium'>Average directional index</p>
            <div className='grid w-full grid-cols-7 items-center justify-center border border-[#CDCDCD] rounded'>
                <div className='bg-[#56B786] w-[24px] h-[22px] mx-auto'></div>
                <input type="number" className='text-right bg-transparent outline-none' min={1} max={99} step={1} defaultValue={1} onChange={(e) => setADI(e.target.value)} />
                <span>px</span>
                {/* <p className='col-span-6 py-1 pl-4 text-left border-l'>1 px</p> */}
            </div>
            <p className='pt-2 text-xs font-medium'>Negative directional index</p>
            <div className='grid w-full grid-cols-7 items-center justify-center border border-[#CDCDCD] rounded'>
                <div className='bg-[#93B1FE] w-[24px] h-[22px] mx-auto'></div>
                <input type="number" className='text-right bg-transparent outline-none' min={1} max={99} step={1} defaultValue={1} onChange={(e) => setNDI(e.target.value)} />
                <span>px</span>
                {/* <p className='col-span-6 py-1 pl-4 text-left border-l'>1 px</p> */}
            </div>
        </div>
        {/* {fxData.avgDirectionalData?.ADI && <p>{fxData.avgDirectionalData.ADI}</p>} */}
        <button className='w-[208px] bg-[#5290F7] text-sm font-semibold rounded text-white py-4 self-end' onClick={setAvgDirectional}>ADD AVERAGE DIRECTIONAL</button>
    </div>
  )
}

export default ChartFXAvgDirectional