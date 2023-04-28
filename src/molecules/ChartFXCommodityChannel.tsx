import React, {useState, useEffect} from 'react'
import {GrFormAdd, GrFormSubtract} from 'react-icons/gr'

interface Props {
    fxData: {[key: string]: any};
    setfxData: any;
    // setfxData: React.Dispatch<React.SetStateAction<{[key: string]: any}>>;
}

const ChartFXCommodityChannel: React.FC<Props> = ({ fxData, setfxData }) => {

    const [ NPCI, setNPCI ] = useState<number>(fxData.commodityChannel.NPCI)
    const [ color1, setColor1 ] = useState<number>(fxData.commodityChannel.color1)
    const [ color2, setColor2 ] = useState<number>(fxData.commodityChannel.color2)

    const [commodityChannel, setCommodityChannel] = useState({NPCI: NPCI, color1: color1, color2: color2})

    const setCommodityChannelFn = () => {
        setCommodityChannel({...commodityChannel, NPCI: NPCI, color1: color1, color2: color2})
    }
    
    useEffect(() => {
        setfxData({...fxData, commodityChannel})
    }, [commodityChannel])

  return (
    <div className='flex flex-col items-start justify-between w-full h-full px-2 py-4 space-y-8'>
        <div className='flex flex-col items-start justify-between w-full text-center'>
            <p className='text-xs font-medium'>Number of periods for calculation of the indicator</p>
            <div className='grid items-center w-full grid-cols-7 border border-[#CDCDCD] rounded bg-[#F4F9FF]'>
                <GrFormAdd className='mx-auto cursor-pointer' onClick={() => setNPCI(NPCI! + 1)}/>
                <p className='col-span-5 py-1 border-l border-r'>{NPCI}</p>
                <GrFormSubtract className='mx-auto cursor-pointer' onClick={() => setNPCI(NPCI! - 1)} />
            </div>
            <p className='pt-2 text-xs font-medium'>Color</p>
            <div className='grid w-full grid-cols-7 items-center justify-center border border-[#CDCDCD] rounded'>
                <div className='bg-[#355881] w-[24px] h-[22px] mx-auto'></div>
                <input type="number" className='text-right bg-transparent outline-none' min={1} max={99} step={1} defaultValue={fxData.commodityChannel.color1 || 1} onChange={(e) => setColor1(parseInt(e.target.value))} />
                <span>px</span>
                {/* <p className='col-span-6 py-1 pl-4 text-left border-l'>1 px</p> */}
            </div>
            <p className='pt-2 text-xs font-medium'>Color</p>
            <div className='grid w-full grid-cols-7 items-center justify-center border border-[#CDCDCD] rounded'>
                <div className='bg-[#2F80ED] w-[24px] h-[22px] mx-auto'></div>
                <input type="number" className='text-right bg-transparent outline-none' min={1} max={99} step={1} defaultValue={fxData.commodityChannel.color2 || 1} onChange={(e) => setColor2(parseInt(e.target.value))} />
                <span>px</span>
                {/* <p className='col-span-6 py-1 pl-4 text-left border-l'>1 px</p> */}
            </div>
        </div>
        <button className='w-[208px] bg-[#5290F7] text-sm font-semibold rounded text-white py-4 self-end' onClick={setCommodityChannelFn}>ADD COMMODITY CHANNEL</button>
    </div>
  )
}

export default ChartFXCommodityChannel