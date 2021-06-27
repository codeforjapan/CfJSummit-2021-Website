const path = require('path')

module.exports = {
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
