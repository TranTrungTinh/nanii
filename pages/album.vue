<template>
  <div class="album">
    <flipbook class="flipbook" :pages="pages"  v-slot="flipbook">
      <div class="action-bar">
        <img 
          src="icons/left.svg" 
          alt="icon"
          class="btn left" 
          :class="{ disabled: !flipbook.canFlipLeft }" 
          @click="flipbook.flipLeft"
        />
        <img
          src="icons/zoom-in.svg"  
          alt="icon"
          class="btn plus"
          :class="{ disabled: !flipbook.canZoomIn }"
          @click="flipbook.zoomIn"
        />
        <span class="page-num">
          Page {{ flipbook.page }} of {{ flipbook.numPages }}
        </span>
        <img 
          src="icons/zoom-out.svg"  
          alt="icon"
          class="btn minus"
          :class="{ disabled: !flipbook.canZoomOut }"
          @click="flipbook.zoomOut"
        />
        <img
          src="icons/right.svg"  
          alt="icon"
          class="btn right"
          :class="{ disabled: !flipbook.canFlipRight }"
          @click="flipbook.flipRight"
        />
      </div>
    </flipbook>
  </div>
</template>
<script>
import Flipbook from 'flipbook-vue'

export default {
  layout: 'blank',
  components: { Flipbook },
  computed: {
    pages() {
      return [
        null,
        '/album/1.jpg',
        '/album/2.jpg',
        '/album/3.jpg',
        '/album/4.jpg',
        '/album/5.jpg',
        '/album/6.jpg',
        '/album/7.jpg',
        '/album/8.jpg',
        '/album/9.jpg',
        '/album/10.jpg',
        '/album/11.jpg',
        '/album/12.jpg',
        '/album/13.jpg',
        '/album/14.jpg',
        '/album/15.jpg',
        '/album/16.jpg',
        '/album/17.jpg',
        '/album/18.jpg',
        '/album/19.jpg',
        '/album/20.jpg',
        '/album/21.jpg',
        '/album/22.jpg',
        '/album/23.jpg',
        '/album/24.jpg',
        '/album/25.jpg',
        '/album/26.jpg',
        '/album/27.jpg',
        '/album/28.jpg',
        '/album/29.jpg',
        '/album/100.jpg'
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/album/album.scss";
</style>

