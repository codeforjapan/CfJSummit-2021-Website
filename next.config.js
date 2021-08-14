const path = require('path')
const SiteSetting = require('./site.config.js')
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
    optimizeCss: true,
    optimizeImages: true,
  },
  experimental: {
    eslint: true,
    optimizeFonts: true,
    optimizeCss: true,
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
}
