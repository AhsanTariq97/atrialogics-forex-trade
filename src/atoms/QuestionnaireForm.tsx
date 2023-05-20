import React, { ReactNode } from 'react'
import { Controller, useFormContext } from "react-hook-form";

const QuestionnaireForm = ({retrievedData}: {retrievedData: any}) => {

    const { control, formState: {errors} } = useFormContext();

  return (
    <div className='flex flex-col items-start justify-between w-full space-y-3'>
        <h2 className='text-[#52c2e4] text-xl font-bold pb-2'>Questionnaire</h2>
        <div>
            <p className='font-semibold'>How often have you traded Futures, Options or ETFs in the last 12 months?</p>
            <div className='flex space-x-2 w-max'>
                <Controller
                    name="futureTradeFrequency"
                    control={control}
                    defaultValue= {retrievedData ? retrievedData.futureTradeFrequency : ''}
                    rules={{ required: 'Please select an option' }}
                    render={({ field }) => <input {...field} type='radio' id='frequently1' checked={retrievedData.futureTradeFrequency === 'Frequently'} value='Frequently' className='font-medium border-b border-[#52c2e4] w-full' />}
                    />
                <label htmlFor='frequently1'>Frequently</label>
            </div>
            <div className='flex space-x-2 w-max'>
                <Controller
                    name="futureTradeFrequency"
                    control={control}
                    defaultValue= {retrievedData ? retrievedData.futureTradeFrequency : ''}
                    rules={{ required: 'Please select an option' }}
                    render={({ field }) => <input {...field} type='radio' id='regularly1' checked={retrievedData.futureTradeFrequency === 'Regularly'} value='Regularly' className='font-medium border-b border-[#52c2e4] w-full' />}
                    />
                <label htmlFor='regularly1'>Regularly</label>
            </div>
            <div className='flex space-x-2 w-max'>
                <Controller
                    name="futureTradeFrequency"
                    control={control}
                    defaultValue= {retrievedData ? retrievedData.futureTradeFrequency : ''}
                    rules={{ required: 'Please select an option' }}
                    render={({ field }) => <input {...field} type='radio' id='occasionally1' checked={retrievedData.futureTradeFrequency === 'Occasionally'} value='Occasionally' className='font-medium border-b border-[#52c2e4] w-full' />}
                    />
                <label htmlFor='occasionally1'>Occasionally</label>
            </div>
            <div className='flex space-x-2 w-max'>
                <Controller
                    name="futureTradeFrequency"
                    control={control}
                    defaultValue= {retrievedData ? retrievedData.futureTradeFrequency : ''}
                    rules={{ required: 'Please select an option' }}
                    render={({ field }) => <input {...field} type='radio' id='never1' checked={retrievedData.futureTradeFrequency === 'Never'} value='Never' className='font-medium border-b border-[#52c2e4] w-full' />}
                    />
                <label htmlFor='never1'>Never</label>
            </div>
            {errors.futureTradeFrequency && <p className='text-xs text-red-600'>{errors.futureTradeFrequency?.message as ReactNode}</p>}
        </div>
        <div>
            <p className='font-semibold'>How often have you traded Spread Bets, CFDs or margined FX in the last 12 months?</p>
            <div className='flex space-x-2 w-max'>
                <Controller
                    name="spreadBetsFrequency"
                    control={control}
                    defaultValue= {retrievedData ? retrievedData.spreadBetsFrequency : ''}
                    rules={{ required: 'Please select an option' }}
                    render={({ field }) => <input {...field} type='radio' id='frequently2' checked={retrievedData.spreadBetsFrequency === 'Frequently'} value='Frequently' className='font-medium border-b border-[#52c2e4] w-full' />}
                    />
                <label htmlFor='frequently2'>Frequently</label>
            </div>
            <div className='flex space-x-2 w-max'>
                <Controller
                    name="spreadBetsFrequency"
                    control={control}
                    defaultValue= {retrievedData ? retrievedData.spreadBetsFrequency : ''}
                    rules={{ required: 'Please select an option' }}
                    render={({ field }) => <input {...field} type='radio' id='regularly2' checked={retrievedData.spreadBetsFrequency === 'Regularly'} value='Regularly' className='font-medium border-b border-[#52c2e4] w-full' />}
                    />
                <label htmlFor='regularly2'>Regularly</label>
            </div>
            <div className='flex space-x-2 w-max'>
                <Controller
                    name="spreadBetsFrequency"
                    control={control}
                    defaultValue= {retrievedData ? retrievedData.spreadBetsFrequency : ''}
                    rules={{ required: 'Please select an option' }}
                    render={({ field }) => <input {...field} type='radio' id='occasionally2' checked={retrievedData.spreadBetsFrequency === 'Occasionally'} value='Occasionally' className='font-medium border-b border-[#52c2e4] w-full' />}
                    />
                <label htmlFor='occasionally2'>Occasionally</label>
            </div>
            <div className='flex space-x-2 w-max'>
                <Controller
                    name="spreadBetsFrequency"
                    control={control}
                    defaultValue= {retrievedData ? retrievedData.spreadBetsFrequency : ''}
                    rules={{ required: 'Please select an option' }}
                    render={({ field }) => <input {...field} type='radio' id='never2' checked={retrievedData.spreadBetsFrequency === 'Never'} value='Never' className='font-medium border-b border-[#52c2e4] w-full' />}
                    />
                <label htmlFor='never2'>Never</label>
            </div>
            {errors.spreadBetsFrequency && <p className='text-xs text-red-600'>{errors.spreadBetsFrequency?.message as ReactNode}</p>}
        </div>
        <div>
            <p className='font-semibold'>Do you have work experience that provides you with a good understanding of trading Spread Bets or CFDs?</p>
            <div className='flex space-x-2 w-max'>
                <Controller
                    name="workExperience"
                    control={control}
                    defaultValue= {retrievedData ? retrievedData.workExperience : ''}
                    rules={{ required: 'Please select an option' }}
                    render={({ field }) => <input {...field} type='radio' id='yes1' checked={retrievedData.workExperience === 'Yes'} value='Yes' className='font-medium border-b border-[#52c2e4] w-full' />}
                    />
                <label htmlFor='yes1'>Yes</label>
            </div>
            <div className='flex space-x-2 w-max'>
                <Controller
                    name="workExperience"
                    control={control}
                    defaultValue= {retrievedData ? retrievedData.workExperience : ''}
                    rules={{ required: 'Please select an option' }}
                    render={({ field }) => <input {...field} type='radio' id='no1' checked={retrievedData.workExperience === 'No'} value='No' className='font-medium border-b border-[#52c2e4] w-full' />}
                    />
                <label htmlFor='no1'>No</label>
            </div>
            {errors.workExperience && <p className='text-xs text-red-600'>{errors.workExperience?.message as ReactNode}</p>}
        </div>
        <div>
            <p className='font-semibold'>Do you have qualifications that assist your understanding of CFDs?</p>
            <div className='flex space-x-2 w-max'>
                <Controller
                    name="qualifications"
                    control={control}
                    defaultValue= {retrievedData ? retrievedData.qualifications : ''}
                    rules={{ required: 'Please select an option' }}
                    render={({ field }) => <input {...field} type='radio' id='yes2' checked={retrievedData.qualifications === 'Yes'} value='Yes' className='font-medium border-b border-[#52c2e4] w-full' />}
                    />
                <label htmlFor='yes2'>Yes</label>
            </div>
            <div className='flex space-x-2 w-max'>
                <Controller
                    name="qualifications"
                    control={control}
                    defaultValue= {retrievedData ? retrievedData.qualifications : ''}
                    rules={{ required: 'Please select an option' }}
                    render={({ field }) => <input {...field} type='radio' id='no2' checked={retrievedData.qualifications === 'No'} value='No' className='font-medium border-b border-[#52c2e4] w-full' />}
                    />
                <label htmlFor='no2'>No</label>
            </div>
            {errors.qualifications && <p className='text-xs text-red-600'>{errors.qualifications?.message as ReactNode}</p>}
        </div>
    </div>
  )
}

export default QuestionnaireForm