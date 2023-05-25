import React, { ReactNode, useEffect, useState } from 'react'
import { useFormContext } from "react-hook-form";

const QuestionnaireForm = ({retrievedData}: {retrievedData: any}) => {

    const { register, setValue, formState: {errors} } = useFormContext();

    const [futureTradeFrequency, setFutureTradeFrequency] = useState('');
    const [spreadBetsFrequency, setSpreadBetsFrequency] = useState('');
    const [workExperience, setWorkExperience] = useState('');
    const [qualifications, setQualifications] = useState('');

    useEffect(() => {
        if (retrievedData && retrievedData.futureTradeFrequency) {
            setFutureTradeFrequency(retrievedData.futureTradeFrequency)
            setValue('futureTradeFrequency', retrievedData.futureTradeFrequency)
        }
        if (retrievedData && retrievedData.spreadBetsFrequency) {
            setSpreadBetsFrequency(retrievedData.spreadBetsFrequency)
            setValue('spreadBetsFrequency', retrievedData.spreadBetsFrequency)
        }
        if (retrievedData && retrievedData.workExperience) {
            setWorkExperience(retrievedData.workExperience)
            setValue('workExperience', retrievedData.workExperience)
        }
        if (retrievedData && retrievedData.qualifications) {
            setQualifications(retrievedData.qualifications)
            setValue('qualifications', retrievedData.qualifications)
        }
    }, [retrievedData, setValue]);

    const handleRadioChange = (value: string, groupName: string) => {
        switch (groupName) {
            case 'futureTradeFrequency':
              setFutureTradeFrequency(value);
              setValue('futureTradeFrequency', value);
              break;
            case 'spreadBetsFrequency':
              setSpreadBetsFrequency(value);
              setValue('spreadBetsFrequency', value);
              break;
            case 'workExperience':
              setWorkExperience(value);
              setValue('workExperience', value);
              break;
            case 'qualifications':
              setQualifications(value);
              setValue('qualifications', value);
              break;
            default:
              break;
          }
    };


  return (
    <div className='flex flex-col items-start justify-between w-full space-y-3'>
        <h2 className='text-[#52c2e4] text-xl font-bold pb-2'>Questionnaire</h2>
        <div>
            <p className='font-semibold'>How often have you traded Futures, Options or ETFs in the last 12 months?</p>
            <label htmlFor='frequently1'><input 
                className='mr-2' type="radio" id='frequently1' 
                value='Frequently'
                defaultChecked={futureTradeFrequency === 'Frequently'}
                onClick={() => handleRadioChange('Frequently', 'futureTradeFrequency')}
                {...register("futureTradeFrequency", { required: "Please select an option" })} 
            />
            Frequently</label><br />
            <label htmlFor='regularly1'><input 
                className='mr-2' type="radio" id='regularly1' 
                value='Regularly'
                defaultChecked={futureTradeFrequency === 'Regularly'}
                onClick={() => handleRadioChange('Regularly', 'futureTradeFrequency')}
                {...register("futureTradeFrequency", { required: "Please select an option" })} 
                />
            Regularly</label><br />
            <label htmlFor='occasionally1'><input 
                className='mr-2' type="radio" id='occasionally1' 
                value='Occasionally'
                defaultChecked={futureTradeFrequency === 'Occasionally'}
                onClick={() => handleRadioChange('Occasionally', 'futureTradeFrequency')}
                {...register("futureTradeFrequency", { required: "Please select an option" })} 
            />
            Occasionally</label><br />
            <label htmlFor='never1'><input 
                className='mr-2' type="radio" id='never1' 
                value='Never'
                defaultChecked={futureTradeFrequency === 'Never'}
                onClick={() => handleRadioChange('Never', 'futureTradeFrequency')}
                {...register("futureTradeFrequency", { required: "Please select an option" })} 
            />
            Never</label>
            {errors.futureTradeFrequency && <p className='text-xs text-red-600'>{errors.futureTradeFrequency?.message as ReactNode}</p>}
        </div>
        <div>
            <p className='font-semibold'>How often have you traded Spread Bets, CFDs or margined FX in the last 12 months?</p>
            <label htmlFor='frequently2'><input 
                className='mr-2' type="radio" id='frequently2' 
                value='Frequently'
                defaultChecked={spreadBetsFrequency === 'Frequently'}
                onClick={() => handleRadioChange('Frequently', 'spreadBetsFrequency')}
                {...register("spreadBetsFrequency", { required: "Please select an option" })} 
            />
            Frequently</label><br />
            <label htmlFor='regularly2'><input 
                className='mr-2' type="radio" id='regularly2' 
                value='Regularly'
                defaultChecked={spreadBetsFrequency === 'Regularly'}
                onClick={() => handleRadioChange('Regularly', 'spreadBetsFrequency')}
                {...register("spreadBetsFrequency", { required: "Please select an option" })} 
                />
            Regularly</label><br />
            <label htmlFor='occasionally2'><input 
                className='mr-2' type="radio" id='occasionally2' 
                value='Occasionally'
                defaultChecked={spreadBetsFrequency === 'Occasionally'}
                onClick={() => handleRadioChange('Occasionally', 'spreadBetsFrequency')}
                {...register("spreadBetsFrequency", { required: "Please select an option" })} 
            />
            Occasionally</label><br />
            <label htmlFor='never2'><input 
                className='mr-2' type="radio" id='never2' 
                value='Never'
                defaultChecked={spreadBetsFrequency === 'Never'}
                onClick={() => handleRadioChange('Never', 'spreadBetsFrequency')}
                {...register("spreadBetsFrequency", { required: "Please select an option" })} 
            />
            Never</label>
            {errors.spreadBetsFrequency && <p className='text-xs text-red-600'>{errors.spreadBetsFrequency?.message as ReactNode}</p>}
        </div>
        <div>
            <p className='font-semibold'>Do you have work experience that provides you with a good understanding of trading Spread Bets or CFDs?</p>
            <label htmlFor='yes1'><input 
                className='mr-2' type="radio" id='yes1' 
                value='Yes'
                defaultChecked={workExperience === 'Yes'}
                onClick={() => handleRadioChange('Yes', 'workExperience')}
                {...register("workExperience", { required: "Please select an option" })} 
            />
            Yes</label><br />
            <label htmlFor='no1'><input 
                className='mr-2' type="radio" id='no1' 
                value='No'
                defaultChecked={workExperience === 'No'}
                onClick={() => handleRadioChange('No', 'workExperience')}
                {...register("workExperience", { required: "Please select an option" })} 
                />
            No</label>
            {errors.workExperience && <p className='text-xs text-red-600'>{errors.workExperience?.message as ReactNode}</p>}
        </div>
        <div>
            <p className='font-semibold'>Do you have qualifications that assist your understanding of CFDs?</p>
            <label htmlFor='yes2'><input 
                className='mr-2' type="radio" id='yes2'
                value='Yes'
                defaultChecked={qualifications === 'Yes'}
                onClick={() => handleRadioChange('Yes', 'qualifications')}
                {...register("qualifications", { required: "Please select an option" })} 
            />
            Yes</label><br />
            <label htmlFor='no2'><input 
                className='mr-2' type="radio" id='no2'
                value='No'
                defaultChecked={qualifications === 'No'}
                onClick={() => handleRadioChange('No', 'qualifications')}
                {...register("qualifications", { required: "Please select an option" })} 
                />
            No</label>
            {errors.qualifications && <p className='text-xs text-red-600'>{errors.qualifications?.message as ReactNode}</p>}
        </div>
    </div>
  )
}

export default QuestionnaireForm