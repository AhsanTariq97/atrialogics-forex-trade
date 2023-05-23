import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Cookies from 'universal-cookie';

type PasswordFormInputs = {
    email: string;
    oldPassword: string;
    newPassword: string;
    repeatNewPassword: string;
  };

import { useForm, Controller } from 'react-hook-form';
import validator from 'validator';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

const ChangePasswordForm = () => {

    const cookies = new Cookies()

    const router = useRouter()
    
    const [userEmail, setUserEmail] = useState('')

    const { handleSubmit, reset, control, getValues, formState: { errors } } = useForm<PasswordFormInputs>();

    const validateEmail = (email: string) => {
        if (validator.isEmail(email)) {
          return true
        } else {
          return 'Enter valid email'
        } 
    }

    useEffect(() => {
        const getUserEmail = async () => {
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
                setUserEmail(response.data.data.email)
            } catch (error) {
                console.error(error);
            }
        }
        getUserEmail()
    }, [])

    const onSubmit = async (data: PasswordFormInputs) => {
        validateEmail(data.email)

        try {
            const token = cookies.get('token')

            const response = await axios.post('https://tradingcrowd.net/api/updatepassword', {
            email: userEmail,
            newPassword: data.newPassword,
            repeatNewPassword: data.repeatNewPassword
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            toast.success('Password change successful')
            console.log(response.data)
        } catch (error) {
            console.error(error)
            toast.error('Password change failed');
        }
        reset()
    }
    
  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center w-full max-w-md px-8 py-12 space-y-8 shadow-lg jusitfy-between rounded-xl text-[#535353]'>
        <div className='flex flex-col items-start justify-between w-full space-y-2'>
            <label htmlFor="oldPassword" className='text-lg font-semibold xs:text-xl'>Email</label>
            <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => <input className='outline-none border-b border-[#2F80ED] w-full cursor-not-allowed' {...field} value={userEmail} type='email' disabled />}
            />
            {/* <p className='text-xs text-red-600'>{errors.email?.message}</p> */}
        </div>
        <div className='flex flex-col items-start justify-between w-full space-y-2'>
            <label htmlFor="oldPassword" className='text-lg font-semibold xs:text-xl'>Current password</label>
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
            <label htmlFor="newPassword" className='text-lg font-semibold xs:text-xl'>New password</label>
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
            <label htmlFor="repeatNewPassword" className='text-lg font-semibold xs:text-xl'>Repeat password</label>
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