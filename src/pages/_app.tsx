import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import ChartStoreProvider from '../utils/chartStore'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChartStoreProvider>
      <Component {...pageProps} />
      <ToastContainer />
    </ChartStoreProvider>
  )
}
