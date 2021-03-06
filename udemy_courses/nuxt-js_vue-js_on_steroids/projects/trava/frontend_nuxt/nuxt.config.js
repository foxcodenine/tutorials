export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  ssr: false, // Disable Server Side rendering
  // target: 'static',
  // generate: {
  //   fallback: "index.html"
  // },
  router: {
    base: '/001/',
  },
  build: {
    publicPath: '/nuxt/',
    // ...
  },
  head: {
    title: 'Trava',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
           
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/styles/main.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/detectBrowser.js',
    '@/plugins/Vuelidate.js',
    { src: '@/plugins/flashMessage.js', mode: 'client' }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
  ],    
  styleResources: {
    scss: [
        'assets/styles/_variables.scss',
        // 'assets/styles/_base.scss',
    ]
  },
  axios: {
    baseURL: process.env.BASE_URL, 
    // Used as fallback if no runtime config is provided
    headers: {
      API_KEY: process.env.API_KEY,
      common: {
        API_KEY: process.env.API_KEY
      }
    }
  },
  transition: {
    name: 'fade',
    mode: 'out-in'
  },


  // Build Configuration (https://go.nuxtjs.dev/config-build)
  // build: {
  // },
  publicRuntimeConfig: {
    BESK: process.env.BACKEND_SECRET_KEY,
    baseUrl: process.env.BASE_URL,

    axios: {
      baseURL: process.env.BASE_URL
    }
  }
}
