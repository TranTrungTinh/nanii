<template>
  <main>
    <a-row :gutter="8">
      <a-col :xl="24">
        <p class="top">{{ selectedUser.trips[0] }} Activities</p>
        <h1>The journey will last {{ selectedUser.days }} days</h1>

        <transition-group name="slide-fade">
          <da-lat key="dalat" v-if="!selectedUser.active" />
          <nha-trang key="nhatrang" v-else />
        </transition-group>
        
      </a-col>
      <!-- <a-col :xl="5">
        <div class="schedule">
          <h3><icon-base icon-name="calendar"><icon-calendar /></icon-base> Schedule</h3>
          <p class="top">Sunday</p>
          <p class="schedule__content">Arrival: We settled in and decided to go snorkeling. We saw spotted dolphins, tons of whales - one whale went right under the boat, and, of course, plenty of sea turtles. The snorkeling area is a little small and can get crowded, but we still had great opportunities to watch the turtles. The crew was terrific - Jason, Jackson, and Shane. We would definitely recommend this activity, and will do it again if we ever get back to Hawaii!</p>
          <p class="top">Monday</p>
          <p class="schedule__content">After such an exciting first day, we decided to take it a bit easier and just get a nice lunch as our day activity. Had a wonderful time getting an opportunity to walk around a few blocks of Ala Moana and sampling some of the local eats that you can't really get back home. Every stop had something new and interesting to try, and there wasn't a single thing I tried that I really disliked.</p>
        </div>
      </a-col> -->
    </a-row>
    <a-back-top />
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
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