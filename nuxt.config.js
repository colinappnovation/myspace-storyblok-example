export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'MySpace',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // '~/plugins/components',
    '~/plugins/composition-api.js',
    '~/plugins/storyblok-rich-text-renderer.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/postcss8',
    '@nuxt/image',
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    'nuxt-seo'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      'storyblok-nuxt',
      {
        accessToken: '',
        cacheProvider: 'memory'
      },
      'nuxt-seo'
    ],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  image: {
    storyblok: {
      baseURL: 'https://img2.storyblok.com'
    }
  },


  seo: {
    // My custom configuration
    baseUrl: 'https://localhost:3000',
    name: 'Example',
    title: 'Example Amazing Site',
    templateTitle: '%name% - %title%',
    description: 'This is an amazing website!',
    canonical: 'auto',
    isForcedTrailingSlash: false
  }

}
