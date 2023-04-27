import React from 'react'
import { Controller } from "react-hook-form";
import 'react-phone-number-input/style.css'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'

const PersonalDetailsForm = ({ register, errors, control }: {register: any, errors: any, control: any }) => {

  return (
    <div className='flex flex-col items-start justify-between w-full space-y-3'>
        <h2 className='text-[#52c2e4] text-xl font-bold pb-2'>Personal Details</h2>
        <div className='flex flex-col items-start justify-between w-full space-y-1'>
            <label className='font-semibold'>First Name</label>
            <input type="text" placeholder='First Name' {...register('firstName', {required: 'Enter your first name'})} className='font-medium border-b border-[#52c2e4] w-full outline-none' required />
            {errors.firstName && <p className='text-xs text-red-600'>{errors.firstName?.message}</p>}
        </div>
        <div className='flex flex-col items-start justify-between w-full space-y-1'>
            <label className='font-semibold'>Last Name</label>
            <input type="text" placeholder='Last Name' {...register('lastName', {required: 'Enter your last name'})} className='font-medium border-b border-[#52c2e4] w-full outline-none' required />
            {errors.lastName && <p className='text-xs text-red-600'>{errors.lastName?.message}</p>}
        </div>
        <div className='flex flex-col items-start justify-between w-full space-y-1'>
            <label className='font-semibold'>Date of Birth</label>
            <input type='date' placeholder='dd/mm/yyyy' {...register('DoB', {required: 'Enter your date of birth'})} className='font-medium border-b border-[#52c2e4] w-full outline-none' required />
            {errors.DoB && <p className='text-xs text-red-600'>{errors.DoB?.message}</p>}
        </div>
        <div className='flex flex-col items-start justify-between w-full space-y-1'>
            <label className='font-semibold'>Phone number</label>
            {/* <input type="text" placeholder='+1234567890' {...register('phoneNo', {required: 'Enter your phone number', validate:  })} className='font-medium border-b border-[#52c2e4] w-full outline-none' required /> */}
            <Controller name="phoneNo" control={control} rules={{ validate: (value) => isValidPhoneNumber(value) || 'Invalid number' , required: 'Enter your number', }} render={({ field: { onChange, value } }) => (
                <PhoneInput value={value} onChange={onChange} defaultCountry="US" className='phone-input' placeholder='Phone number' />
            )}/>
            {errors.phoneNo && <p className='text-xs text-red-600'>{errors.phoneNo?.message}</p>}
        </div>
    </div>
  )
}

export default PersonalDetailsForm