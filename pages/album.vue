<template>
  <div class="album">
    <flipbook class="flipbook" :pages="pages"  v-slot="flipbook">
      <div class="action-bar">
        <img 
          src="@/assets/icons/left.svg" 
          alt="icon"
          class="btn left" 
          :class="{ disabled: !flipbook.canFlipLeft }" 
          @click="flipbook.flipLeft"
        />
        <img
          src="@/assets/icons/zoom-in.svg"  
          alt="icon"
          class="btn plus"
          :class="{ disabled: !flipbook.canZoomIn }"
          @click="flipbook.zoomIn"
        />
        <span class="page-num">
          Page {{ flipbook.page }} of {{ flipbook.numPages }}
        </span>
        <img 
          src="@/assets/icons/zoom-out.svg"  
          alt="icon"
          class="btn minus"
          :class="{ disabled: !flipbook.canZoomOut }"
          @click="flipbook.zoomOut"
        />
        <img
          src="@/assets/icons/right.svg"  
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
        '/flipbook/picture.jpg',
        '/flipbook/picture1.jpg',
        '/flipbook/picture2.jpg',
        '/flipbook/picture3.jpg',
        '/flipbook/picture4.jpg',
        '/flipbook/picture5.jpg',
        '/flipbook/picture6.jpg',
        '/flipbook/picture7.jpg',
        '/flipbook/picture8.jpg',
        '/flipbook/picture9.jpg',
        '/flipbook/picture10.jpg',
        '/flipbook/picture11.jpg',
        '/flipbook/picture12.jpg',
        '/flipbook/picture13.jpg',
        '/flipbook/picture14.jpg',
        '/flipbook/picture15.jpg',
        '/flipbook/picture16.jpg',
        '/flipbook/picture17.jpg',
        '/flipbook/picture18.jpg',
        '/flipbook/picture19.jpg',
        '/flipbook/picture20.jpg',
        '/flipbook/picture21.jpg',
        '/flipbook/picture22.jpg',
        '/flipbook/picture23.jpg',
        '/flipbook/picture24.jpg',
        '/flipbook/picture25.jpg',
        '/flipbook/picture26.jpg',
        '/flipbook/picture27.jpg',
        '/flipbook/picture28.jpg',
        '/flipbook/picture29.jpg',
        '/flipbook/picture30.jpg',
        '/flipbook/picture100.jpg'
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/album/album.scss";
</style>

