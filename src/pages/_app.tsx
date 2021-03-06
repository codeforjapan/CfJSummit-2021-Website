import { AppProps } from 'next/app'
import '~/styles/globals.scss'
import Script from 'next/script'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { pageview } from '~/lib/gtag.js'
import 'dayjs/locale/ja'
import 'dayjs/locale/en'
import 'dayjs/locale/zh-tw'
import 'dayjs/locale/zh-cn'

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
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      />
      <Script
        dangerouslySetInnerHTML={{
          __html: `  window.dataLayer = window.dataLayer || [];
                     function gtag(){dataLayer.push(arguments);}
                     gtag('js', new Date());
                    
                     gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');`,
        }}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
