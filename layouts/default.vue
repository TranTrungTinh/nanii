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
<style lang="scss">
.ant-drawer-header {
  background: var(--bg-color) !important;
}
.ant-drawer-title {
  color: var(--text-color) !important;
}
.ant-drawer-content {
  background-color: var(--bg-color) !important;
}
.ant-menu {
  background: var(--bg-color) !important;
}
.ant-switch-checked {
  background-color: var(--button-color) !important;
}
</style>

<style lang="scss" scoped>
.root {
  background: var(--bg-color);
}
</style>
