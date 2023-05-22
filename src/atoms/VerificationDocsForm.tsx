import React, { useEffect, useState } from 'react'
import Dropzone from 'react-dropzone';
import { Controller, useFormContext } from "react-hook-form"


const VerificationDocsForm = ({ retrievedData, isFormSubmitted, setIsFormSubmitted }: { retrievedData: any, isFormSubmitted: boolean, setIsFormSubmitted: any }) => {

    const { setValue, control } = useFormContext()

    useEffect(() => {
        if (isFormSubmitted) {
            setIsFormSubmitted(false)
        }
    }, [isFormSubmitted]);

    useEffect(() => {
        if (retrievedData) {
          setValue('aadhaarCard', retrievedData.aadhaarCard);
          setValue('passport', retrievedData.passport);
        }
    }, [retrievedData, setValue]);

    return (
      <div className='flex flex-col items-start justify-between w-full space-y-3'>
          <h2 className='text-[#52c2e4] text-xl font-bold pb-2'>Verification Documents</h2>
          <div className='flex flex-col items-center justify-start w-full space-y-8 xs:space-y-0 xs:space-x-8 xs:flex-row sm:px-24 sm:justify-between sm:w-2/3 sm:max-w-2xl'>
              <div className='flex flex-col items-start justify-between'>
                  <p className='font-semibold'>Aadhaar Card</p>
                  <div className='flex flex-col items-center justify-between border border-black rounded-lg w-[150px]'>
                        <div className='relative p-2 h-40 w-[28rem] max-w-full text-center'>
                            <Controller
                            control={control}
                            name='aadhaarCard'
                            defaultValue={retrievedData ? retrievedData.aadhaarCard : ''}
                            rules={{
                                required: { value: true, message: 'Upload file here (only JPG, PNG or PDF)' },
                            }}
                            render={({ field: { onChange, onBlur }, fieldState }) => (
                                <Dropzone noClick 
                                accept={{"image/jpeg":[], 'application/pdf':[]}}
                                onDrop={(acceptedFiles) => {
                                    console.log('acceptedFiles', acceptedFiles)
                                    setValue('aadhaarCard', acceptedFiles)
                                }} 
                                >
                                {({ getRootProps, getInputProps, acceptedFiles, open, isDragActive }) => (
                                    <div className={`border-dashed w-full h-full ${isDragActive ? 'bg-[#808080]' : 'bg-transprent' }`} {...getRootProps()} >
                                        <input {...getInputProps({ id: 'spreadsheet', onChange, onBlur, })} />
                                        <button type="button" onClick={open} className='flex items-center justify-center w-full h-full'>
                                            {!acceptedFiles.length ? <p><span className='cursor-pointer hover:underline'>Choose a file</span><br />or drag and drop</p>
                                            : <p className='w-full break-words'>{acceptedFiles[0].name}</p> }
                                            {/* {<p><span className='cursor-pointer hover:underline'>Choose a file</span><br />or drag and drop</p>} */}
                                        </button>
                                        <div>
                                            <p className={`absolute -bottom-8 text-xs font-semibold ${fieldState.error && 'text-red-600'}`}>{fieldState.error ? fieldState.error.message : '*Document required'}</p>
                                        </div>
                                    </div>)}
                                </Dropzone>
                            )}
                            />
                        </div>
                  </div>
              </div>
              <div className='flex flex-col items-start justify-between'>
                  <p className='font-semibold'>Passport</p>
                  <div className='flex flex-col items-center justify-between border border-black rounded-lg w-[150px]'>
                        <div className='relative p-2 h-40 w-[28rem] max-w-full text-center'>
                            <Controller
                            control={control}
                            name='passport'
                            defaultValue={retrievedData ? retrievedData.passport : ''}
                            rules={{
                                required: { value: true, message: 'Upload file here (only JPG, PNG or PDF)' },
                            }}
                            render={({ field: { onChange, onBlur }, fieldState }) => (
                                <Dropzone noClick 
                                accept={{"image/jpeg":[], 'application/pdf':[]}}
                                onDrop={(acceptedFiles) => {
                                    setValue('passport', acceptedFiles)
                                    console.log('acceptedFiles', acceptedFiles)
                                }} 
                                >
                                {({ getRootProps, getInputProps, acceptedFiles, open, isDragActive }) => (
                                    <div className={`border-dashed w-full h-full ${isDragActive ? 'bg-[#808080]' : 'bg-transprent' }`} {...getRootProps()} >
                                        <input {...getInputProps({ id: 'spreadsheet', onChange, onBlur, })} />
                                        <button type="button" onClick={open} className='flex items-center justify-center w-full h-full'>
                                            {!acceptedFiles.length ? <p><span className='cursor-pointer hover:underline'>Choose a file</span><br />or drag and drop</p>
                                            : <p className='w-full break-words'>{acceptedFiles[0].name}</p> }
                                            {/* {<p><span className='cursor-pointer hover:underline'>Choose a file</span><br />or drag and drop</p>} */}
                                        </button>
                                        <div>
                                            <p className={`absolute -bottom-8 text-xs font-semibold ${fieldState.error && 'text-red-600'}`}>{fieldState.error ? fieldState.error.message : '*Document required'}</p>
                                        </div>
                                    </div>)}
                                </Dropzone>
                            )}
                            />
                        </div>
                  </div>
              </div>
          </div>
      </div>
    )
  }

export default VerificationDocsForm
