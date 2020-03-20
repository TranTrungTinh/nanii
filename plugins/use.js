import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '/icons/noimage.svg',
  loading: '/icons/loading.svg',
  attempt: 1
})