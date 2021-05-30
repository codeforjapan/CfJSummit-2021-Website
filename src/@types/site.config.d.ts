interface LocaleConfig {
  langName: string
  timeZone: string
  siteDescription: string
  siteName: string
  siteKeyWord: string
}
interface MetaConfig {
  noindex: boolean
  facebook: {
    appID: string
  }
  twitter: {
    siteUsername: string
    creatorUsername: string
  }
}
interface SiteSetting {
  domain: string
  meta: MetaConfig
  locales: [LocaleConfig, ...LocaleConfig[]]
}

declare module 'site.config.js' {
  const SiteSettings: SiteSetting
  export default SiteSettings
}
