import React from 'react'

const QuestionnaireForm = ({ register, errors }: {register: any, errors: any }) => {
  return (
    <div className='flex flex-col items-start justify-between w-full space-y-3'>
        <h2 className='text-[#52c2e4] text-xl font-bold pb-2'>Questionnaire</h2>
        <div>
            <p className='font-semibold'>How often have you traded Futures, Options or ETFs in the last 12 months?</p>
            <label><input className='mr-2' type="radio" name='future-trade-frequency' value='frequently' id='frequently' {...register("futureTradeFrequency", { required: "Please select an option" })} />
            Frequently</label><br />
            <label><input className='mr-2' type="radio" name='future-trade-frequency' value='regularly' id='regularly' {...register("futureTradeFrequency", { required: "Please select an option" })} />
            Regularly</label><br />
            <label><input className='mr-2' type="radio" name='future-trade-frequency' value='occasionally' id='occasionally' {...register("futureTradeFrequency", { required: "Please select an option" })} />
            Occasionally</label><br />
            <label><input className='mr-2' type="radio" name='future-trade-frequency' value='never' id='never' {...register("futureTradeFrequency", { required: "Please select an option" })} />
            Never</label>
            {errors.futureTradeFrequency && <p className='text-xs text-red-600'>{errors.futureTradeFrequency?.message}</p>}
        </div>
        <div>
            <p className='font-semibold'>How often have you traded Spread Bets, CFDs or margined FX in the last 12 months?</p>
            <label> <input className='mr-2' type="radio" name='spread-bets-frequency' value='frequently' id='frequently' {...register("spreadBetsFrequency", { required: "Please select an option" })} />
            Frequently</label><br />
            <label> <input className='mr-2' type="radio" name='spread-bets-frequency' value='regularly' id='regularly' {...register("spreadBetsFrequency", { required: "Please select an option" })} />
            Regularly</label><br />
            <label> <input className='mr-2' type="radio" name='spread-bets-frequency' value='occasionally' id='occasionally' {...register("spreadBetsFrequency", { required: "Please select an option" })} />
            Occasionally</label><br />
            <label> <input className='mr-2' type="radio" name='spread-bets-frequency' value='never' id='never' {...register("spreadBetsFrequency", { required: "Please select an option" })} />
            Never</label>
            {errors.spreadBetsFrequency && <p className='text-xs text-red-600'>{errors.spreadBetsFrequency?.message}</p>}
        </div>
        <div>
            <p className='font-semibold'>Do you have work experience that provides you with a good understanding of trading Spread Bets or CFDs?</p>
            <label><input className='mr-2' type="radio" name='work-experience' value='yes' id='yes' {...register("workExperience", { required: "Please select an option" })} />
            Yes</label><br />
            <label><input className='mr-2' type="radio" name='work-experience' value='no' id='no' {...register("workExperience", { required: "Please select an option" })} />
            No</label><br />
            {errors.workExperience && <p className='text-xs text-red-600'>{errors.workExperience?.message}</p>}
        </div>
        <div>
            <p className='font-semibold'>Do you have qualifications that assist your understanding of CFDs?</p>
            <label><input className='mr-2' type="radio" name='qualifications' value='yes' id='yes' {...register("qualifications", { required: "Please select an option" })} />
            Yes</label><br />
            <label><input className='mr-2' type="radio" name='qualifications' value='no' id='no' {...register("qualifications", { required: "Please select an option" })} />
            No</label><br />
            {errors.qualifications && <p className='text-xs text-red-600'>{errors.qualifications?.message}</p>}
        </div>
    </div>
  )
}

export default QuestionnaireForm