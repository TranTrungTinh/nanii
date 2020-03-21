<template>
  <div>
    <a-divider orientation="left">
      <span class="time" :style="cssVars">03/10/2017</span>
    </a-divider>
    <fiveth-gallery :galleries="first" />

    <a-divider orientation="left">
      <span class="time" :style="cssVars">04/10/2017</span>
    </a-divider>
    <third-gallery :galleries="second" />

    <a-divider orientation="left">
      <span class="time" :style="cssVars">12/08/2018</span>
    </a-divider>
    <second-gallery :galleries="third" />

    <a-divider orientation="left">
      <span class="time" :style="cssVars">13/08/2018</span>
    </a-divider>
    <sixth-gallery :galleries="fourth" />
  </div>
</template>
<script>
import { mixin } from '~/utils/mixin'
import { prepare } from '@/utils/prepareData.js'
const galleries = prepare('trip/nhatrang', 32)

export default {
  mixins: [mixin],
  components: {
    SecondGallery: () => import('~/components/gallery/second-gallery.vue'),
    ThirdGallery: () => import('~/components/gallery/third-gallery.vue'),
    // FourthGallery: () => import('~/components/gallery/fourth-gallery.vue'),
    FivethGallery: () => import('~/components/gallery/fiveth-gallery.vue'),
    SixthGallery: () => import('~/components/gallery/sixth-gallery.vue')
  },
  computed: {
    first() {
      return galleries.slice(0, 8)
    },
    second() {
      return galleries.slice(8, 16)
    },
    third() {
      return galleries.slice(16, 24)
    },
    fourth() {
      return galleries.slice(24, 32)
    },
    // fiveth() {
    //   return galleries.slice(32, 40)
    // }
  }
}
</script>
<style lang="scss" scoped>
.time {
  color: var(--text-color);
}
</style>