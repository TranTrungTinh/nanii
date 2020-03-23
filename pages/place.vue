<template>
  <main>
    <h2>Places</h2>
    <a-divider></a-divider>
    <a-row :gutter="16">
      <a-col :xs="24" :lg="16">
        <a-card class="places" :style="cssVars" v-for="(place, i) in places" :key="i" bordered hoverable>
          <div slot="cover" class="main-img" v-lazy:background-image="place.img[1]"></div>
          <p class="top">{{ users[0].name }}'s Places</p>
          <h1>{{ place.name }}</h1>
          <p class="description" v-html="place.description"></p>
          <a-tag 
            v-for="tag in place.tags"
            :key="tag"
            color="purple"
          >#{{ tag }}</a-tag>

          <div class="stars">
            <strong>Rating: </strong>
            <a-rate :defaultValue="place.stars" allowHalf>
              <a-icon slot="character" type="heart" theme="filled" style="color: #3B3B98" />
            </a-rate>
            <!-- <span class="ant-rate-text">{{place.stars}} stars</span> -->
          </div>
        </a-card>
      </a-col>
      <a-col :xs="24" :lg="8">
        <div class="others">
          <div v-for="place in reversePlaces" class="location" :key="place.name">
            <div class="card-link" :style="cssVars">
              <article class="blog-card">
                <img class="post-image" alt="img-cover" v-lazy="place.img[0]" />
                <div class="article-details">
                  <h4 class="post-category">TRAVEL</h4>
                  <h3 class="post-title">{{ place.name }}</h3>
                  <p class="post-description">{{ place.status }}</p>
                  <p class="post-author">By Nanii</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </a-col>
    </a-row>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import IconBase from '~/components/IconBase.vue'
import IconMapPin from '~/components/IconMapPin.vue'
import { mixin } from '~/utils/mixin'

export default {
  mixins: [mixin],
  components: {
    IconBase,
    IconMapPin
  },
  computed: {
    ...mapGetters(['page', 'users', 'places']),
    reversePlaces() {
      return this.places.map(item => item).reverse()
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/place/place.scss";
</style>