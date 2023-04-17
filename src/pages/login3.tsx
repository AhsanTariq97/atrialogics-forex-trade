import React from 'react'
import { useForm, Controller } from "react-hook-form";
import validator from 'validator';
import 'react-phone-number-input/style.css'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import { useRouter } from 'next/router';

const LoginPage = () => {

    function getFlagEmoji(countryCode: string) {
        return countryCode.toUpperCase().replace(/./g, char => 
            String.fromCodePoint(127397 + char.charCodeAt(0))
        );
    }

    const { register, handleSubmit, control, reset, formState: { errors } } = useForm<{ firstName: string, lastName: string, email: string, password: string, phone: string }>();

    const validateEmail = (email: string) => {
        if (validator.isEmail(email)) {
          return true
        } else {
          return 'Enter valid email'
        } 
    }

    const router = useRouter();

      
  return (
    <main className='bg-[#FFFFF4] h-screen'>
        <nav className='grid items-center grid-cols-3 px-16 py-8 mx-auto'>
            <h1 className='text-2xl font-extrabold text-[#003960]'>Trading Crowd</h1>
            <div className='flex items-center justify-start col-start-3 space-x-4'>
                <div className='rounded border border-[#7EA1F9] text-[9px] flex justify-between items-center space-x-2 px-2'>
                    <p className='text-base'>{getFlagEmoji('gb')}</p>
                    <p>EN</p>
                </div>
                <p className='text-sm font-semibold text-[#003960]'>Already a user?</p>
                <button className='bg-[#5290F7] text-sm font-semibold rounded text-white py-2 px-6'>SIGN IN</button>
            </div>
        </nav>
        <section className='flex flex-col items-center justify-center py-32 mx-auto space-y-8 md:flex-row md:space-y-0'>
            <div className='flex flex-col items-start justify-center col-span-2 px-8 space-y-4 md:items-end md:w-2/5'>
                <h1 className='text-4xl lg:text-6xl text-[#5290F7] font-bold md:text-right'>Open demo account</h1>
                <p className='text-lg lg:text-2xl text-[#003960] font-semibold'>Fill out registration form</p>
            </div>
            <form className='2-3/5 flex flex-col items-start justify-between min-w-[430px] mx-auto px-6 py-4 rounded bg-[#EFF6FF] space-y-4 border border-[#BFDBFE]' onSubmit={handleSubmit((data) => {
                console.log(data)
                reset();
                if (validateEmail(data.email)) {
                    router.push('/login4');
                  } else {
                    console.log('Email is not valid');
                }
            })}>
                <h1 className='text-xl font-semibold'>Personal details</h1>
                <div className='grid w-full grid-cols-2 gap-3'>
                    <div className='flex flex-col items-start justify-between col-span-2 border border-[#BFDBFE] rounded p-2 bg-[#FBF6F64A] text-sm'>
                        <label className='text-xs font-semibold'>Your email</label>
                        <input type="text" className='text-[#53535394] font-semibold outline-none bg-transparent' {...register('email', {required: 'Required', validate: validateEmail })} placeholder='name@gmail.com' />
                        <p className='text-xs text-red-600'>{errors.email?.message}</p>
                    </div>
                    <div className='flex flex-col items-start justify-between border border-[#BFDBFE] rounded p-2 bg-[#FBF6F64A] text-sm'>
                        <label className='text-xs font-semibold'>Password</label>
                        <input type="password" className='text-[#53535394] font-semibold outline-none bg-transparent' {...register('password', { required: 'Required', minLength: {value: 8, message: 'Please enter 8 digit password'} })} placeholder='Password' />
                        <p className='text-xs text-red-600'>{errors.password?.message}</p>
                    </div>
                    <div className='flex flex-col items-start justify-between w-full col-start-1 space-y-1 '>
                        <input type="text" className={`${errors.firstName ? 'border border-red-600' : 'border border-[#BFDBFE]' } font-semibold outline-none rounded p-2 bg-[#FBF6F64A] text-sm`} {...register('firstName', { required: 'Required', minLength: {value: 2, message: 'Please enter your first name'} })} placeholder='First name' />
                        <p className='pl-2 text-xs text-red-600'>{errors.firstName?.message}</p>
                    </div>
                    <div className='flex flex-col items-start justify-between w-full space-y-1 '>
                        <input type="text" className={`${errors.lastName ? 'border border-red-600' : 'border border-[#BFDBFE]' } font-semibold rounded p-2 bg-[#FBF6F64A] text-sm outline-none`} {...register('lastName', { required: 'Required', minLength: {value: 2, message: 'Please enter your last name'} })} placeholder='Last name' />
                        <p className='pl-2 text-xs text-red-600'>{errors.lastName?.message}</p>
                    </div>
                    <div className='flex flex-col items-start justify-between w-full space-y-1'>
                        <Controller name="phone" control={control} rules={{ validate: (value) => isValidPhoneNumber(value) || 'Invalid number' , required: 'Required', }} render={({ field: { onChange, value } }) => (
                            <PhoneInput value={value} onChange={onChange} defaultCountry="US" className='phone-input' placeholder='Phone number' />
                            )}/>
                        <p className='pl-2 text-xs text-red-600'>{errors.phone?.message}</p>
                    </div>
                </div>
                <div className='flex items-center justify-between w-full'>
                    <button className='border border-[#5290F7] rounded text-xs text-[#535353] font-bold py-3 px-4 self-end'>PREVIOUS STEP</button>
                    <button className='bg-[#BFDBFE] rounded text-xs text-[#5290F7] font-bold py-3 px-4 self-end'>NEXT STEP</button>
                </div>
            </form>
        </section>
    </main>
  )
}

export default LoginPage