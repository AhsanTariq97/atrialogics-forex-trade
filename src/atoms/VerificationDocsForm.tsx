import React from 'react'
import DragDropFile from './DragDropFile'

const VerificationDocsForm = ({ retrievedData, isFormSubmitted, setIsFormSubmitted }: { retrievedData: any, isFormSubmitted: boolean, setIsFormSubmitted: any }) => {

    return (
      <div className='flex flex-col items-start justify-between w-full space-y-3'>
          <h2 className='text-[#52c2e4] text-xl font-bold pb-2'>Verification Documents</h2>
          <div className='flex flex-col items-center justify-start w-full space-y-8 xs:space-y-0 xs:space-x-8 xs:flex-row sm:px-24 sm:justify-between sm:w-2/3 sm:max-w-2xl'>
              <div className='flex flex-col items-start justify-between'>
                  <p className='font-semibold'>Aadhaar Card</p>
                  <div className='flex flex-col items-center justify-between border border-black rounded-lg w-[150px]'>
                        <DragDropFile name='aadhaarCard' retrievedData={retrievedData} isFormSubmitted={isFormSubmitted} setIsFormSubmitted={setIsFormSubmitted} />
                  </div>
              </div>
              <div className='flex flex-col items-start justify-between'>
                  <p className='font-semibold'>Passport</p>
                  <div className='flex flex-col items-center justify-between border border-black rounded-lg w-[150px]'>
                        <DragDropFile name='passport' retrievedData={retrievedData} isFormSubmitted={isFormSubmitted} setIsFormSubmitted={setIsFormSubmitted} />
                  </div>
              </div>
          </div>
      </div>
    )
  }

export default VerificationDocsForm
