import { AppProps } from 'next/app'
import '~/styles/globals.scss'
import Head from 'next/head'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
