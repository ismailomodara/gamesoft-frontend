export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Gamesoft',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#711FFF' },
  /*
   ** Global CSS
   */
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/css/gs-variable.scss',
    '@/assets/css/gs-icons.css',
    '@/assets/css/gs-design-system.scss',
    '@/assets/css/gs-main.scss',
    '@/assets/css/gs-media.scss'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/element-ui'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: 'https://api.gamesoft.com/'
  },
  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
