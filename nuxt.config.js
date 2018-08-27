module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }
    ]
  },
  srcDir:'client/',
  /*
  ** Global CSS
  */
  css: [{
    src:'~assets/css/main.css',
    lang:'less'
  },
  {
    src:'~assets/css/main.less',
    lang:'less'
  },
  {
    src:'element-ui/lib/theme-chalk/index.css',
  }
],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  plugins:[
    {src:'./plugins/element-ui.js'}
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLINT on save
     */
    vendor:['axios','./client/plugins/element-ui.js'],
    extend (config, ctx) {
      if (ctx.isClient) {
        // config.module.rules.push({
        //   enforce: 'pre',
        //   test: /\.(js|vue)$/,
        //   loader: 'eslint-loader',
        //   exclude: /(node_modules)/
        // })
      }
    }
  }
}
