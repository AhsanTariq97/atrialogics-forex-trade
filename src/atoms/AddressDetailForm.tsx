import React from 'react'
import { Controller } from "react-hook-form";

const AddressDetailForm = ({ errors, control }: { errors: any, control: any }) => {
  return (
    <div className='flex flex-col items-start justify-between w-full space-y-3'>
        <h2 className='text-[#52c2e4] text-xl font-bold pb-2'>Address Details</h2>
        <div className='flex flex-col items-start justify-between w-full space-y-1'>
            <label htmlFor='city' className='font-semibold'>City</label>
            <Controller
                name="city"
                control={control}
                defaultValue=""
                rules={{ required: {value: true, message: 'Enter your city'} }}
                render={({ field }) => <input className='font-medium border-b border-[#52c2e4] w-full outline-none' {...field} type='text' placeholder='City' />}
            />
            {errors.city && <p className='text-xs text-red-600'>{errors.city?.message}</p>}
        </div>
        <div className='flex flex-col items-start justify-between w-full space-y-1'>
            <label htmlFor='ZIPCode' className='font-semibold'>Postal ZIP Code</label>
            <Controller
                name="ZIPCode"
                control={control}
                defaultValue=""
                rules={{ required: {value: true, message: 'Enter your postal ZIP code'} }}
                render={({ field }) => <input className='font-medium border-b border-[#52c2e4] w-full outline-none' {...field} type='text' placeholder='Postal ZIP Code' />}
            />
            {errors.ZIPCode && <p className='text-xs text-red-600'>{errors.ZIPCode?.message}</p>}
        </div>
        <div className='flex flex-col items-start justify-between w-full space-y-1'>
            <label htmlFor='country' className='font-semibold'>Country</label>
            <Controller
                name="country"
                control={control}
                defaultValue=""
                rules={{ required: {value: true, message: 'Enter your country'} }}
                render={({ field }) => <input className='font-medium border-b border-[#52c2e4] w-full outline-none' {...field} type='text' placeholder='First Name' />}
            />
            {errors.country && <p className='text-xs text-red-600'>{errors.country?.message}</p>}
        </div>
        <div className='flex flex-col items-start justify-between w-full space-y-1'>
            <label htmlFor='state' className='font-semibold'>State</label>
            <Controller
                name="state"
                control={control}
                defaultValue=""
                rules={{ required: {value: true, message: 'Enter your state'} }}
                render={({ field }) => <input className='font-medium border-b border-[#52c2e4] w-full outline-none' {...field} type='text' placeholder='State' />}
            />
            {errors.state && <p className='text-xs text-red-600'>{errors.state?.message}</p>}
        </div>
    </div>
  )
}

export default AddressDetailForm