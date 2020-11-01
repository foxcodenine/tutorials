export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  ssr: true, // Disable or Enable Server Side rendering
  // https://nuxtjs.org/guides/configuration-glossary/configuration-ssr


  loading: {
    color: 'crimson',
    height: '5px'
  },
  // https://nuxtjs.org/api/configuration-loading/


  // loadingIndicator: {
  //   name: 'circle',
  //   color: '#3B8070',
  //   background: 'white'
  // },
  // https://nuxtjs.org/api/configuration-loading-indicator/


  head: {
    title: 'Nuxt-Blog Project',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/icomoon/PNG/blog.png' },
      {href: "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap", rel:"stylesheet"},
      {href: "https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap", rel:"stylesheet"},
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/styles/main.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/core-components.js',
    '@/plugins/filter.js'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    
  ],
  // https://nuxtjs.org/guide/modules/
  // https://modules.nuxtjs.org/
  // https://github.com/nuxt-community/modules
  // https://github.com/nuxt-community/awesome-nuxt

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  dev: process.env.NODE_ENV !== 'production',
  // https://nuxtjs.org/api/configuration-dev/

  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },
  // https://nuxtjs.org/api/configuration-env/

  // rootDir: '/',
  // https://nuxtjs.org/api/configuration-rootdir/

  // router: {
  //   base: '/app/',
  //   linkActiveClass: 'active-link',
  //   linkExactActiveClass: 'exact-active-link'
  // },
  // https://nuxtjs.org/api/configuration-router/

  // srcDir: 'client/',
  // https://nuxtjs.org/api/configuration-srcdir/

  transition: {
    name: 'fade',
    mode: 'out-in'
  },
  // https://nuxtjs.org/api/pages-transition/



  // https://nuxtjs.org/blog/moving-from-nuxtjs-dotenv-to-runtime-config/#what-are-environment-variables
  // https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-runtime-config

  publicRuntimeConfig: {
    testPublic: process.env.TEST_ENV_PUBLIC,
    fbApiKey: process.env.FB_API_KEY
    // Value of this object is accessible from both client and server using $config.
  },
  privateRuntimeConfig: {
    testPrivate: process.env.TEST_ENV_PRIVATE,
    // Value of this object is accessible from server only using $config. Overrides publicRuntimeConfig for server.
  }
}
