<template>
  <section>
    <app-navigation />
    <nuxt/>
  </section>
</template>

<script>
import AppNavigation from '~/components/AppNavigation.vue'

export default {
  name: "DefaultLayout",
  components: {
    AppNavigation
  }
}
</script>
