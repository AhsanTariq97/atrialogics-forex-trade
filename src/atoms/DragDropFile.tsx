import React, {useRef, useState, useEffect} from 'react'
import { Controller } from "react-hook-form";

const DragDropFile = ({ name, errors, control, register, isFormSubmitted, setIsFormSubmitted }: { name: string, errors: any, control: any, register: any, isFormSubmitted: boolean, setIsFormSubmitted: any }) => {

  const [dragActive, setDragActive] = useState(false);
  const [fileName, setFileName] = useState('');
  // ref
  const inputRef = useRef<HTMLInputElement>(null);
  
  // handle drag events
  const handleDrag = function(e: any) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };
  
  // triggers when file is dropped
  const handleDrop = function(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setFileName(shortenFileNameFn(file.name) || '');
      console.log(e.dataTransfer.files)
    }
  };
  
  // triggers when file is selected with click
  const handleChange = function(e: any) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFileName(shortenFileNameFn(file.name) || '');
      console.log(e.target.files)
    }
  };
  
  // triggers the input when the button is clicked
  const onButtonClick = (e: any) => {
    if(inputRef.current) {
      inputRef.current.click();
    }
  };

  useEffect(() => {
    if (isFormSubmitted) {
      setFileName('');
      setIsFormSubmitted(false)
    }
  }, [isFormSubmitted, setFileName]);

  //shorten fileName if bigger
  const shortenFileNameFn = (fileName: string) => {
    if (fileName.split('').length > 25) {
      const fileType = fileName.substring(fileName.lastIndexOf('.'))
      const shortFileName = fileName.substring(0, fileName.lastIndexOf('.')).split('').slice(0, 25).join('').concat('...')
      const newFileName = shortFileName.concat(fileType)
      return newFileName
    } return fileName
  }

  return (
    <div className='h-40 w-[28rem] max-w-full text-center relative' onDragEnter={handleDrag} >
        {/* <Controller
            name={name}
            control={control}
            defaultValue=""
            rules={{ required: {value: false, message: 'Enter docs here'} }}
            render={({ field }) => <input {...field} id={name} type='file' accept='image/*, .pdf' className='absolute w-0 h-0 opacity-0' onChange={handleChange} />}
        /> */}
        <input {...register(`${name}`, {
                  required: 'Upload file here', 
                  validate: {
                    acceptedFormats: (files: { type: string; }[]) => ['image/jpeg', 'image/png', 'image/gif', 'application/pdf'].includes(files[0]?.type) || 'Only PNG, JPEG e GIF'}
                  })} 
              id={name} type="file" accept='image/*, .pdf' 
              onChange={handleChange} 
              className='absolute w-0 h-0 opacity-0'
        />
        <label htmlFor={name} className={`h-full flex items-center justify-center border-2 rounded-2xl border-dashed border-[#CBD5E1] bg-[#F8FAFC]`}>
            {fileName ? <p className='w-full break-words'>{fileName}</p> : <div onClick={onButtonClick}>
                <p>Drag and drop your file here or</p>
                <p className="p-1 cursor-pointer hover:underline">Upload a file</p>
            </div>}
        </label>
        {dragActive && <div className='absolute inset-0 w-full h-full rounded-sm' onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div> }
        <p className={`pt-4 text-xs font-semibold ${errors[name] && 'text-red-600'}`}>{errors[name] ? errors[name]?.message : '*Document required'}</p>
    </div>
  )
}

export default DragDropFile