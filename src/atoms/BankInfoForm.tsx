import React from 'react'

const BankInfoForm = ({ register, errors }: {register: any, errors: any }) => {
  return (
    <div className='flex flex-col items-start justify-between w-full space-y-3'>
        <h2 className='text-[#52c2e4] text-xl font-bold pb-2'>Bank Info</h2>
        <div className='flex flex-col items-start justify-between w-full space-y-1'>
            <label className='font-semibold'>Account Name</label>
            <input type="text" placeholder='Account Name' {...register('accountName', {required: 'Enter your account name'})} className='font-medium border-b border-[#52c2e4] w-full outline-none' required />
            {errors.accountName && <p className='text-xs text-red-600'>{errors.accountName?.message}</p>}
        </div>
        <div className='flex flex-col items-start justify-between w-full space-y-1'>
            <label className='font-semibold'>Bank Account</label>
            <input type="text" placeholder='Bank Account' {...register('bankAccount', {required: 'Enter your bank account'})} className='font-medium border-b border-[#52c2e4] w-full outline-none' required />
            {errors.bankAccount && <p className='text-xs text-red-600'>{errors.bankAccount?.message}</p>}
        </div>
        <div className='flex flex-col items-start justify-between w-full space-y-1'>
            <label className='font-semibold'>Bank Address</label>
            <input type="text" placeholder='Bank Address' {...register('bankAddress', {required: 'Enter your bank address'})} className='font-medium border-b border-[#52c2e4] w-full outline-none' required />
            {errors.bankAddress && <p className='text-xs text-red-600'>{errors.bankAddress?.message}</p>}
        </div>
        <div className='flex flex-col items-start justify-between w-full space-y-1'>
            <label className='font-semibold'>Swift Code</label>
            <input type="text" placeholder='Swift Code' {...register('swiftCode', {required: 'Enter your swift code'})} className='font-medium border-b border-[#52c2e4] w-full outline-none' required />
            {errors.swiftCode && <p className='text-xs text-red-600'>{errors.swiftCode?.message}</p>}
        </div>
        <div className='flex flex-col items-start justify-between w-full space-y-1'>
            <label className='font-semibold'>Bank Name</label>
            <input type="text" placeholder='Bank Name' {...register('bankName', {required: 'Enter your bank name'})} className='font-medium border-b border-[#52c2e4] w-full outline-none' required />
            {errors.bankName && <p className='text-xs text-red-600'>{errors.bankName?.message}</p>}
        </div>
    </div>
  )
}

export default BankInfoForm