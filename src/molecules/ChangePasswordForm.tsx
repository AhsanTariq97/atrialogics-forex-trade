import React from 'react'

type PasswordFormInputs = {
    oldPassword: string;
    newPassword: string;
    repeatNewPassword: string;
  };

import { useForm, Controller } from 'react-hook-form';

const ChangePasswordForm = () => {

    const { handleSubmit, control, getValues, formState: { errors } } = useForm<PasswordFormInputs>();

    // const newPassword = watch("newPassword", ""); // get the value of the "newPassword" field

    const onSubmit = (data: PasswordFormInputs) => {
        console.log(data);
    }
    
  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center w-full max-w-md px-8 py-12 space-y-8 shadow-lg jusitfy-between rounded-xl text-[#535353]'>
        <div className='flex flex-col items-start justify-between w-full space-y-2'>
            <label htmlFor="oldPassword" className='text-xl font-semibold'>Current password</label>
            <Controller
                name="oldPassword"
                control={control}
                defaultValue=""
                rules={{ required: {value: true, message: 'Enter old password'} }}
                render={({ field }) => <input className='outline-none border-b border-[#2F80ED] w-full' {...field} type='password' />}
            />
            <p className='text-xs text-red-600'>{errors.oldPassword?.message}</p>
        </div>
        <div className='flex flex-col items-start justify-between w-full space-y-2'>
            <label htmlFor="newPassword" className='text-xl font-semibold'>New password</label>
            <Controller
                name="newPassword"
                control={control}
                defaultValue=""
                rules={{ required: {value: true, message: 'Enter new password'}, minLength: {value:8, message: 'Password must be atleast 8 characters' } }}
                render={({ field }) => <input className='outline-none border-b border-[#2F80ED] w-full' {...field} type="password" />}
            />
            <p className='text-xs text-red-600'>{errors.newPassword?.message}</p>
        </div>
        <div className='flex flex-col items-start justify-between w-full space-y-2'>
            <label htmlFor="repeatNewPassword" className='text-xl font-semibold'>Repeat password</label>
            <Controller
                name="repeatNewPassword"
                control={control}
                defaultValue=""
                rules={{
                    required: {value: true, message: 'Repeat new password'},
                    validate: (value) => value === getValues('newPassword') || "The passwords do not match"
                }}
                render={({ field }) => <input className='outline-none border-b border-[#2F80ED] w-full' {...field} type="password" />}
            />
            <p className='text-xs text-red-600'>{errors.repeatNewPassword?.message}</p>
        </div>
        <div className='w-full'>
            <button type='submit' className='bg-[#2F80ED] rounded-lg text-xl font-semibold w-full py-3 mt-6 text-white'>CHANGE PASSWORD</button>
        </div>
    </form>
  )
}

export default ChangePasswordForm