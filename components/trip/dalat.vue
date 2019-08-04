<template>
  <div>
    <a-divider orientation="left">24/01/2019</a-divider>

    <first-gallery :galleries="first" />

    <a-divider orientation="left">25/01/2019</a-divider>

    <second-gallery :galleries="second" />

    <a-divider orientation="left">13/07/2019</a-divider>

    <third-gallery :galleries="third" />

    <a-divider orientation="left">14/05/2019</a-divider>

    <fourth-gallery :galleries="fourth" />

    <a-divider orientation="left">15/05/2019</a-divider>

    <fiveth-gallery :galleries="fiveth" />

    <a-divider orientation="left">27/07/2019</a-divider>

    <sixth-gallery :galleries="sixth" />

    <a-divider orientation="left">28/07/2019</a-divider>

    <third-gallery :galleries="seventh" />
  </div>
</template>
<script>
import { prepare } from '@/utils/prepareData.js'
const galleries = prepare('galleries/dalat', 56)

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
    },
    fiveth() {
      return galleries.slice(32, 40)
    },
    sixth() {
      return galleries.slice(40, 48)
    },
    seventh() {
      return galleries.slice(48, 56)
    }
  }
}
</script>
