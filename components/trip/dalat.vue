<template>
  <div>
    <a-divider orientation="left">24/01/2019</a-divider>
    
    <sixth-gallery :galleries="first" />

    <a-divider orientation="left">25/01/2019</a-divider>

    <second-gallery :galleries="second" />

    <a-divider orientation="left">13/07/2019</a-divider>

    <third-gallery :galleries="third" />
    
    <a-divider orientation="left">14/05/2019</a-divider>

    <fourth-gallery :galleries="fourth" />
  </div>
</template>
<script>
import { prepare } from '@/utils/prepareData.js'
const galleries = prepare('trip/dalat', 32)

export default {
  components: {
    FirstGallery: () => import('~/components/gallery/first-gallery.vue'),
    SecondGallery: () => import('~/components/gallery/second-gallery.vue'),
    ThirdGallery: () => import('~/components/gallery/third-gallery.vue'),
    FourthGallery: () => import('~/components/gallery/fourth-gallery.vue'),
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
    }
  }
}
</script>
