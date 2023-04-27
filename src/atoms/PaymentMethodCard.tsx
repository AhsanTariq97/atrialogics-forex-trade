import React from 'react'
import Image from 'next/image'

const PaymentMethodCard = ({img, text, paymentMethod, setPaymentMethod}: {img: string, text: string, paymentMethod: string, setPaymentMethod: React.Dispatch<React.SetStateAction<string>>}) => {
  
    const onPaymentMethodClick = (e: any) => {
        setPaymentMethod(e.target.textContent)
    }

  return (
    <button className={`${paymentMethod === text && 'bg-[#B3CDF0]' } border border-[#D9D9D9] rounded-xl w-40 h-40 flex flex-col justify-start pt-8 mx-2 my-2 items-center space-y-3`} onClick={onPaymentMethodClick}>
        <Image src={img} className='h-12 pointer-events-none' alt='' width={50} height={50} />
        <p className='px-2 font-bold text-center'>{text}</p>
    </button>
  )
}

export default PaymentMethodCard