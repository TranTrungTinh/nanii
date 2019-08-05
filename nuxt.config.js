export default {
  mode: 'spa',
  router: {
    middleware: 'pages'
  },
  server: {
    port: 4001, // default: 3000
    host: 'localhost' // default: localhost,
  },
  render: {
    // cache image 7 days
    static: {
      maxAge: 1000 * 60 * 60 * 24 * 7 
    }
  },

  /* Headers of the page */
  head: {
    title: 'Nanii',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Blog Travelling For Na' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700&display=swap' }
    ]
  },

  /* Customize the progress-bar color */
  loading: '@/components/tools/the-progress.vue',

  /* Global CSS */
  css: [
    // { src: 'ant-design-vue/dist/antd.min.css' },
    { src: 'nprogress/nprogress.css' },
    { src: '@/assets/scss/main.scss', lang: 'scss' }
  ],

  /*  Plugins to load before mounting the App */
  plugins: [
    { src: '@/plugins/antd-ui.js' },
    { src: '@/plugins/use.js', ssr: false }
  ],

  /* Nuxt.js modules */
  modules: [],

  /* Build configuration */
  build: {
    // analyze: true,
    extend(config, ctx) {}
  }
}
