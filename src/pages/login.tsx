import Head from 'next/head'
import Link from 'next/link';
import { useForm, Controller } from "react-hook-form";
import validator from 'validator';
import { useRouter } from 'next/router';
import axios from 'axios';
import { toast } from 'react-toastify';
import Cookies from 'universal-cookie';


const LoginPage = () => {
  
  const router = useRouter();
  
  const cookies = new Cookies();

  const checkToken = () => {
    const token = cookies.get('token');
    if (token) {
      router.push('/profile');
    }
  };

  checkToken();

  function getFlagEmoji(countryCode: string) {
    return countryCode.toUpperCase().replace(/./g, char => 
        String.fromCodePoint(127397 + char.charCodeAt(0))
    );
  }

  const { handleSubmit, reset, control, formState: { errors } } = useForm<{ email: string, password: string }>();
  

  const validateEmail = (email: string) => {
    if (validator.isEmail(email)) {
      return true
    } else {
      return 'Enter valid email'
    } 
  }

  const onSubmit = async (data: {email: string, password: string}) => {
    validateEmail(data.email)

    try {
      const response = await axios.post('https://tradingcrowd.net/api/login', {
        email: data.email,
        password: data.password
      });

      if (response.data.status === 'error') {
        if (response.data.data.email) {
          return toast.error(response.data.data.email[0])
        }
        console.log(response.data)
        return toast.error(response.data.message);
      } else if (response.data.status === 'false') {
        console.log(response.data)
        return toast.error(response.data.message);
      } 

      const token = response.data.token
      cookies.set('token', token, { path: '/' })

      toast.success('Login successful')

      reset();
      router.push('/profile')
      
      console.log(response.data)

    } catch (error) {
      console.error(error)
      toast.error('Login failed');
    }
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <div className='bg-[#FFFFF4] h-screen flex justify-center items-center'>
        <div className='border border-[#5290F7] rounded p-8 max-w-md mx-auto'>
            <form className='flex flex-col items-center justify-between w-full p-8 rounded bg-[#EFF6FF] space-y-8' onSubmit={handleSubmit(onSubmit)}>
                <h1 className='text-4xl font-extrabold text-[#5290F7]'>Trading Crowd</h1>
                <div className='w-full space-y-2'>
                    <div className='flex flex-col items-start justify-between w-full space-y-1'>
                        <label htmlFor='email' className='pl-0.5 text-xs'>Email</label>
                        <Controller
                            name="email"
                            control={control}
                            defaultValue=""
                            rules={{ required: {value: true, message: 'Enter your email'}, validate: validateEmail }}
                            render={({ field }) => <input {...field} type="text" placeholder='name@gmail.com' className={`${errors.email ? 'border border-red-600' : '' } border border-[#BFDBFE] rounded p-2 w-full bg-[#FFFFF4]`} />}
                        />
                        <p className='pl-2 text-xs text-red-600'>{errors.email?.message}</p>
                    </div>
                    <div className='flex flex-col items-start justify-between w-full space-y-1'>
                        <label htmlFor="password" className='pl-0.5 text-xs'>PASSWORD</label>
                        <Controller
                            name="password"
                            control={control}
                            defaultValue=""
                            rules={{ required: {value: true, message: 'Enter your password'}, minLength: {value:6, message: 'Password must be atleast 8 characters' } }}
                            render={({ field }) => <input {...field} type="password" placeholder='Password' className='border border-[#BFDBFE] rounded p-2 w-full bg-[#FFFFF4]' />}
                        />
                        <p className='pl-2 text-xs text-red-600'>{errors.password?.message}</p>
                        <p className='self-end text-xs font-medium'>Forgot your password?</p>
                    </div>
                </div>
                <button className='bg-[#5290F7] rounded w-full text-[#FFFFF4] font-semibold py-3'>SIGN IN</button>
            </form>
            <div className='flex flex-col items-center justify-between py-2 space-y-2'>
                <p className='pb-2 text-sm font-medium'>Don't have an account?</p>
                <Link className='w-full' href='/signup'><button className='text-[#5290F7] rounded w-full border border-[#7EA1F9] text-sm font-extrabold py-3'>TRY DEMO</button></Link>
                <div className='rounded border border-[#7EA1F9] text-[9px] flex justify-between items-center space-x-2 px-2'>
                    <p className='text-base'>{getFlagEmoji('gb')}</p>
                    <p>EN</p>
                </div>
            </div>
        </div>
      </div>
      </main>
    </>
  )
}

export default LoginPage