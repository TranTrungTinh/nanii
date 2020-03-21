<template>
  <main>
    <a-row :gutter="8">
      <a-col :xl="24">
        <p class="top">{{ selectedUser.trips[0] }} Activities</p>
        <h1 :style="cssVars">The journey will last {{ selectedUser.days }} days</h1>

        <transition-group name="slide-fade">
          <da-lat key="dalat" v-if="!selectedUser.active" />
          <nha-trang key="nhatrang" v-else />
        </transition-group>
        
      </a-col>
    </a-row>
    <a-back-top />
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import { mixin } from '~/utils/mixin'

export default {
  mixins: [mixin],
  components: {
    IconBase: () => import('~/components/IconBase.vue'),
    IconCalendar: () => import('~/components/IconCalendar.vue'),
    DaLat: () => import('~/components/trip/dalat.vue'),
    NhaTrang: () => import('~/components/trip/nhatrang.vue')
  },
  computed: {
    ...mapGetters(['selectedUser'])
  }
}
</script>
<style lang="scss" scoped>
  @import "@/assets/scss/trips/trips.scss";
</style>