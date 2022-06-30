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
    { src: '~/plugins/directive.click-outside.js', ssr: false },
    { src: '~/plugins/vee-validate', ssr: false }
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
    '@nuxtjs/google-fonts'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  auth: {
    strategies: {
      auth0: {
        domain: 'rent-products-api.ipotech.su',
        clientId: '1',
        clientSecret: 'LJJClsj1gVgnfoe5nz2pU2Lg93Uh4V85J5X9Rl95',
        audience: 'https://rent-products-api.ipotech.su'
      }
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vee-validate/dist/rules']
  }
}
