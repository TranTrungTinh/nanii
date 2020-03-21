// import Vue from 'vue'
import { mapGetters } from 'vuex'
import { config } from '@/configs/defaultSettings'

const mixin = {
  computed: {
    ...mapGetters('app', ['theme']),
    themeColor() {
      return config.theme[this.theme]
    },
    cssVars() {
      return {
        '--bg-color': this.themeColor.background,
        '--text-color': this.themeColor.text,
        '--button-color': this.themeColor.button,
        '--shadow-color': this.themeColor.shadow,
        '--card-color': this.themeColor.card,
        '--bg-gallery': this.themeColor.galleryBackground,
      }
    }
  },
}

export { mixin }
