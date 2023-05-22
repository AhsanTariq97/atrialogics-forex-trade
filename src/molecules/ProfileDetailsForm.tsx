import React, { useEffect, useState } from 'react'
import VerificationDocsForm from '../atoms/VerificationDocsForm'
import PersonalDetailsForm from '../atoms/PersonalDetailsForm'
import AddressDetailForm from '../atoms/AddressDetailForm'
import BankInfoForm from '../atoms/BankInfoForm'
import QuestionnaireForm from '../atoms/QuestionnaireForm'

import { useForm, FormProvider } from "react-hook-form";
import axios from 'axios'
import Cookies from 'universal-cookie';

const ProfileDetailsForm = () => {
    
    const cookies = new Cookies()
    
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
            
            const response = await axios.post('https://tradingcrowd.net/api/updateuserdetail', {
                date_of_birth: data.date_of_birth,
                postal_code: data.postal_code,
                aadhaarCard: data.aadhaarCard,
                accountName: data.accountName,
                bankAccount: data.bankAccount,
                bankAddress: data.bankAddress,
                bankName: data.bankName,
                city: data.city,
                country: data.country,
                firstName: data.firstName,
                futureTradeFrequency: data.futureTradeFrequency,
                lastName: data.lastName,
                passport: data.passport,
                phoneNo: data.phoneNo,
                qualifications: data.qualifications,
                spreadBetsFrequency: data.spreadBetsFrequency,
                state: data.state,
                swiftCode: data.swiftCode,
                workExperience: data.workExperience,
            },
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