import React from 'react'

import { useForm } from 'react-hook-form';

const ChangePasswordForm = () => {

    const { register, handleSubmit, formState: { errors }, watch } = useForm<{OldPassword: string, NewPassword: string, RepeatNewPassword: string}>();

    const newPassword = watch("NewPassword", ""); // get the value of the "newPassword" field

    const onSubmit = (data: any) => {
        console.log(data);
    }
    
  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center w-full max-w-md px-8 py-12 space-y-8 shadow-lg jusitfy-between rounded-xl text-[#535353]'>
        <div className='flex flex-col items-start justify-between w-full space-y-2'>
            <label htmlFor="" className='text-xl font-semibold'>Current password</label>
            <input type="password" className='outline-none border-b border-[#2F80ED] w-full' {...register('OldPassword', { required: "Enter old password", minLength: {value: 8, message: `Doesn't match old password`} })} />
            <p className='text-xs text-red-600'>{errors.OldPassword?.message}</p>
        </div>
        <div className='flex flex-col items-start justify-between w-full space-y-2'>
            <label htmlFor="" className='text-xl font-semibold'>New password</label>
            <input type="password" className='outline-none border-b border-[#2F80ED] w-full' {...register('NewPassword', { required: "Enter new password", minLength: {value: 8, message: `Password must be of 8 characters or more`} })}/>
            <p className='text-xs text-red-600'>{errors.NewPassword?.message}</p>
        </div>
        <div className='flex flex-col items-start justify-between w-full space-y-2'>
            <label htmlFor="" className='text-xl font-semibold'>Repeat password</label>
            <input type="password" className='outline-none border-b border-[#2F80ED] w-full' {...register('RepeatNewPassword', { required: 'Enter new password again', validate: value => value === newPassword || 'Passwords do not match' })} />
            <p className='text-xs text-red-600'>{errors.RepeatNewPassword?.message}</p>
        </div>
        <div className='w-full'>
            <button type='submit' className='bg-[#2F80ED] rounded-lg text-xl font-semibold w-full py-3 mt-6 text-white'>CHANGE PASSWORD</button>
        </div>
    </form>
  )
}

export default ChangePasswordForm