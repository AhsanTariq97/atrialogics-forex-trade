import React from 'react'
import {AiOutlineFileAdd} from 'react-icons/ai'
import DragDropFile from './DragDropFile2'

const VerificationDocsForm = ({ isFormSubmitted, setIsFormSubmitted }: { isFormSubmitted: boolean, setIsFormSubmitted: any }) => {

    return (
      <div className='flex flex-col items-start justify-between w-full space-y-3'>
          <h2 className='text-[#52c2e4] text-xl font-bold pb-2'>Verification Documents</h2>
          <div className='flex items-center justify-start space-x-8 sm:px-24 sm:justify-between sm:w-2/3 sm:max-w-2xl'>
              <div className='flex flex-col items-start justify-between'>
                  <p className='font-semibold'>Aadhaar Card</p>
                  <div className='flex flex-col items-center justify-between border border-black rounded-lg w-[150px]'>
                      {/* <DragDropFile errors={errors} control={control} setValue={setValue} name='aadhaarCard' register={register} isFormSubmitted={isFormSubmitted} setIsFormSubmitted={setIsFormSubmitted} /> */}
                      {/* <DragDropFile accept="image/png, image/jpg, image/jpeg, image/gif"
                        name="aadhaarCard" isFormSubmitted={isFormSubmitted} setIsFormSubmitted={setIsFormSubmitted} /> */}
                        <DragDropFile name='aadhaarCard' isFormSubmitted={isFormSubmitted} setIsFormSubmitted={setIsFormSubmitted} />
                  </div>
              </div>
              <div className='flex flex-col items-start justify-between'>
                  <p className='font-semibold'>Passport</p>
                  <div className='flex flex-col items-center justify-between border border-black rounded-lg w-[150px]'>
                      {/* <DragDropFile errors={errors} control={control} setValue={setValue} name='passport' register={register} isFormSubmitted={isFormSubmitted} setIsFormSubmitted={setIsFormSubmitted} /> */}
                      {/* <DragDropFile accept="image/png, image/jpg, image/jpeg, image/gif"
                        name="passport" isFormSubmitted={isFormSubmitted} setIsFormSubmitted={setIsFormSubmitted} /> */}
                        <DragDropFile name='passport' isFormSubmitted={isFormSubmitted} setIsFormSubmitted={setIsFormSubmitted} />
                  </div>
              </div>
          </div>
      </div>
    )
  }

export default VerificationDocsForm