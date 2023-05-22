import React, { ReactNode } from 'react'
import { useFormContext } from "react-hook-form";

const QuestionnaireForm = ({retrievedData}: {retrievedData: any}) => {

    const { register, formState: {errors} } = useFormContext();

  return (
    <div className='flex flex-col items-start justify-between w-full space-y-3'>
        <h2 className='text-[#52c2e4] text-xl font-bold pb-2'>Questionnaire</h2>
        <div>
            <p className='font-semibold'>How often have you traded Futures, Options or ETFs in the last 12 months?</p>
            <label><input 
                className='mr-2' type="radio" value='Frequently' id='frequently1' 
                defaultValue={retrievedData && retrievedData.futureTradeFrequency === 'Frequently'}
                {...register("futureTradeFrequency", { required: "Please select an option" })} 
            />
            Frequently</label><br />
            <label><input 
                className='mr-2' type="radio" value='Regularly' id='regularly1' 
                defaultValue={retrievedData && retrievedData.futureTradeFrequency === 'Regularly'}
                {...register("futureTradeFrequency", { required: "Please select an option" })} 
                />
            Regularly</label><br />
            <label><input 
                className='mr-2' type="radio" value='Occasionally' id='occasionally1' 
                defaultValue={retrievedData && retrievedData.futureTradeFrequency === 'Occasionally'}
                {...register("futureTradeFrequency", { required: "Please select an option" })} 
            />
            Occasionally</label><br />
            <label><input 
                className='mr-2' type="radio" value='Never' id='never1' 
                defaultValue={retrievedData && retrievedData.futureTradeFrequency === 'Never'}
                {...register("futureTradeFrequency", { required: "Please select an option" })} 
            />
            Never</label>
            {errors.futureTradeFrequency && <p className='text-xs text-red-600'>{errors.futureTradeFrequency?.message as ReactNode}</p>}
        </div>
        <div>
            <p className='font-semibold'>How often have you traded Spread Bets, CFDs or margined FX in the last 12 months?</p>
            <label><input 
                className='mr-2' type="radio" value='Frequently' id='frequently2' 
                defaultValue={retrievedData && retrievedData.spreadBetsFrequency === 'Frequently'}
                {...register("spreadBetsFrequency", { required: "Please select an option" })} 
            />
            Frequently</label><br />
            <label><input 
                className='mr-2' type="radio" value='Regularly' id='regularly2' 
                defaultValue={retrievedData && retrievedData.spreadBetsFrequency === 'Regularly'}
                {...register("spreadBetsFrequency", { required: "Please select an option" })} 
                />
            Regularly</label><br />
            <label><input 
                className='mr-2' type="radio" value='Occasionally' id='occasionally2' 
                defaultValue={retrievedData && retrievedData.spreadBetsFrequency === 'Occasionally'}
                {...register("spreadBetsFrequency", { required: "Please select an option" })} 
            />
            Occasionally</label><br />
            <label><input 
                className='mr-2' type="radio" value='Never' id='never2' 
                defaultValue={retrievedData && retrievedData.spreadBetsFrequency === 'Never'}
                {...register("spreadBetsFrequency", { required: "Please select an option" })} 
            />
            Never</label>
            {errors.spreadBetsFrequency && <p className='text-xs text-red-600'>{errors.spreadBetsFrequency?.message as ReactNode}</p>}
        </div>
        <div>
            <p className='font-semibold'>Do you have work experience that provides you with a good understanding of trading Spread Bets or CFDs?</p>
            <label><input 
                className='mr-2' type="radio" value='Yes' id='yes1' 
                defaultValue={retrievedData && retrievedData.workExperience === 'Yes'}
                {...register("workExperience", { required: "Please select an option" })} 
            />
            Yes</label><br />
            <label><input 
                className='mr-2' type="radio" value='No' id='no1' 
                defaultValue={retrievedData && retrievedData.workExperience === 'No'}
                {...register("workExperience", { required: "Please select an option" })} 
                />
            No</label>
            {errors.workExperience && <p className='text-xs text-red-600'>{errors.workExperience?.message as ReactNode}</p>}
        </div>
        <div>
            <p className='font-semibold'>Do you have qualifications that assist your understanding of CFDs?</p>
            <label><input 
                className='mr-2' type="radio" value='Yes' id='yes2' 
                defaultValue={retrievedData && retrievedData.qualifications === 'Yes'}
                {...register("qualifications", { required: "Please select an option" })} 
            />
            Yes</label><br />
            <label><input 
                className='mr-2' type="radio" value='No' id='no2' 
                defaultValue={retrievedData && retrievedData.qualifications === 'No'}
                {...register("qualifications", { required: "Please select an option" })} 
                />
            No</label>
            {errors.qualifications && <p className='text-xs text-red-600'>{errors.qualifications?.message as ReactNode}</p>}
        </div>
    </div>
  )
}

export default QuestionnaireForm