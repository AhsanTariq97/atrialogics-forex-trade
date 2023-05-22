import axios from 'axios';
import { useRouter } from 'next/router';
import React from 'react'
import { IoClose } from 'react-icons/io5';
import { toast } from 'react-toastify';
import Cookies from 'universal-cookie'


const LogoutModal = ({setLogoutModal}: {setLogoutModal: any}) => {
    
    const cookies = new Cookies()
  
    const handleLogout = async () => {
        try {
            const token = cookies.get('token')

            const response = await axios.post('https://tradingcrowd.net/api/login', null, {
                headers: {
                  Authorization: `Bearer ${token}`
                }
            });

            console.log(response)

            if (response.statusText == 'OK') {
              toast.success('Logout successful');
              
              cookies.remove('token')
              router.push('/login');
              
              console.log('Logout', response.data)
            } 
          } catch (error) {
            console.error(error)
            toast.error('Logout failed');
          }
    }

    const router = useRouter();
    
  return (
    <div className='fixed z-30 flex flex-col items-center justify-between max-w-xl px-8 py-10 space-y-8 -translate-x-1/2 -translate-y-1/2 sm:w-1/2 md:py-16 top-1/2 left-1/2 rounded-xl bg-gradient'>
        <h2 className='text-2xl font-bold text-center md:text-left'>Confirm Logout</h2>
        <div className='flex items-center justify-between space-x-8'>
            <button className='px-4 py-2 text-xl font-semibold bg-red-500 rounded' onClick={handleLogout}>Logout</button>
            <button className='px-4 py-2 text-xl font-semibold border rounded' onClick={() => setLogoutModal(false)}>Cancel</button>
        </div>
        <button className='absolute p-1 rounded -top-4 right-2' onClick={() => setLogoutModal(false)}><IoClose size={25} /></button>
    </div>
  )
}

export default LogoutModal