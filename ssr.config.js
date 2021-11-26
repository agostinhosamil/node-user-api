const path = require ('path')

module.exports = {
  id: 'styled-components',
  distDir: 'src/app/views/.ssr',
  viewsDir: 'src/app/views',
  staticViews: [],
  webpack: (config /* webpack.Configuration */, env /* 'development' | 'production' */) => {
    return config;
  }
}
