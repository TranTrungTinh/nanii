<template>
<section class="gallery">
  <a-row :gutter="8">
    <a-col :xs="24" :lg="12">
      <galary-item classes="item1" :img="galleries[0]" />
    </a-col>
    <a-col :xs="24" :lg="12">
      <galary-item classes="item1" :img="galleries[1]" />
    </a-col>

    <a-col :xs="12" :lg="10">
      <galary-item classes="item2" :img="galleries[2]" />
    </a-col>
    <a-col :xs="12" :lg="14">
      <galary-item classes="item2" :img="galleries[3]" />
    </a-col>
    <a-col :xs="24" :lg="14">
      <galary-item classes="item3" :img="galleries[4]" />
    </a-col>
    <a-col :xs="24" :lg="10">
      <galary-item classes="item3" :img="galleries[5]" />
    </a-col>
    <a-col :xs="24" :lg="9">
      <galary-item classes="item4" :img="galleries[6]" />
    </a-col>
    <a-col :xs="24" :lg="15">
      <galary-item classes="item4" :img="galleries[7]" />
    </a-col>
  </a-row>
</section>
</template>
<script>
export default {
  components: {
    GalaryItem: () => import('./item')
  },
  props: {
    galleries: { type: Array, required: true, default: () => [] }
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/scss/mixins/index.scss";
.gallery {
  .item {
    &1 {
      height: 390px;
    }
    &2 {
      height: 480px;
      @include respond(xs) {
        height: 350px;
      }
    }
    &3 {
      height: 320px;
    }
    &4 {
      height: 420px;
    }
  }
}
</style>

