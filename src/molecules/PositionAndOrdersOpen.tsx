import React, {useState, useEffect, useContext} from 'react'
import { TbArrowsSort } from 'react-icons/tb'
import { FaSortDown } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'

import { ChartStoreContext } from '../utils/chartStore'

const PositionAndOrdersPending = () => {

  const { apiData } = useContext(ChartStoreContext)
  
  const [isData, setIsData] = useState(true)
  const [tableData, setTableData] = useState([...apiData.results].reverse())

  const formattedDateTimeFn = (dateInMS: number) => {
    const date = new Date(dateInMS);
  
    const year = date.getFullYear(); 
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const day = String(date.getDate()).padStart(2, '0'); 
    const hours = String(date.getHours()).padStart(2, '0'); 
    const minutes = String(date.getMinutes()).padStart(2, '0'); 
    const seconds = String(date.getSeconds()).padStart(2, '0'); 
  
    const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    return formattedDateTime
  }

  const handleDelete = (index: number) => {
    const newData = [...tableData];
    newData.splice(index, 1);
    setTableData(newData);
    if (!newData.length) {
      setIsData(false)
    }
  };

  const handleDeleteAll = () => {
    setTableData([])
    setIsData(false)
  }

  return (
    <div className='bg-[#F4F8FD] max-h-80 overflow-auto'>
      {isData ? <table className='w-full h-full'>
        <thead className='text-[10px] font-medium'>
          <tr className='border border-[#D9D9D9]'>
            <th className='py-1.5 rounded-l-2xl'><div className='flex items-center justify-center space-x-1'><p>ID</p><TbArrowsSort/></div></th>
            <th className='py-1.5'><div className='flex items-center justify-center space-x-1'><p>SYMBOL</p><TbArrowsSort/></div></th>
            <th className='py-1.5'><div className='flex items-center justify-center space-x-1'><p>OPEN TIME</p><TbArrowsSort/></div></th>
            <th className='py-1.5'><div className='flex items-center justify-center space-x-1'><p>VOLUME</p><TbArrowsSort/></div></th>
            <th className='py-1.5'><div className='flex items-center justify-center space-x-1'><p>SIDE</p><TbArrowsSort/></div></th>
            <th className='py-1.5'><div className='flex items-center justify-center space-x-1'><p>OPEN PRICE</p><TbArrowsSort/></div></th>
            <th className='py-1.5'><div className='flex items-center justify-center space-x-1'><p>CURRENT PRICE</p><TbArrowsSort/></div></th>
            <th className='py-1.5'><div className='flex items-center justify-center space-x-1'><p>STOP LOSS</p><TbArrowsSort/></div></th>
            <th className='py-1.5'><div className='flex items-center justify-center space-x-1'><p>TAKE PROFIT</p><TbArrowsSort/></div></th>
            <th className='py-1.5'><div className='flex items-center justify-center space-x-1'><p>SWAP</p><TbArrowsSort/></div></th>
            <th className='py-1.5'><div className='flex items-center justify-center space-x-1'><p>COMISSION</p><TbArrowsSort/></div></th>
            <th className='py-1.5'><div className='flex items-center justify-center space-x-1'><p>NET PROFIT</p><TbArrowsSort/></div></th>
            <th className='py-1.5 px-1'><div className='flex items-center justify-center space-x-1 border border-[#D9D9D9] rounded-sm' onClick={handleDeleteAll}><p>SELECT ALL</p><FaSortDown/></div></th>
          </tr>
        </thead>
        <tbody className='text-xs font-medium'>
          {tableData.map((entry: any, index: number) => {
            return (
              <tr key={index} className='border border-[#D9D9D9]'>
                <td className='py-1.5 text-center rounded-l-2xl'>W1680201139157</td>
                <td className='text-center'>{apiData?.ticker.slice(2)}</td>
                <td className='text-center'>{formattedDateTimeFn(entry.t)}</td>
                <td className='text-center'>{entry.vw}</td>
                <td className='text-center'><p className='border border-[#EF4444] text-[#EF4444] bg-[#FFDFDF] rounded-sm w-max mx-auto px-1 font-medium'>Sell</p></td>
                <td className='text-center'>{entry.o}</td>
                <td className='text-center'>{entry.c}</td>
                <td className='text-center'>0.00000</td>
                <td className='text-center'>0.00000</td>
                <td className='text-center text-[#10B981]'>0.04</td>
                <td className='text-center'>0.04</td>
                <td className='text-center text-[#10B981]'>2.95</td>
                <td className='flex items-center justify-center'>
                  <button className='p-1 mx-auto border border-[#D9D9D9] rounded cursor-pointer' onClick={() => handleDelete(index)}><IoMdClose width={12} height={12}/></button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      : <div className='flex flex-col items-center justify-between py-12'>
          <h1 className='text-3xl font-semibold'>NO RESULTS</h1>
          <p className='text-sm font-medium'>YOU DO NOT HAVE AN OPEN POSITION</p>
      </div>}
    </div>
  )
}

export default PositionAndOrdersPending