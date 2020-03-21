<template>
  <section :style="cssVars" class="root">
    <app-navigation />
    <nuxt/>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import AppNavigation from '~/components/AppNavigation.vue'
import { mixin } from '~/utils/mixin'

export default {
  name: "DefaultLayout",
  mixins: [mixin],
  components: {
    AppNavigation
  }
}
</script>
<style lang="scss" scoped>
.root {
  background-color: var(--bg-color);
}
</style>
