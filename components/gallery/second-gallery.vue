<template>
<section class="gallery">
  <a-row :gutter="8">
    <a-col :xs="24" :sm="9" :lg="16">
      <div class="gallery__item item1" v-lazy:background-image="galleries[3]"></div>
    </a-col>
    <a-col :xs="24" :sm="15" :lg="8">
      <div class="gallery__item item1" v-lazy:background-image="galleries[4]"></div>
    </a-col>
    <a-col :xs="24">
      <a-row :gutter="8">
        <a-col :xs="24" :lg="12">
          <a-row :gutter="8">
            <a-col :xs="24" :lg="24">
              <div class="gallery__item item3" v-lazy:background-image="galleries[2]"></div>
            </a-col>
            <a-col :xs="24" :lg="24">
              <div class="gallery__item item4" v-lazy:background-image="galleries[0]"></div>
            </a-col>
            <a-col :xs="12">
              <div class="gallery__item item4" v-lazy:background-image="galleries[5]"></div>
            </a-col>
            <a-col :xs="12">
              <div class="gallery__item item4" v-lazy:background-image="galleries[6]"></div>
            </a-col>
          </a-row>
        </a-col>
        <a-col :xs="24" :lg="12">
          <div class="gallery__item item2" v-lazy:background-image="galleries[1]"></div>
        </a-col>
        <a-col :xs="24" :lg="12">
          <div class="gallery__item item2" v-lazy:background-image="galleries[7]"></div>
        </a-col>
      </a-row>
    </a-col>
    
  </a-row>
</section>
</template>
<script>
export default {
  props: {
    galleries: { type: Array, required: true, default: () => [] }
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/scss/mixins/index.scss";
.gallery {
  &__item {
    background-position: bottom;
    background-size: cover;
    background-repeat: no-repeat;
    margin: 4px 0;
    width: 100%;
    border-radius: 4px;
  }

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

