import Link from 'next/link';
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

    // const handleFileUpload = (fieldName: string, acceptedFiles: any) => {
    //     const reader = new FileReader();
    
    //     reader.onloadend = () => {
    //       const base64Data = reader.result;
    //       setValue(fieldName, base64Data);
    //     };
    
    //     reader.readAsDataURL(acceptedFiles[0]);
    //   };

    return (
      <div className='flex flex-col items-start justify-between w-full space-y-3'>
          <h2 className='text-[#52c2e4] text-xl font-bold pb-2'>Verification Documents</h2>
          <div className='flex flex-col items-center justify-start w-full space-y-8 xs:space-y-0 xs:space-x-8 xs:flex-row sm:px-24 sm:justify-between sm:w-2/3 sm:max-w-2xl'>
              <div className='flex flex-col items-start justify-between'>
                  <p className='font-semibold'>Aadhaar Card</p>
                  <div className='flex flex-col items-center justify-between border border-black rounded-lg w-[250px]'>
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
                                    setValue('aadhaarCard', acceptedFiles[0])
                                    console.log('acceptedFiles', acceptedFiles)
                                }} 
                                >
                                {({ getRootProps, getInputProps, acceptedFiles, open, isDragActive }) => (
                                    <div className={`border-dashed w-full h-full ${isDragActive ? 'bg-[#808080]' : 'bg-transprent' }`} {...getRootProps()} >
                                        <input {...getInputProps({ id: 'spreadsheet', onChange, onBlur, })} />
                                        <button type="button" onClick={!acceptedFiles[0] && !retrievedData.aadhaarCard ? open : undefined} className='flex items-center justify-center w-full h-full'>
                                            {!acceptedFiles.length 
                                            ? (retrievedData && retrievedData.aadhaarCard
                                                ?
                                                <div className='flex flex-col justify-between w-full h-full'>
                                                    <p className='text-xs font-bold' onClick={open}>Click here to replace</p>
                                                    <Link href={retrievedData.aadhaarCard} target='_blank'><p className='w-full break-words'>{retrievedData.aadhaarCard}</p></Link>
                                                </div> 
                                                : 
                                                <p><span className='cursor-pointer hover:underline'>Choose a file</span><br />or drag and drop</p>
                                            )
                                            : <div className='flex flex-col justify-between w-full h-full'>
                                                <p className='text-xs font-bold' onClick={open}>Click here to replace</p>
                                                <span className='w-full break-words' onClick={() => window.open(URL.createObjectURL(acceptedFiles[0]), '_blank')}>
                                                    {acceptedFiles[0].name}
                                                </span> 
                                            </div>
                                            }
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
                  <div className='flex flex-col items-center justify-between border border-black rounded-lg w-[250px]'>
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
                                    setValue('passport', acceptedFiles[0])
                                    console.log('acceptedFiles', acceptedFiles)
                                }} 
                                >
                                {({ getRootProps, getInputProps, acceptedFiles, open, isDragActive }) => (
                                    <div className={`border-dashed w-full h-full ${isDragActive ? 'bg-[#808080]' : 'bg-transprent' }`} {...getRootProps()} >
                                        <input {...getInputProps({ id: 'spreadsheet', onChange, onBlur, })} />
                                        <button type="button" onClick={!acceptedFiles[0] && !retrievedData.aadhaarCard ? open : undefined} className='flex items-center justify-center w-full h-full'>
                                            {!acceptedFiles.length 
                                            ? (retrievedData && retrievedData.aadhaarCard
                                                ?
                                                <div className='flex flex-col justify-between w-full h-full'>
                                                    <p className='text-xs font-bold' onClick={open}>Click here to replace</p>
                                                    <Link href={retrievedData.passport} target='_blank'><p className='w-full break-words'>{retrievedData.passport}</p></Link>
                                                </div> 
                                                : 
                                                <p><span className='cursor-pointer hover:underline'>Choose a file</span><br />or drag and drop</p>
                                            )
                                            : <div className='flex flex-col justify-between w-full h-full'>
                                                <p className='text-xs font-bold' onClick={open}>Click here to replace</p>
                                                <span className='w-full break-words' onClick={() => window.open(URL.createObjectURL(acceptedFiles[0]), '_blank')}>
                                                    {acceptedFiles[0].name}
                                                </span> 
                                            </div>
                                            }
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
