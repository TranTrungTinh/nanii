<template>
  <div class="gallery">
    <gallery />
  </div>
</template>
<script>

export default {
  layout: 'blank',
  components: {
    Gallery: () => import('~/components/galleries/galleries.vue')
  }
}
</script>

<style scoped>
.gallery {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100vh;
}
</style>
