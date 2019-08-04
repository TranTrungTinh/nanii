<template>
  <div>
    <a-divider orientation="left">03/10/2017</a-divider>
    <fiveth-gallery :galleries="first" />

    <a-divider orientation="left">04/10/2017</a-divider>
    <third-gallery :galleries="second" />

    <a-divider orientation="left">12/08/2018</a-divider>
    <second-gallery :galleries="third" />

    <a-divider orientation="left">13/08/2018</a-divider>
    <sixth-gallery :galleries="fourth" />

    <a-divider orientation="left">14/08/2018</a-divider>
    <fourth-gallery :galleries="fiveth" />
  </div>
</template>
<script>
import { prepare } from '@/utils/prepareData.js'
const galleries = prepare('galleries/nhatrang', 40)

export default {
  components: {
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
    },
    fiveth() {
      return galleries.slice(32, 40)
    }
  }
}
</script>