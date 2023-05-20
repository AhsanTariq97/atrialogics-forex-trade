import Dropzone, { useDropzone } from 'react-dropzone';
import { Controller, useFormContext } from "react-hook-form"
import React, {useState, useEffect} from 'react'

const DragDropFile = ({name, retrievedData, isFormSubmitted, setIsFormSubmitted}: {
  name: string, 
  retrievedData: any,
  isFormSubmitted: boolean, 
  setIsFormSubmitted: React.Dispatch<React.SetStateAction<boolean>>,
}) => {
  const { setValue, control } = useFormContext()

  const [wrongTypeErr, setWrongTypeErr] = useState<string>('')
  const [acceptedFiles, setAcceptedFiles] = useState<File[]>([])
  
  useEffect(() => {
    if (isFormSubmitted) {
      setAcceptedFiles([])
      setIsFormSubmitted(false)
    }
  }, [isFormSubmitted]);
  
  return (
    <div className='relative p-2 h-40 w-[28rem] max-w-full text-center'>
        <Controller
          control={control}
          name={name}
          defaultValue={retrievedData ? retrievedData[name] : ''}
          rules={{
            required: { value: true, message: 'Upload file here' },
          }}
          render={({ field: { onChange, onBlur }, fieldState }) => (
            <Dropzone noClick 
              accept={{"image/jpeg":[]}}
              onDrop={(acceptedFiles) => {
                // setValue(`${name}`, acceptedFiles as unknown as FileList, {
                //   shouldValidate: true,
                // });
                if (['image/jpeg', 'image/png', 'image/gif', 'application/pdf'].includes(acceptedFiles[0].type)) {
                  setValue(`${name}`, acceptedFiles as unknown as FileList, {shouldValidate: true});
                  setWrongTypeErr('')
                  setAcceptedFiles(acceptedFiles)
                } 
                else if (!['image/jpeg', 'image/png', 'application/pdf'].includes(acceptedFiles[0].type)) {
                  setWrongTypeErr('JPG, PNG or PDF only')
                }
              }} 
            >
              {({ getRootProps, getInputProps, open, isDragActive }) => (
                  <div className={`border-dashed w-full h-full ${isDragActive ? 'bg-[#808080]' : 'bg-transprent' }`} {...getRootProps()} >
                      <input {...getInputProps({ id: 'spreadsheet', onChange, onBlur, })} />
                      <button type="button" onClick={open} className='flex items-center justify-center w-full h-full'>
                          {!acceptedFiles.length ? <p><span className='cursor-pointer hover:underline'>Choose a file</span><br />or drag and drop</p>
                          : <p className='w-full break-words'>{acceptedFiles[0].name}</p> }
                      </button>
                      <div>
                          {wrongTypeErr !== '' && <p className='absolute text-xs font-semibold text-red-600 -bottom-6'>{wrongTypeErr}</p>}
                          <p className={`absolute -bottom-6 text-xs font-semibold ${fieldState.error && 'text-red-600'}`}>{wrongTypeErr === '' ? (fieldState.error ? fieldState.error.message : '*Document required') : null }</p>
                      </div>
                  </div>)}
            </Dropzone>
          )}
        />
    </div>
  );
}

export default DragDropFile