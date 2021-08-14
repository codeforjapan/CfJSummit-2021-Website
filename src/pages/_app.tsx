import { AppProps } from 'next/app'
import '~/styles/globals.scss'
import Script from 'next/script'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { pageview } from '~/lib/gtag.js'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-E7J490JHM0" />
      <Script
        dangerouslySetInnerHTML={{
          __html: `  window.dataLayer = window.dataLayer || [];
                     function gtag(){dataLayer.push(arguments);}
                     gtag('js', new Date());
                    
                     gtag('config', 'G-E7J490JHM0');`,
        }}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
