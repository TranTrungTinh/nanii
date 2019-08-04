import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'https://data.whicdn.com/images/292205774/original.gif',
  loading: 'https://i.chzbgr.com/full/7229121280/hEC4188DD/', // 'https://media1.giphy.com/media/nZQIwSpCXFweQ/200.webp?cid=790b76115d466c86567a7a5655446961&rid=200.webp',
  attempt: 1
})