import React, { useEffect, useState } from 'react'
import VerificationDocsForm from '../atoms/VerificationDocsForm'
import PersonalDetailsForm from '../atoms/PersonalDetailsForm'
import AddressDetailForm from '../atoms/AddressDetailForm'
import BankInfoForm from '../atoms/BankInfoForm'
import QuestionnaireForm from '../atoms/QuestionnaireForm'

import { useForm, FormProvider } from "react-hook-form";
import axios from 'axios'
import Cookies from 'universal-cookie';
import { Router, useRouter } from 'next/router'

const ProfileDetailsForm = () => {
    
    const cookies = new Cookies()

    const router = useRouter()
    
    const methods = useForm({mode: "onBlur"})

    const [isFormSubmitted, setIsFormSubmitted] = useState(false)
    const [retrievedData, setRetrievedData] = useState({})

    const getUserDetails = async () => {
        try {
            const token = cookies.get('token')
            
            const response = await axios.get('https://tradingcrowd.net/api/userdetail', {
                headers: {
                Authorization: `Bearer ${token}`
                }
            });

            if (response.data.status === 'Authorization Token not found') {
                cookies.remove('token')
                router.push('/login')
            }
            
            setRetrievedData(response.data.data)
            console.log('GET', response.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getUserDetails()
    }, [])

    const onSubmit = async (data: any) => {
        console.log('RHF', data)
        try {
            const token = cookies.get('token')

            let formData = new FormData()
            formData.append("aadhaarCard", data.aadhaarCard)
            formData.append("passport", data.passport)
            formData.append("date_of_birth", data.date_of_birth)
            formData.append("postal_code", data.postal_code)
            formData.append("accountName", data.accountName)
            formData.append("bankAccount", data.bankAccount)
            formData.append("bankAddress", data.bankAddress)
            formData.append("bankName", data.bankName)
            formData.append("city", data.city)
            formData.append("country", data.country)
            formData.append("firstName", data.firstName)
            formData.append("futureTradeFrequency", data.futureTradeFrequency)
            formData.append("lastName", data.lastName)
            formData.append("phone", data.phone)
            formData.append("qualifications", data.qualifications)
            formData.append("spreadBetsFrequency", data.spreadBetsFrequency)
            formData.append("state", data.state)
            formData.append("swiftCode", data.swiftCode)
            formData.append("workExperience", data.workExperience)
            
            console.log(formData)


            const response = await axios.post('https://tradingcrowd.net/api/updateuserdetail', formData,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
          
            console.log("POST", response.data)
            getUserDetails()
        } catch (error) {
            console.error(error)
        }

        setIsFormSubmitted(true)
        methods.reset();
    } 

    useEffect(() => {
      methods.reset(retrievedData);
    }, [retrievedData, methods.reset]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} noValidate className='flex flex-col items-start justify-between space-y-8 w-full text-[#535353] px-8 py-12 shadow-lg rounded-xl'>
          <VerificationDocsForm retrievedData={retrievedData} isFormSubmitted={isFormSubmitted} setIsFormSubmitted={setIsFormSubmitted} />
          <PersonalDetailsForm retrievedData={retrievedData} />
          <AddressDetailForm retrievedData={retrievedData} /> 
          <BankInfoForm retrievedData={retrievedData} />
          <QuestionnaireForm retrievedData={retrievedData} />
          <button className='bg-[#52c2e4] font-semibold rounded-lg text-white px-8 py-3' disabled>NEXT STEP</button>
          
          <div className='flex items-center justify-center w-full'>
              <button type='submit' className='bg-[#52c2e4] font-semibold rounded-lg text-white px-8 py-3 mt-4'>SAVE</button>
          </div>
      </form>
    </FormProvider>
  )
}

export default ProfileDetailsForm