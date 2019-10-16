<template>
<section class="gallery">
  <a-row :gutter="8">
    <a-col :xs="24" :sm="9" :lg="16">
      <galary-item classes="item1" :img="galleries[3]" />
    </a-col>
    <a-col :xs="24" :sm="15" :lg="8">
      <galary-item classes="item1" :img="galleries[4]" />
    </a-col>
    <a-col :xs="24">
      <a-row :gutter="8">
        <a-col :xs="24" :lg="12">
          <a-row :gutter="8">
            <a-col :xs="24" :lg="24">
              <galary-item classes="item3" :img="galleries[2]" />
            </a-col>
            <a-col :xs="24" :lg="24">
              <galary-item classes="item4" :img="galleries[0]" />
            </a-col>
            <a-col :xs="12">
              <galary-item classes="item4" :img="galleries[5]" />
            </a-col>
            <a-col :xs="12">
              <galary-item classes="item4" :img="galleries[6]" />
            </a-col>
          </a-row>
        </a-col>
        <a-col :xs="24" :lg="12">
          <galary-item classes="item2" :img="galleries[1]" />
        </a-col>
        <a-col :xs="24" :lg="12">
          <galary-item classes="item2" :img="galleries[7]" />
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
      height: 410px;
      @include respond(xs) {
        height: 350px;
      }
      @include respond(sm) {
        height: 350px;
      }
    }
    &2 {
      height: 650px;
      @include respond(xs) {
        height: 450px;
      }
      @include respond(sm) {
        height: 450px;
      }
    }
    &3 {
      height: 620px;
    }
    &4 {
      height: 336px;
      @include respond(xs) {
        height: 450px;
      }
      @include respond(sm) {
        height: 450px;
      }
    }
  }
}
</style>

