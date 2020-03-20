import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '/icons/noimage.svg',
  loading: 'https://media.giphy.com/media/bYNOMQeIP9MCA/giphy.gif',
  attempt: 1
})