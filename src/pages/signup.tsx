import React from 'react'
import { useForm, Controller } from "react-hook-form";
import validator from 'validator';
import 'react-phone-number-input/style.css'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import { useRouter } from 'next/router';
import Link from 'next/link';
import axios from 'axios';
import { toast } from 'react-toastify';

const LoginPage = () => {

    function getFlagEmoji(countryCode: string) {
        return countryCode.toUpperCase().replace(/./g, char => 
            String.fromCodePoint(127397 + char.charCodeAt(0))
        );
    }

    const { handleSubmit, control, reset, formState: { errors } } = useForm<{ firstName: string, lastName: string, email: string, password: string, phone: string }>();

    const validateEmail = (email: string) => {
        if (validator.isEmail(email)) {
          return true
        } else {
          return 'Enter valid email'
        } 
    }

    const onSubmit = async (data: any) => {
        try {
            const response = await axios.post('https://tradingcrowd.net/api/register', {
                email: data.email,
                password: data.password,
                firstName: data.firstName,
                lastName: data.lastName,
                phone: data.phone,
            });
            
            if (response.data.status === 'error') {
                if (response.data.data.email) {
                    return toast.error(response.data.data.email[0])
                }
                return toast.error(response.data.message)
            }
            toast.success('Signup successful')
            console.log(response.data)
        } catch (error) {
            toast.error('Signup failed')
            console.error(error)
          }
        reset();
        router.push('/login');
    }

    const router = useRouter()

  return (
    <main className='bg-[#FFFFF4] h-screen'>
        <nav className='grid items-center grid-cols-3 px-4 py-8 mx-auto sm:px-16'>
            <h1 className='text-2xl font-extrabold text-[#003960]'>Trading Crowd</h1>
            <div className='flex items-center justify-end col-span-2 space-x-4 lg:col-start-3'>
                <div className='rounded border border-[#7EA1F9] text-[9px] flex justify-between items-center space-x-1 sm:space-x-2 px-1 sm:px-2'>
                    <p className='text-base'>{getFlagEmoji('gb')}</p>
                    <p>EN</p>
                </div>
                <p className='text-sm font-semibold text-[#003960]'>Already a user?</p>
                <Link href='/login'><button className='bg-[#5290F7] text-sm font-semibold rounded text-white py-2 px-6'>SIGN IN</button></Link>
            </div>
        </nav>
        <section className='flex flex-col items-center justify-center px-4 py-32 mx-auto space-y-8 md:flex-row md:space-y-0'>
            <div className='flex flex-col items-start justify-center col-span-2 px-8 space-y-4 md:items-end md:w-2/5'>
                <h1 className='text-4xl lg:text-6xl text-[#5290F7] font-bold md:text-right'>Open demo account</h1>
                <p className='text-lg lg:text-2xl text-[#003960] font-semibold'>Fill out registration form</p>
            </div>
            <form className='w-full md:w-3/5 flex flex-col items-start justify-between min-w-[320px] max-w-xl mx-auto px-6 py-4 rounded bg-[#EFF6FF] space-y-4 border border-[#BFDBFE]' onSubmit={handleSubmit(onSubmit)}>
                <h1 className='text-xl font-semibold'>Personal details</h1>
                <div className='grid w-full grid-cols-2 gap-3'>
                    <div className='flex flex-col items-start justify-between col-span-2'>
                        <div className={`${errors.email ? 'border border-red-600' : 'border border-[#BFDBFE]'} flex flex-col items-start w-full rounded p-2 bg-[#FBF6F64A] text-sm`}>
                            <label className='text-xs font-semibold'>Your email</label>
                            <Controller
                                name="email"
                                control={control}
                                defaultValue=""
                                rules={{ required: {value: true, message: 'Enter your email'}, validate: validateEmail }}
                                render={({ field }) => <input {...field} type="text" placeholder='name@gmail.com' className='text-[#53535394] font-semibold outline-none bg-transparent py-1 w-full' />}
                            />
                        </div>
                        <p className='pl-2 text-xs text-red-600'>{errors.email?.message}</p>
                    </div>
                    <div className='flex flex-col items-start justify-between col-span-2 xs:col-auto'>
                        <div className={`${errors.password ? 'border border-red-600' : 'border border-[#BFDBFE]'} flex flex-col items-start w-full rounded p-2 bg-[#FBF6F64A] text-sm`}>
                            <label className='text-xs font-semibold'>Password</label>
                            <Controller
                                name="password"
                                control={control}
                                defaultValue=""
                                rules={{ required: {value: true, message: 'Enter your password'}, minLength: {value:8, message: 'Password must be atleast 8 characters' } }}
                                render={({ field }) => <input {...field} type="password" placeholder='Password' className='text-[#53535394] font-semibold outline-none bg-transparent py-1' />}
                            />
                        </div>
                        <p className='pl-2 text-xs text-red-600'>{errors.password?.message}</p>
                    </div>
                    <div className='flex flex-col items-start justify-between w-full col-span-2 space-y-1 xs:col-start-1 xs:col-span-1'>
                        <Controller
                            name="firstName"
                            control={control}
                            defaultValue=""
                            rules={{ required: {value: true, message: 'Enter your first name'} }}
                            render={({ field }) => <input {...field} type='text' placeholder='First Name' className={`${errors.firstName ? 'border border-red-600' : 'border border-[#BFDBFE]' } font-semibold outline-none w-full rounded p-2 bg-[#FBF6F64A] text-sm`} />}
                        />
                        <p className='pl-2 text-xs text-red-600'>{errors.firstName?.message}</p>
                    </div>
                    <div className='flex flex-col items-start justify-between w-full col-span-2 col-start-1 space-y-1 xs:col-span-1 xs:col-start-2'>
                    <Controller
                        name="lastName"
                        control={control}
                        defaultValue=""
                        rules={{ required: {value: true, message: 'Enter your last name'} }}
                        render={({ field }) => <input {...field} type='text' placeholder='Last Name' className={`${errors.lastName ? 'border border-red-600' : 'border border-[#BFDBFE]' } font-semibold w-full rounded p-2 bg-[#FBF6F64A] text-sm outline-none`} />}
                    />
                        <p className='pl-2 text-xs text-red-600'>{errors.lastName?.message}</p>
                    </div>
                    <div className='flex flex-col items-start justify-between w-full col-span-2 space-y-1 xs:col-span-1'>
                        <div className={`${errors.phone ? 'border border-red-600' : 'border border-[#BFDBFE]'} rounded w-full`}>
                            <Controller name="phone" control={control} rules={{ validate: (value) => isValidPhoneNumber(value) || 'Invalid number' , required: 'Enter your number', }} render={({ field: { onChange, value } }) => (
                                <PhoneInput value={value} onChange={onChange} defaultCountry="US" className='w-full phone-input' placeholder='Phone number' />
                            )}/>
                        </div>
                        <p className='pl-2 text-xs text-red-600'>{errors.phone?.message}</p>
                    </div>
                </div>
                <div className='flex items-center justify-between w-full'>
                    <button className='border border-[#5290F7] rounded text-xs text-[#535353] font-bold py-3 px-4 self-end' disabled>PREVIOUS STEP</button>
                    <button className='bg-[#BFDBFE] rounded text-xs text-[#5290F7] font-bold py-3 px-4 self-end'>NEXT STEP</button>
                </div>
            </form>
        </section>
    </main>
  )
}

export default LoginPage