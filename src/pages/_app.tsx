import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import ChartStoreProvider from '../utils/chartStore'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChartStoreProvider>
      <Component {...pageProps} />
    </ChartStoreProvider>
  )
}
