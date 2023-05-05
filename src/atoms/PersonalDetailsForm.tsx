import React, { ReactNode } from 'react'
import { Controller, useFormContext } from "react-hook-form";
import 'react-phone-number-input/style.css'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'

const PersonalDetailsForm = () => {

    const { control, formState: {errors} } = useFormContext();

  return (
    <div className='flex flex-col items-start justify-between w-full space-y-3'>
        <h2 className='text-[#52c2e4] text-xl font-bold pb-2'>Personal Details</h2>
        <div className='flex flex-col items-start justify-between w-full space-y-1'>
            <label className='font-semibold'>First Name</label>
            <Controller
                name="firstName"
                control={control}
                defaultValue=""
                rules={{ required: {value: true, message: 'Enter your first name'} }}
                render={({ field }) => <input className='font-medium border-b border-[#52c2e4] w-full outline-none' {...field} type='text' placeholder='First Name' />}
            />
            {errors.firstName && <p className='text-xs text-red-600'>{errors.firstName?.message as ReactNode}</p>}
        </div>
        <div className='flex flex-col items-start justify-between w-full space-y-1'>
            <label className='font-semibold'>Last Name</label>
            <Controller
                name="lastName"
                control={control}
                defaultValue=""
                rules={{ required: {value: true, message: 'Enter your last name'} }}
                render={({ field }) => <input className='font-medium border-b border-[#52c2e4] w-full outline-none' {...field} type='text' placeholder='Last Name' />}
            />
            {errors.lastName && <p className='text-xs text-red-600'>{errors.lastName?.message as ReactNode}</p>}
        </div>
        <div className='flex flex-col items-start justify-between w-full space-y-1'>
            <label className='font-semibold'>Date of Birth</label>
            <Controller
                name="DoB"
                control={control}
                defaultValue=""
                rules={{ required: {value: true, message: 'Enter your date of birth'} }}
                render={({ field }) => <input className='font-medium border-b border-[#52c2e4] w-full outline-none' {...field} type='date' />}
            />
            {errors.DoB && <p className='text-xs text-red-600'>{errors.DoB?.message as ReactNode}</p>}
        </div>
        <div className='flex flex-col items-start justify-between w-full space-y-1'>
            <label className='font-semibold'>Phone number</label>
            <Controller name="phoneNo" control={control} rules={{ validate: (value) => isValidPhoneNumber(value) || 'Invalid number' , required: 'Enter your number', }} render={({ field: { onChange, value } }) => (
                <PhoneInput value={value} onChange={onChange} defaultCountry="US" className='phone-input' placeholder='Phone number' />
            )}/>
            {errors.phoneNo && <p className='text-xs text-red-600'>{errors.phoneNo?.message as ReactNode}</p>}
        </div>
    </div>
  )
}

export default PersonalDetailsForm