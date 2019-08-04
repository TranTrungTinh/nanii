<template>
<section class="gallery">
  <a-row :gutter="8">
    <a-col :xs="16">
      <a-row :gutter="8">
        <a-col :xs="24">
          <div class="gallery__item item1" v-lazy:background-image="galleries[0]"></div>
        </a-col>
        <a-col :xs="24">
          <div class="gallery__item item2" v-lazy:background-image="galleries[3]"></div>
        </a-col>
      </a-row>
    </a-col>
    <a-col :xs="8">
      <div class="gallery__item item3" v-lazy:background-image="galleries[1]"></div>
    </a-col>
    <a-col :xs="8">
      <div class="gallery__item item4" v-lazy:background-image="galleries[7]"></div>
    </a-col>
  </a-row>
  <a-row :gutter="8">
    <a-col :xs="8">
      <a-row :gutter="8">
        <a-col :xs="24">
          <div class="gallery__item item3" v-lazy:background-image="galleries[6]"></div>
        </a-col>  
        <a-col :xs="24">
          <div class="gallery__item item4" v-lazy:background-image="galleries[2]"></div>
        </a-col>
      </a-row>
    </a-col>
    <a-col :xs="16">
      <a-row :gutter="8">
        <a-col :xs="24">
          <div class="gallery__item item2" v-lazy:background-image="galleries[4]"></div>
        </a-col>
        <a-col :xs="24">
          <div class="gallery__item item1" v-lazy:background-image="galleries[5]"></div>
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
    }
  }
}
</style>