<template>
  <header :class="{ 
    'place' : (page === 'place'), 
    'group' : (page === 'trips'), 
    'index' : (page === 'index') 
  }">

    <transition-group name="bk" tag="div" class="bk-img">
      <div key="img1" v-if="page === 'index'" class="header-img1" v-lazy:background-image="`/header/header1.jpeg`"></div>
      <div key="img2" v-else-if="page === 'place'" class="header-img2" v-lazy:background-image="`/header/header2.jpeg`"></div>
      <div key="img3" v-else class="header-img3" v-lazy:background-image="`/header/header3.jpeg`"></div>
    </transition-group>

    <div class="nav-wrapper">
      <nav>
        <ul class="nav-wrapper__ul">
          <nuxt-link exact to="/"><li class="nav-wrapper__li">Home</li></nuxt-link>
          <nuxt-link to="/place"><li class="nav-wrapper__li">Places</li></nuxt-link>
          <nuxt-link to="/trips"><li class="nav-wrapper__li">Trips</li></nuxt-link>
          <nuxt-link to="/galleries"><li class="nav-wrapper__li">Gallery</li></nuxt-link>
          <nuxt-link to="/album"><li class="nav-wrapper__li">Album</li></nuxt-link>
        </ul>
        
        <div @click="onOpen">
          <icon-base class="menu" icon-name="menu" icon-color="white" width="28" height="28">
            <icon-three-dot/>
          </icon-base>
          <a-drawer 
            title="Nanii blog" 
            placement="right" 
            :visible="menuOpened" 
            :closable="false" 
            @close="onClose"
          >
            <a-menu class="draw__menu" @click="handleMenuClick">
              <a-menu-item key="1">
                <nuxt-link exact to="/" class="draw__menu--nav">
                  <img src="@/assets/icons/home.svg" alt="icon" class="draw__menu--icon" />
                  <span>Home</span>
                </nuxt-link>
              </a-menu-item>
              <a-menu-item key="2">
                <nuxt-link to="/place" class="draw__menu--nav">
                  <img src="@/assets/icons/star.svg" alt="icon" class="draw__menu--icon" />
                  <span>Places</span>
                </nuxt-link>
              </a-menu-item>
              <a-menu-item key="3">
                <nuxt-link to="/trips" class="draw__menu--nav">
                  <img src="@/assets/icons/trip.svg" alt="icon" class="draw__menu--icon" />
                  <span>Trips</span>
                </nuxt-link>
              </a-menu-item>
              <a-menu-item key="4" class="draw__menu--nav">
                <nuxt-link to="/galleries">
                  <img src="@/assets/icons/gallery.svg" alt="icon" class="draw__menu--icon" />
                  <span>Gallery</span>
                </nuxt-link>
              </a-menu-item>
              <a-menu-item key="5" class="draw__menu--nav">
                <nuxt-link to="/album">
                  <img src="@/assets/icons/album.svg" alt="icon" class="draw__menu--icon" />
                  <span>Album</span>
                </nuxt-link>
              </a-menu-item>
            </a-menu>
          </a-drawer>
        </div>

        <app-nav-transition />

        <app-stats v-if="page === 'index'" :selectedUser="selectedUser" />
      </nav>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
import { TimelineMax, Expo, Sine, Back } from 'gsap'
import AppStats from './AppStats.vue'
import IconBase from './IconBase.vue'
import IconThreeDot from './IconThreeDot.vue'
import AppNavTransition from './AppNavTransition.vue'

export default {
  data() {
    return {
      saved: false,
      menuOpened: false
    }
  },
  components: {
    AppStats,
    AppNavTransition,
    IconBase,
    IconThreeDot
  },
  methods: {
    onOpen() {
      this.menuOpened = true
    },
    onClose() {
      this.menuOpened = false
    },
    handleMenuClick() {
      this.onClose()
    }
  },
  computed: {
    ...mapGetters(['page','selectedUser'])
  },
  filters: {
    firstName(input) {
      var lastIndex = input.lastIndexOf(' ')
      return input.substring(0, lastIndex)
    }
  }
}
</script>

<style scoped lang="scss">
  @import "@/assets/scss/nav/navigation.scss";
</style>