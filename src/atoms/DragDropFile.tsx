import React, {useRef, useState} from 'react'

const DragDropFile = () => {

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
      setFileName(file.name);
      console.log(e.dataTransfer.files)
    }
  };
  
  // triggers when file is selected with click
  const handleChange = function(e: any) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFileName(file.name);
      console.log(e.target.files)
    }
  };
  
// triggers the input when the button is clicked
  const onButtonClick = () => {
    if(inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <div className='h-40 w-[28rem] max-w-full text-center relative' onDragEnter={handleDrag} >
        <input ref={inputRef} type="file" id='input-file-upload' accept='image/*, .pdf' className='hidden' onChange={handleChange} />
        <label htmlFor="input-file-upload" className={`h-full flex items-center justify-center border-2 rounded-2xl border-dashed border-[#CBD5E1] bg-[#F8FAFC]`}>
            {fileName ? <p>{fileName}</p> : <div onClick={onButtonClick}>
                <p>Drag and drop your file here or</p>
                <button className="p-1 cursor-pointer hover:underline" >Upload a file</button>
            </div>}
        </label>
        {dragActive && <div className='absolute inset-0 w-full h-full rounded-sm' onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div> }
    </div>
  )
}

export default DragDropFile