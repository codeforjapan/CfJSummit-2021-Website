const path = require('path')
const SiteSetting = require('./site.config.js')
const dayjs = require('dayjs')
const locales = SiteSetting.locales.map((value) => value.langName)

module.exports = {
  images: {
    domains: ['storage.googleapis.com'],
  },
  i18n: {
    locales,
    defaultLocale: locales[0],
  },
  future: {
    optimizeFonts: true,
    optimizeImages: true,
  },
  experimental: {
    eslint: true,
    optimizeFonts: true,
    optimizeImages: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '~': path.resolve(__dirname, 'src'),
    }
    return config
  },
  redirects: async () => {
    const dest = dayjs().isBefore(dayjs('2021/09/19')) ? '/programs/day1' : '/programs/day2'
    return [
      {
        source: '/programs',
        destination: dest,
        permanent: false,
      },
    ]
  },
}
