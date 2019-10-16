<template>
<section class="gallery">
  <a-row :gutter="8">
    <a-col :xs="24" :sm="16">
      <a-row :gutter="8">
        <a-col :xs="24">
          <galary-item classes="item1" :img="galleries[0]" />
        </a-col>
        <a-col :xs="24">
          <galary-item classes="item2" :img="galleries[3]" />
        </a-col>
      </a-row>
    </a-col>
    <a-col :xs="12" :sm="8">
      <galary-item classes="item3" :img="galleries[1]" />
    </a-col>
    <a-col :xs="12" :sm="8">
      <galary-item classes="item4" :img="galleries[7]" />
    </a-col>
  </a-row>
  <a-row :gutter="8">
    <a-col :xs="24" :sm="8">
      <a-row :gutter="8">
        <a-col :xs="24">
          <galary-item classes="item3" :img="galleries[6]" />
        </a-col>  
        <a-col :xs="24">
          <galary-item classes="item4" :img="galleries[2]" />
        </a-col>
      </a-row>
    </a-col>
    <a-col :xs="24" :sm="16">
      <a-row :gutter="8">
        <a-col :xs="24">
          <galary-item classes="item2" :img="galleries[4]" />
        </a-col>
        <a-col :xs="24">
          <galary-item classes="item1" :img="galleries[5]" />
        </a-col>
      </a-row>
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
      height: 580px;
    }
    &2 {
      height: 460px;
    }
    &3 {
      height: 410px;
    }
    &4 {
      height: 630px;
      @include respond(xs) {
        height: 410px;
      }
      @include respond(sm) {
        height: 410px;
      }
    }
  }
}
</style>