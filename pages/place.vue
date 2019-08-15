<template>
  <main>
    <a-row :gutter="16">
      <a-col :xl="16">
        <div class="places" v-for="(place, i) in places" :key="i">
          <p class="top">{{ users[0].name }}'s Places</p>
          <h1>{{ place.name }}</h1>
          <div class="stars">
            <strong>Rating: </strong>
            <a-rate :defaultValue="place.stars" allowHalf disabled />
            <span class="ant-rate-text">{{place.stars}} stars</span>
          </div>
          <div class="main-img" v-lazy:background-image="place.img[1]"></div>
          <p class="description" v-html="place.description"></p>
          <a-tag 
            v-for="tag in place.tags"
            :key="tag"
            color="purple"
          >#{{ tag }}</a-tag>
        </div>
      </a-col>
      <a-col :xl="8">
        <div class="others">
          <h2>Other Trips</h2>
          <div v-for="place in reversePlaces" class="location" :key="place.name">
            <a-card hoverable>
              <img v-lazy="place.img[0]" :alt="place.name" />
              <h3><strong>{{ place.name }}</strong></h3>
              <p style="text-align: justify">{{ place.status }}</p>
            </a-card>
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

export default {
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