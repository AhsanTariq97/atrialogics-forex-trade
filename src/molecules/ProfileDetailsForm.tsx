import React, { useState } from 'react'
import VerificationDocsForm from '../atoms/VerificationDocsForm'
import PersonalDetailsForm from '../atoms/PersonalDetailsForm'
import AddressDetailForm from '../atoms/AddressDetailForm'
import BankInfoForm from '../atoms/BankInfoForm'
import QuestionnaireForm from '../atoms/QuestionnaireForm'

import { useForm, FormProvider } from "react-hook-form";

const ProfileDetailsForm = () => {

    // const { handleSubmit, register, control, setValue, reset, formState: { errors } } = useForm();
    const methods = useForm({mode: "onBlur"})

    const [isFormSubmitted, setIsFormSubmitted] = useState(false)

    const onSubmit = (data: any) => {
        console.log(data)
        setIsFormSubmitted(true)
        methods.reset();
    } 

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} noValidate className='flex flex-col items-start justify-between space-y-8 w-full text-[#535353] px-8 py-12 shadow-lg rounded-xl'>
          <VerificationDocsForm isFormSubmitted={isFormSubmitted} setIsFormSubmitted={setIsFormSubmitted} />
          <PersonalDetailsForm />
          <AddressDetailForm />
          <BankInfoForm />
          <QuestionnaireForm />
          <button className='bg-[#52c2e4] font-semibold rounded-lg text-white px-8 py-3'>NEXT STEP</button>
          
          <div className='flex items-center justify-center w-full'>
              <button type='submit' className='bg-[#52c2e4] font-semibold rounded-lg text-white px-8 py-3 mt-4'>SAVE</button>
          </div>
      </form>
    </FormProvider>
  )
}

export default ProfileDetailsForm