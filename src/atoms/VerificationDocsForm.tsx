import React from 'react'
import {AiOutlineFileAdd} from 'react-icons/ai'
import DragDropFile from './DragDropFile'

const VerificationDocsForm = () => {
  return (
    <div className='flex flex-col items-start justify-between w-full space-y-3'>
        <h2 className='text-[#52c2e4] text-xl font-bold pb-2'>Verification Documents</h2>
        <div className='flex items-center justify-start space-x-8 sm:px-24 sm:justify-between sm:w-2/3 sm:max-w-2xl'>
            <div className='flex flex-col items-start justify-between'>
                <p className='font-semibold'>Aadhaar Card</p>
                <div className='flex flex-col items-center justify-between border border-black rounded-lg w-[150px] p-2'>
                    {/* <AiOutlineFileAdd size={50} /> */}
                    {/* <p className='text-center'>Drag & drop to upload document</p> */}
                    <DragDropFile />
                </div>
                {/* <input className='pt-2' type="file" accept='image/*, .pdf' /> */}
                <p className='pt-4 text-xs font-semibold'>*Document required</p>
            </div>
            <div className='flex flex-col items-start justify-between'>
                <p className='font-semibold'>Passport</p>
                <div className='flex flex-col items-center justify-between border border-black rounded-lg w-[150px] p-2'>
                    {/* <AiOutlineFileAdd size={50} />
                    <p className='text-center'>Drag & drop to upload document</p> */}
                    <DragDropFile />
                </div>
                {/* <input className='pt-2' type="file" accept='image/*, .pdf' /> */}
                <p className='pt-4 text-xs font-semibold'>*Document required</p>
            </div>
        </div>
    </div>
  )
}

export default VerificationDocsForm