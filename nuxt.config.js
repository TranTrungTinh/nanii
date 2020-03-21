export default {
  mode: 'spa',
  router: {
    middleware: 'pages'
  },
  server: {
    port: 4000, // default: 3000
    host: 'localhost' // default: localhost,
  },
  render: {
    // cache image 365 days
    static: {
      maxAge: 1000 * 60 * 60 * 24 * 365 
    }
  },

  /* Headers of the page */
  head: {
    title: 'Nanii',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'keyword', name: 'keyword', content: 'nanii,fleurna_nii_,blog,traveling' },
      { hid: 'description', name: 'description', content: 'Nanii blog traveling' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700&display=swap' }
    ]
  },

  /* Customize the progress-bar color */
  loading: '@/components/tools/the-progress.vue',
  loadingIndicator: {
    name: 'cube-grid',
    color: '#3B3B98',
    background: '#1c1e21'
  },
  /* Global CSS */
  css: [
    { src: 'nprogress/nprogress.css' },
    { src: '@/assets/scss/main.scss', lang: 'scss' }
  ],

  /*  Plugins to load before mounting the App */
  plugins: [
    { src: '@/plugins/antd-ui.js' },
    { src: '@/plugins/use.js', mode: 'client' }
  ],

  /* Nuxt.js modules */
  modules: [
    '@nuxtjs/vendor'
  ],
  vendor: ['ant-design-vue'],

  /* Build configuration */
  build: {
    // analyze: true,
    extend(config, ctx) {},
    optimization: {
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: Infinity,
        minSize: 0,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
              return `npm.${packageName.replace('@', '')}`;
            }
          }
        }
      }
    },
  }
}
