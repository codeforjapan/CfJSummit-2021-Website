import SiteSettings from 'site.config.js'

export const getLocaleSettings = (locale: string | undefined): LocaleConfig => {
  if (locale) {
    const localeSetting = SiteSettings.locales.filter((value) => value.langName === locale)
    if (localeSetting.length > 1) {
      console.error('')
    }
    if (localeSetting.length) {
      return localeSetting[0]
    }
  }
  return SiteSettings.locales[0]
}

export const getLocaleVocabulary = (locale: string | undefined, key: string): String => {
  if (locale) {
    const localeSetting = SiteSettings.locales.filter((value) => value.langName === locale)
    if (localeSetting.length > 1) {
      console.error('')
    }
    if (localeSetting.length && localeSetting[0].vocabulary[key]) {
      return localeSetting[0].vocabulary[key]
    }
  }
  return SiteSettings.locales[0].vocabulary[key] ? SiteSettings.locales[0].vocabulary[key] : key
}

export const domain: string = SiteSettings.domain
export const meta: MetaConfig = SiteSettings.meta
