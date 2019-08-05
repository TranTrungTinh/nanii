<template>
  <main>
    <a-row :gutter="8">
      <a-col :xl="18">
        <div class="places">
          <div v-for="(place, i) in places" class="location" :key="i">
            <a-card hoverable>
              <img v-lazy="place.img[0]" :alt="place.name" />
              <h2>{{ place.name }}</h2>
              <a-rate :defaultValue="place.stars" allowHalf disabled />
              <p style="text-align: justify">{{ place.description }}</p>
            </a-card>
          </div>
        </div>
      </a-col>
      <a-col :xl="6">
        <div class="mapcontain">
          <p>
            <icon-base icon-name="mappin"><icon-map-pin /></icon-base>
            Checked in at Da Lat city
          </p>
        </div>
      </a-col>
    </a-row>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  components: {
    IconBase: () => import('~/components/IconBase.vue'),
    IconMapPin: () => import('~/components/IconMapPin.vue')
  },
  computed: {
    ...mapGetters(['page', 'users', 'places'])
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/home/home.scss";
</style>
