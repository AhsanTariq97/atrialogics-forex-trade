import React, {useState} from 'react'
import ChartFXAvgDirectional from './ChartFXAvgDirectional'
import ChartFXAvgTrueRange from './ChartFXAvgTrueRange'
import ChartFXAwesomeOscillator from './ChartFXAwesomeOscillator'
import ChartFXBollingerBands from './ChartFXBollingerBands'
import ChartFXCommodityChannel from './ChartFXCommodityChannel'
import ChartFXIchimokuCloud from './ChartFXIchimokuCloud'
import ChartFXKnowsureThings from './ChartFXKnowsureThings'
import ChartFXMaco from './ChartFXMaco'
import ChartFXMomentum from './ChartFXMomentum'

const ChartFXPopup = () => {

  const [activeFXButton, setActiveFXButton] = useState('AVERAGE DIRECTIONAL')

  const onFXButtonClick = (e: any) => {
    setActiveFXButton(e.target.textContent)
  }

  return (
    <div className='absolute top-8 -translate-x-1/2 bg-[#F4F9FF] border border-[#D9D9D9] rounded w-[500px]'>
      <div className='flex flex-col items-start justify-start'>
          <h4 className='px-4 py-1 text-xs font-medium'>INDICATORS</h4>
          <div className='grid items-start w-full grid-cols-5 bg-[#FBFAFA]'>
              <div className='flex flex-col items-center justify-between h-full col-span-2 p-2 bg-white w-max'>
                  <button className={`text-sm font-medium px-3 py-2 rounded ${activeFXButton === 'AVERAGE DIRECTIONAL' && 'text-[#5290F7] border border-[#5290F7] bg-[#F4F9FF]'}`} onClick={onFXButtonClick}>AVERAGE DIRECTIONAL</button>
                  <button className={`text-sm font-medium px-3 py-2 rounded ${activeFXButton === 'AVERAGE TRUE RANGE' && 'text-[#5290F7] border border-[#5290F7] bg-[#F4F9FF]'}`} onClick={onFXButtonClick}>AVERAGE TRUE RANGE</button>
                  <button className={`text-sm font-medium px-3 py-2 rounded ${activeFXButton === 'AWESOME OSCILLATOR' && 'text-[#5290F7] border border-[#5290F7] bg-[#F4F9FF]'}`} onClick={onFXButtonClick}>AWESOME OSCILLATOR</button>
                  <button className={`text-sm font-medium px-3 py-2 rounded ${activeFXButton === 'BOLLINGER BANDS' && 'text-[#5290F7] border border-[#5290F7] bg-[#F4F9FF]'}`} onClick={onFXButtonClick}>BOLLINGER BANDS</button>
                  <button className={`text-sm font-medium px-3 py-2 rounded ${activeFXButton === 'COMMODITY CHANNEL' && 'text-[#5290F7] border border-[#5290F7] bg-[#F4F9FF]'}`} onClick={onFXButtonClick}>COMMODITY CHANNEL</button>
                  <button className={`text-sm font-medium px-3 py-2 rounded ${activeFXButton === 'ICHIMOKU CLOUD' && 'text-[#5290F7] border border-[#5290F7] bg-[#F4F9FF]'}`} onClick={onFXButtonClick}>ICHIMOKU CLOUD</button>
                  <button className={`text-sm font-medium px-3 py-2 rounded ${activeFXButton === 'KNOWSURE THINGS' && 'text-[#5290F7] border border-[#5290F7] bg-[#F4F9FF]'}`} onClick={onFXButtonClick}>KNOWSURE THINGS</button>
                  <button className={`text-sm font-medium px-3 py-2 rounded ${activeFXButton === 'MACO' && 'text-[#5290F7] border border-[#5290F7] bg-[#F4F9FF]'}`} onClick={onFXButtonClick}>MACO</button>
                  <button className={`text-sm font-medium px-3 py-2 rounded ${activeFXButton === 'MOMENTUM' && 'text-[#5290F7] border border-[#5290F7] bg-[#F4F9FF]'}`} onClick={onFXButtonClick}>MOMENTUM</button>
              </div>
              <div className='col-span-3 bg-[#FBFAFA] w-full h-full'>
                  {activeFXButton === 'AVERAGE DIRECTIONAL' && <ChartFXAvgDirectional />}
                  {activeFXButton === 'AVERAGE TRUE RANGE' && <ChartFXAvgTrueRange />}
                  {activeFXButton === 'AWESOME OSCILLATOR' && <ChartFXAwesomeOscillator />}
                  {activeFXButton === 'BOLLINGER BANDS' && <ChartFXBollingerBands />}
                  {activeFXButton === 'COMMODITY CHANNEL' && <ChartFXCommodityChannel />}
                  {activeFXButton === 'ICHIMOKU CLOUD' && <ChartFXIchimokuCloud />}
                  {activeFXButton === 'KNOWSURE THINGS' && <ChartFXKnowsureThings />}
                  {activeFXButton === 'MACO' && <ChartFXMaco />}
                  {activeFXButton === 'MOMENTUM' && <ChartFXMomentum />}
              </div>
          </div>
          <div className='bg-[#F1F1F1] h-5'></div>
      </div>
    </div>
  )
}

export default ChartFXPopup