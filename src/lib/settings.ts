import SiteSettings from 'site.config.js'

export const getLocaleSettings = (locale: string | undefined): LocaleConfig => {
  if (locale) {
    const localeSetting = SiteSettings.locales.filter((value) => value.langName === locale)
    if (localeSetting.length > 1) {
      console.error('')
    }
    return localeSetting[0]
  }
  return SiteSettings.locales[0]
}

export const domain: string = SiteSettings.domain
export const meta: MetaConfig = SiteSettings.meta
