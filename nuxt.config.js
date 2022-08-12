export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'rent.landlord.frontend',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/styles/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios',
    { src: '~/plugins/cypress', ssr: false },
    { src: '~/plugins/directive.click-outside.js', ssr: false },
    { src: '~/plugins/vee-validate', ssr: false },
    { src: '@/plugins/ssr-cookie-proxy.js', mode: 'server' }

  ],

  svgSprite: {
    input: '~/assets/images/icons/'
  },
  googleFonts: {
    display: 'swap',
    families: {
      'Open+Sans': true
    }
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/svg-sprite',
    '@nuxtjs/google-fonts',
    '@nuxt/typescript-build'

  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/sentry',
    '@nuxtjs/proxy'
  ],

  proxy: {
    '/api/v1/catalogs/19': { target: process.env.BPIUM_URL, pathRewrite: { '^/api/v1/catalogs/19': '' } }
  },

  sentry: {
    dsn: '',
    config: {
    }
  },
  publicRuntimeConfig: {
    homePage: process.env.HOME_PAGE
  },
  env: {
    API_URL: process.env.API_URL,
    BPIUM_URL: process.env.BPIUM_URL,
    BPIUM_LOGIN: process.env.BPIUM_LOGIN,
    BPIUM_PASS: process.env.BPIUM_PASS,
    AUTH_TOKEN: process.env.AUTH_TOKEN,
    OPTIONS_JSON: process.env.OPTIONS_JSON
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.NODE_ENV ? process.env.BASEURL : 'http://localhost:3000',
    headers: {
      'Content-Type': 'application/json'
    },
    proxy: true,
    proxyHeaders: false,
    withCredentials: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vee-validate/dist/rules']
  }

}
