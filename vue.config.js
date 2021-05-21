module.exports = {
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        // '@': 'src',
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  },
  // devServer: {
  //   host: '127.0.0.1',
  //   // port: 8080,
  // },
  // devServer: {
  //   headers: {
  //     'Access-Control-Allow-Origin': '*',
  //   },
  //   hotOnly: false,
  //   disableHostCheck: true
  // }
  // devServer: {
  //   overlay: {
  //     warnings: false,
  //     errors: false
  //   },
  //   lintOnSave: false
}