import React, { useState } from 'react'
import VerificationDocsForm from '../atoms/VerificationDocsForm'
import PersonalDetailsForm from '../atoms/PersonalDetailsForm'
import AddressDetailForm from '../atoms/AddressDetailForm'
import BankInfoForm from '../atoms/BankInfoForm'
import QuestionnaireForm from '../atoms/QuestionnaireForm'

import { useForm } from "react-hook-form";

const ProfileDetailsForm = () => {

    const { handleSubmit, register, control, setValue, reset, formState: { errors } } = useForm();

    const [isFormSubmitted, setIsFormSubmitted] = useState(false)

    const onSubmit = (data: any) => {
        console.log(data)
        setIsFormSubmitted(true)
        reset();
    } 

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className='flex flex-col items-start justify-between space-y-8 w-full text-[#535353] px-8 py-12 shadow-lg rounded-xl'>
        <VerificationDocsForm errors={errors} control={control} register={register} isFormSubmitted={isFormSubmitted} setIsFormSubmitted={setIsFormSubmitted} />
        {/* <PersonalDetailsForm errors={errors} control={control} /> */}
        <AddressDetailForm errors={errors} control={control} />
        {/* <BankInfoForm errors={errors} control={control} /> */}
        {/* <QuestionnaireForm errors={errors} control={control} /> */}
        <button className='bg-[#52c2e4] font-semibold rounded-lg text-white px-8 py-3'>NEXT STEP</button>
        
        <div className='flex items-center justify-center w-full'>
            <button type='submit' className='bg-[#52c2e4] font-semibold rounded-lg text-white px-8 py-3 mt-4'>SAVE</button>
        </div>
    </form>
  )
}

export default ProfileDetailsForm