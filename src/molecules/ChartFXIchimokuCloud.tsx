import React, {useState, useEffect} from 'react'
import {GrFormAdd, GrFormSubtract} from 'react-icons/gr'

interface Props {
    fxData: {[key: string]: any};
    setfxData: any;
    // setfxData: React.Dispatch<React.SetStateAction<{[key: string]: any}>>;
}

const ChartFXIchimokuCloud: React.FC<Props> = ({ fxData, setfxData }) => {

    const [ CP, setCP ] = useState<number>(fxData.ichimokuCloud.CP)
    const [ BP, setBP ] = useState<number>(fxData.ichimokuCloud.BP)
    const [ SP, setSP ] = useState<number>(fxData.ichimokuCloud.SP)
    const [ displacement, setDisplacement ] = useState<number>(fxData.ichimokuCloud.displacement)

    const [ichimokuCloud, setIchimokuCloud] = useState({CP: CP, BP: BP, SP: SP, displacement: displacement})

    const setIchimokuCloudFn = () => {
        setIchimokuCloud({...ichimokuCloud, CP: CP, BP: BP, SP: SP, displacement: displacement})
    }
    
    useEffect(() => {
        setfxData({...fxData, ichimokuCloud})
    }, [ichimokuCloud])
    
  return (
    <div className='flex flex-col items-start justify-between w-full h-full px-2 py-4 space-y-8'>
        <div className='flex flex-col items-start justify-between w-full text-center'>
            <p className='text-xs font-medium'>Conversion Period</p>
            <div className='grid items-center w-full grid-cols-7 border border-[#CDCDCD] rounded bg-[#F4F9FF]'>
                <GrFormAdd className='mx-auto cursor-pointer' onClick={() => setCP(CP! + 1)}/>
                <p className='col-span-5 py-1 border-l border-r'>{CP}</p>
                <GrFormSubtract className='mx-auto cursor-pointer' onClick={() => setCP(CP! - 1)} />
            </div>
            <p className='pt-2 text-xs font-medium'>Base Period</p>
            <div className='grid items-center w-full grid-cols-7 border border-[#CDCDCD] rounded bg-[#F4F9FF]'>
                <GrFormAdd className='mx-auto cursor-pointer' onClick={() => setBP(BP! + 1)}/>
                <p className='col-span-5 py-1 border-l border-r'>{BP}</p>
                <GrFormSubtract className='mx-auto cursor-pointer' onClick={() => setBP(BP! - 1)} />
            </div>
            <p className='pt-2 text-xs font-medium'>Span Period</p>
            <div className='grid items-center w-full grid-cols-7 border border-[#CDCDCD] rounded bg-[#F4F9FF]'>
                <GrFormAdd className='mx-auto cursor-pointer' onClick={() => setSP(SP! + 1)}/>
                <p className='col-span-5 py-1 border-l border-r'>{SP}</p>
                <GrFormSubtract className='mx-auto cursor-pointer' onClick={() => setSP(SP! - 1)} />
            </div>
            <p className='pt-2 text-xs font-medium'>Displacement</p>
            <div className='grid items-center w-full grid-cols-7 border border-[#CDCDCD] rounded bg-[#F4F9FF]'>
                <GrFormAdd className='mx-auto cursor-pointer' onClick={() => setDisplacement(displacement! + 1)}/>
                <p className='col-span-5 py-1 border-l border-r'>{displacement}</p>
                <GrFormSubtract className='mx-auto cursor-pointer' onClick={() => setDisplacement(displacement! - 1)} />
            </div>
        </div>
        <button className='w-[208px] bg-[#5290F7] text-sm font-semibold rounded text-white py-4 self-end' onClick={setIchimokuCloudFn}>ADD ICHIMOKU CLOUD</button>
    </div>
  )
}

export default ChartFXIchimokuCloud