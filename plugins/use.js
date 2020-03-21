import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import VueStorage from 'vue-ls'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '/icons/noimage.svg',
  loading: 'https://media.giphy.com/media/bYNOMQeIP9MCA/giphy.gif',
  attempt: 1
})

Vue.use(VueStorage, {
  namespace: 'nanii__', // key prefix
  name: 'ls', // name variable Vue.[ls] or this.[$ls],
  storage: 'local' // storage name session, local, memory
})