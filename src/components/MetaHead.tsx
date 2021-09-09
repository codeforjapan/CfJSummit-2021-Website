import { VFC } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { domain, getLocaleSettings, meta } from '~/lib/settings'

const MetaHead: VFC<MetaHeadProps> = ({
  title,
  description,
  keywords,
  ogpImage,
  path,
  isTop,
  noindex,
}: MetaHeadProps) => {
  const { locale } = useRouter()
  return (
    <Head>
      <title>
        {title ? `${title} | ` : ''}
        {getLocaleSettings(locale).siteName}
      </title>
      <meta
        property="og:title"
        content={(title ? `${title} | ` : '') + getLocaleSettings(locale).siteName}
      />
      {meta.noindex || noindex ? <meta name="robots" content="noindex" /> : undefined}
      <meta
        name="description"
        content={description ? description : getLocaleSettings(locale).siteDescription}
      />
      <meta
        property="og:description"
        content={description ? description : getLocaleSettings(locale).siteDescription}
      />
      <meta name="keywords" content={keywords ? keywords : getLocaleSettings(locale).siteKeyWord} />
      <meta property="og:type" content={isTop ? 'website' : 'article'} />
      <meta property="og:url" content={path ? `https://${domain}/${path}` : `https://${domain}/`} />
      <meta
        property="og:image"
        content={ogpImage ? `https://${domain}/${ogpImage}` : `https://${domain}/OGP.png`}
      />
      <meta
        property="og:site_name"
        content={(title ? `${title} | ` : '') + getLocaleSettings(locale).siteName}
      />
      <meta name="twitter:card" content="summary_large_image" />
      {meta.twitter.siteUsername ? (
        <meta name="twitter:site" content={meta.twitter.siteUsername} />
      ) : undefined}
      {meta.twitter.siteUsername ? (
        <meta name="twitter:creator" content={meta.twitter.creatorUsername} />
      ) : undefined}
      <meta
        name="twitter:url"
        content={path ? `https://${domain}/${path}` : `https://${domain}/`}
      />
      {meta.facebook.appID ? (
        <meta property="fb:app_id" content={meta.facebook.appID} />
      ) : undefined}
      <meta
        name="twitter:title"
        content={(title ? `${title} | ` : '') + getLocaleSettings(locale).siteName}
      />
      <meta
        name="twitter:description"
        content={description ? description : getLocaleSettings(locale).siteDescription}
      />
      <meta
        name="twitter:image"
        content={ogpImage ? `https://${domain}/${ogpImage}` : `https://${domain}/OGP.png`}
      />
      <link rel="canonical" href={path ? `https://${domain}/${path}` : `https://${domain}/`} />
      <link rel="shortcut icon" href={`https://${domain}/favicon.ico`} />
      <link rel="apple-touch-icon" href={`https://${domain}/logo.png`} />
    </Head>
  )
}

export default MetaHead
