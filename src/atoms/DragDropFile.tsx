import React, { useCallback, useEffect, useState } from "react"
import { useDropzone } from "react-dropzone"
import { useFormContext } from "react-hook-form"

const FileInput = ({name, accept, isFormSubmitted, setIsFormSubmitted}: {name: string, accept: string, isFormSubmitted: boolean, setIsFormSubmitted: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const { register, unregister, setValue, watch } = useFormContext()
    const files = watch(name)
    const onDrop = useCallback(
        (droppedFiles: any) => {
            setValue(name, droppedFiles, { shouldValidate: true })
        },
        [setValue, name]
    )
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept,
    })
    useEffect(() => {
        register(name)
        return () => {
            unregister(name)
        }
    }, [register, unregister, name])

    // const [fileUploaded, setFileUploaded] = useState(false)

    // if (files?.length) {
    //   setFileUploaded(true)
    // }

    return (
        <div {...getRootProps()} type="file" role="button" aria-label="File Upload" id={name} className="h-40 w-[28rem] max-w-full text-center p-2" >
                <input {...getInputProps()} required />
                <div className={"h-full flex items-center justify-center" + (isDragActive ? " " : " ")}>
                    {!files?.length && <div>
                        <p>Drag and drop your file here or</p>
                        <p className="p-1 cursor-pointer hover:underline">Upload a file</p>
                    </div>}
                    {files?.length && <p className='w-full break-words'>{files[0].name}</p>}

                    {/* {!!files?.length && (
                        <div className="">
                            {files.map(file => {
                                return (
                                    <div key={file.name}>
                                        <img
                                            src={URL.createObjectURL(file)}
                                            alt={file.name}
                                            style={{
                                                height: "200px",
                                            }}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    )} */}
                </div>
          </div>
    )
}

export default FileInput