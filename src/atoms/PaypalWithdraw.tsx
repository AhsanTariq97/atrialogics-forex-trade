import React from 'react'

import { useForm } from 'react-hook-form';

const PaypalWithdraw = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<{Input1: string, Input2: string, Input3: string,}>();

  const onSubmit = (data: any) => {
    console.log(data)
  } 

  return (
    <div className='flex flex-col items-center justify-between space-y-12 text-[#535353] px-4 py-8 w-4/5 shadow-lg rounded-xl'>
        <h2 className='text-2xl font-bold text-[#535353]'>Paypal</h2>
        <form noValidate onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-start justify-between space-y-10 w-full max-w-[450px]'>
            <div className='flex flex-col items-start justify-between w-full'>
                <label className='text-sm font-bold'>Payment info</label>
                <input type="text" placeholder='Paypal account' {...register('Input1', {required: 'Enter your paypal account'})} className='text-xl font-medium border-b border-[#535353] w-full outline-none' />
                <p className='text-xs text-red-600'>{errors.Input1?.message}</p>
            </div>
            <div className='flex flex-col items-start justify-between w-full'>
              <input type="text" placeholder='Paypal account' {...register('Input2', {required: 'Enter your paypal account'})} className='text-xl font-medium border-b border-[#535353] w-full outline-none' />
              <p className='text-xs text-red-600'>{errors.Input2?.message}</p>
            </div>
            <div className='flex flex-col items-start justify-between w-full'>
              <input type="text" placeholder='Amount in USD' {...register('Input3', {required: 'Enter your amount'})} className='text-xl font-medium border-b border-[#535353] w-full outline-none' />
              <p className='text-xs text-red-600'>{errors.Input3?.message}</p>
            </div>
            <div className='flex flex-col items-start justify-between w-full space-y-4'>
                <p className='text-sm font-bold'>You will receive 0.00 USD</p>
                <button type='submit' className='w-full bg-[#2F80ED] text-sm font-bold rounded-lg text-white py-4'>WITHDRAW</button>
            </div>
        </form>
    </div>
  )
}

export default PaypalWithdraw