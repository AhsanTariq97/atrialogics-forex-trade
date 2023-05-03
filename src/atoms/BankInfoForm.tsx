import React from 'react'
import { Controller } from "react-hook-form";

const BankInfoForm = ({ errors, control }: { errors: any, control: any }) => {
  return (
    <div className='flex flex-col items-start justify-between w-full space-y-3'>
        <h2 className='text-[#52c2e4] text-xl font-bold pb-2'>Bank Info</h2>
        <div className='flex flex-col items-start justify-between w-full space-y-1'>
            <label htmlFor='accountName' className='font-semibold'>Account Name</label>
            <Controller
                name="accountName"
                control={control}
                defaultValue=""
                rules={{ required: {value: true, message: 'Enter your account name'} }}
                render={({ field }) => <input className='font-medium border-b border-[#52c2e4] w-full outline-none' {...field} type='text' placeholder='Account Name' />}
            />
            {errors.accountName && <p className='text-xs text-red-600'>{errors.accountName?.message}</p>}
        </div>
        <div className='flex flex-col items-start justify-between w-full space-y-1'>
            <label htmlFor='bankAccount' className='font-semibold'>Bank Account</label>
            <Controller
                name="bankAccount"
                control={control}
                defaultValue=""
                rules={{ required: {value: true, message: 'Enter your bank account'} }}
                render={({ field }) => <input className='font-medium border-b border-[#52c2e4] w-full outline-none' {...field} type='text' placeholder='Bank Account' />}
            />
            {errors.bankAccount && <p className='text-xs text-red-600'>{errors.bankAccount?.message}</p>}
        </div>
        <div className='flex flex-col items-start justify-between w-full space-y-1'>
            <label htmlFor='bankAddress' className='font-semibold'>Bank Address</label>
            <Controller
                name="bankAddress"
                control={control}
                defaultValue=""
                rules={{ required: {value: true, message: 'Enter your bank address'} }}
                render={({ field }) => <input className='font-medium border-b border-[#52c2e4] w-full outline-none' {...field} type='text' placeholder='Bank Address' />}
            />
            {errors.bankAddress && <p className='text-xs text-red-600'>{errors.bankAddress?.message}</p>}
        </div>
        <div className='flex flex-col items-start justify-between w-full space-y-1'>
            <label htmlFor='swiftCode' className='font-semibold'>Swift Code</label>
            <Controller
                name="swiftCode"
                control={control}
                defaultValue=""
                rules={{ required: {value: true, message: 'Enter your swift code'} }}
                render={({ field }) => <input className='font-medium border-b border-[#52c2e4] w-full outline-none' {...field} type='text' placeholder='Swift Code' />}
            />
            {errors.swiftCode && <p className='text-xs text-red-600'>{errors.swiftCode?.message}</p>}
        </div>
        <div className='flex flex-col items-start justify-between w-full space-y-1'>
            <label htmlFor='bankName' className='font-semibold'>Bank Name</label>
            <Controller
                name="bankName"
                control={control}
                defaultValue=""
                rules={{ required: {value: true, message: 'Enter your bank name'} }}
                render={({ field }) => <input className='font-medium border-b border-[#52c2e4] w-full outline-none' {...field} type='text' placeholder='Bank Name' />}
            />
            {errors.bankName && <p className='text-xs text-red-600'>{errors.bankName?.message}</p>}
        </div>
    </div>
  )
}

export default BankInfoForm