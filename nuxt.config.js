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
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#3B3B98' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
      { name: 'apple-mobile-web-app-title', content: 'Nanii' },
      { name: 'msapplication-TileImage', content: '/app/apple-touch-icon-144x144.png' },
      { name: 'msapplication-TileColor', content: '#FFF' },
      { hid: 'keyword', name: 'keyword', content: 'nanii,fleurna_nii_,blog,traveling' },
      { hid: 'description', name: 'description', content: 'Nanii blog traveling' },
      // fb
      { property: 'fb:app_id', content: '247862096252228' },
      { property: 'og:type', content: 'website' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700&display=swap' },
      { rel: "shortcut icon", href:"/app/favicon.ico", type: "image/x-icon" },
      { rel: "apple-touch-icon", href:"/app/apple-touch-icon.png" },
      { rel: "apple-touch-icon", sizes:"57x57"  , href: "/app/apple-touch-icon-57x57.png"  },
      { rel: "apple-touch-icon", sizes:"72x72"  , href: "/app/apple-touch-icon-72x72.png"}  ,
      { rel: "apple-touch-icon", sizes:"76x76"  , href: "/app/apple-touch-icon-76x76.png"  },
      { rel: "apple-touch-icon", sizes:"114x114", href: "/app/apple-touch-icon-114x114.png" },
      { rel: "apple-touch-icon", sizes:"120x120", href: "/app/apple-touch-icon-120x120.png" },
      { rel: "apple-touch-icon", sizes:"144x144", href: "/app/apple-touch-icon-144x144.png" },
      { rel: "apple-touch-icon", sizes:"152x152", href: "/app/apple-touch-icon-152x152.png" },
      { rel: "apple-touch-icon", sizes:"180x180", href: "/app/apple-touch-icon-180x180.png" },
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
