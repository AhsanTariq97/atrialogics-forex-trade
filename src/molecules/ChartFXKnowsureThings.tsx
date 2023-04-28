import React, {useState, useEffect} from 'react'
import {GrFormAdd, GrFormSubtract} from 'react-icons/gr'

interface Props {
    fxData: {[key: string]: any};
    setfxData: any;
    // setfxData: React.Dispatch<React.SetStateAction<{[key: string]: any}>>;
}

const ChartFXKnowsureThings: React.FC<Props> = ({ fxData, setfxData }) => {

    const [ ROC1, setROC1 ] = useState<number>(fxData.knowsureThings.ROC1)
    const [ ROC2, setROC2 ] = useState<number>(fxData.knowsureThings.ROC2)
    const [ ROC3, setROC3 ] = useState<number>(fxData.knowsureThings.ROC3)
    const [ ROC4, setROC4 ] = useState<number>(fxData.knowsureThings.ROC4)
    const [ ROC5, setROC5 ] = useState<number>(fxData.knowsureThings.ROC5)

    const [knowsureThings, setKnowsureThings] = useState({ROC1: ROC1, ROC2: ROC2, ROC3: ROC3, ROC4: ROC4, ROC5: ROC5})

    const setKnowsureThingsFn = () => {
        setKnowsureThings({...knowsureThings, ROC1: ROC1, ROC2: ROC2, ROC3: ROC3, ROC4: ROC4, ROC5: ROC5})
    }
    
    useEffect(() => {
        setfxData({...fxData, knowsureThings})
    }, [knowsureThings])
    
  return (
    <div className='flex flex-col items-start justify-between w-full h-full px-2 py-4 space-y-8'>
        <div className='flex flex-col items-start justify-between w-full text-center'>
            <p className='text-xs font-medium'>ROC Length # 1</p>
            <div className='grid items-center w-full grid-cols-7 border border-[#CDCDCD] rounded bg-[#F4F9FF]'>
                <GrFormAdd className='mx-auto cursor-pointer' onClick={() => setROC1(ROC1! + 1)}/>
                <p className='col-span-5 py-1 border-l border-r'>{ROC1}</p>
                <GrFormSubtract className='mx-auto cursor-pointer' onClick={() => setROC1(ROC1! - 1)} />
            </div>
            <p className='pt-2 text-xs font-medium'>ROC Length # 2</p>
            <div className='grid items-center w-full grid-cols-7 border border-[#CDCDCD] rounded bg-[#F4F9FF]'>
                <GrFormAdd className='mx-auto cursor-pointer' onClick={() => setROC2(ROC2! + 1)}/>
                <p className='col-span-5 py-1 border-l border-r'>{ROC2}</p>
                <GrFormSubtract className='mx-auto cursor-pointer' onClick={() => setROC2(ROC2! - 1)} />
            </div>
            <p className='pt-2 text-xs font-medium'>ROC Length # 3</p>
            <div className='grid items-center w-full grid-cols-7 border border-[#CDCDCD] rounded bg-[#F4F9FF]'>
                <GrFormAdd className='mx-auto cursor-pointer' onClick={() => setROC3(ROC3! + 1)}/>
                <p className='col-span-5 py-1 border-l border-r'>{ROC3}</p>
                <GrFormSubtract className='mx-auto cursor-pointer' onClick={() => setROC3(ROC3! - 1)} />
            </div>
            <p className='pt-2 text-xs font-medium'>ROC Length # 4</p>
            <div className='grid items-center w-full grid-cols-7 border border-[#CDCDCD] rounded bg-[#F4F9FF]'>
                <GrFormAdd className='mx-auto cursor-pointer' onClick={() => setROC4(ROC4! + 1)}/>
                <p className='col-span-5 py-1 border-l border-r'>{ROC4}</p>
                <GrFormSubtract className='mx-auto cursor-pointer' onClick={() => setROC4(ROC4! - 1)} />
            </div>
            <p className='pt-2 text-xs font-medium'>ROC Length # 5</p>
            <div className='grid items-center w-full grid-cols-7 border border-[#CDCDCD] rounded bg-[#F4F9FF]'>
                <GrFormAdd className='mx-auto cursor-pointer' onClick={() => setROC5(ROC5! + 1)}/>
                <p className='col-span-5 py-1 border-l border-r'>{ROC5}</p>
                <GrFormSubtract className='mx-auto cursor-pointer' onClick={() => setROC5(ROC5! - 1)} />
            </div>
        </div>
        <button className='w-[208px] bg-[#5290F7] text-sm font-semibold rounded text-white py-4 self-end' onClick={setKnowsureThingsFn}>ADD KNOWSURE THINGS</button>
    </div>
  )
}

export default ChartFXKnowsureThings