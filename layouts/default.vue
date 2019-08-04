<template>
  <section>
    <app-navigation />
    <nuxt/>
    <!-- <app-footer /> -->
  </section>
</template>

<script>
// import AppNavigation from '~/components/AppNavigation.vue'
// import AppFooter from '~/components/AppFooter.vue'

export default {
  name: "DefaultLayout",
  components: {
    AppNavigation: () => import('~/components/AppNavigation.vue'),
    // AppFooter
  }
}
</script>
