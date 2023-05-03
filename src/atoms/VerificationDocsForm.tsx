import React from 'react'
import {AiOutlineFileAdd} from 'react-icons/ai'
import DragDropFile from './DragDropFile'

const VerificationDocsForm = ({ errors, control, register, isFormSubmitted, setIsFormSubmitted }: { errors: any, control: any, register: any, isFormSubmitted: boolean, setIsFormSubmitted: any }) => {

    return (
      <div className='flex flex-col items-start justify-between w-full space-y-3'>
          <h2 className='text-[#52c2e4] text-xl font-bold pb-2'>Verification Documents</h2>
          <div className='flex items-center justify-start space-x-8 sm:px-24 sm:justify-between sm:w-2/3 sm:max-w-2xl'>
              <div className='flex flex-col items-start justify-between'>
                  <p className='font-semibold'>Aadhaar Card</p>
                  <div className='flex flex-col items-center justify-between border border-black rounded-lg w-[150px] p-2'>
                      <DragDropFile errors={errors} control={control} name='aadhaarCard' register={register} isFormSubmitted={isFormSubmitted} setIsFormSubmitted={setIsFormSubmitted} />
                  </div>
              </div>
              <div className='flex flex-col items-start justify-between'>
                  <p className='font-semibold'>Passport</p>
                  <div className='flex flex-col items-center justify-between border border-black rounded-lg w-[150px] p-2'>
                      <DragDropFile errors={errors} control={control} name='passport' register={register} isFormSubmitted={isFormSubmitted} setIsFormSubmitted={setIsFormSubmitted} />
                  </div>
              </div>
          </div>
      </div>
    )
  }

export default VerificationDocsForm