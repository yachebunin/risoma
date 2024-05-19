export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'risoma',
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  modules: [
    '@nuxtjs/axios',
  ],

  axios: {
    baseURL: 'https://dev-erpfit.risoma.ru/api/v1',
  },

  router: {
    extendRoutes(routes, resolve) {
      routes.push(
        {
          name: 'index',
          path: '/',
          component: resolve(__dirname, 'pages/index.vue')
        },
        {
          name: 'login',
          path: '/login',
          component: resolve(__dirname, 'pages/login.vue')
        },
        {
          name: 'register',
          path: '/register',
          component: resolve(__dirname, 'pages/register.vue')
        },
        {
          name: 'posts',
          path: '/posts',
          component: resolve(__dirname, 'pages/posts.vue')
        }
      )
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
