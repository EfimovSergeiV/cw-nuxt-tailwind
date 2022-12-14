export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'cw-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // '@/assets/css/tailwind.css',
    '@mdi/font/css/materialdesignicons.min.css',
  ],

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: true,
    // config: {},
    // injectPosition: 0,
    // viewer: true,
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: './plugins/vue-carousel.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/postcss8',
    '@nuxt/image',
  ],

  colorMode: {
    classSuffix: ""
  },


  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // ['@nuxtjs/component-cache', { maxAge: 1000 * 60 * 60 }],
    '@nuxt/image',
  ],

  // image: {
  //   provider: 'api-gls',
  //   twicpics: {
  //     baseURL: 'https://nuxt-demo.twic.pics'
  //   }
  // }

  // render: {
  //   // Setting up cache for 'static' directory - a year in milliseconds
  //   // https://web.dev/uses-long-cache-ttl
  //   static: {
  //     maxAge: 60 * 60 * 24 * 365 * 1000,
  //   },
  // },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    // baseURL: 'http://127.0.0.1:8000',
    baseURL: 'https://api.glsvar.ru',
  },

  loading: {
    color: 'yellow',
    height: '1px',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  }
}
