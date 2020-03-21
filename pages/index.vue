<template>
  <main>
    <a-row :gutter="16">
      <a-col :xs="24" v-for="(place, i) in places" :key="i">
        <div class="card-link" :style="cssVars">
          <article class="blog-card">
            <img class="post-image" v-lazy="place.img[0]" @click="handleClick"/>
            <div class="article-details">
              <nuxt-link to="/place">
                <h4 class="post-category">TRAVEL</h4>
                <h3 class="post-title">{{ place.name }}</h3>
                <p class="post-description">{{ place.status }}</p>
              </nuxt-link>
              <p class="post-author">By Nanii</p>
            </div>
          </article>
        </div>
      </a-col>
    </a-row>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import { mixin } from '~/utils/mixin'

export default {
  mixins: [mixin],
  components: {
    IconBase: () => import('~/components/IconBase.vue'),
    IconMapPin: () => import('~/components/IconMapPin.vue')
  },
  computed: {
    ...mapGetters(['page', 'users', 'places'])
  },
  methods: {
    handleClick() {
      this.$router.push('/place')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/home/home.scss";
</style>
