<template>
<section class="gallery">
  <a-row :gutter="8">
    <a-col :xs="24">
      <a-row :gutter="8">
        <a-col :xs="12">
          <galary-item classes="item1" :img="galleries[1]" />
        </a-col>
        <a-col :xs="12">
          <galary-item classes="item2" :img="galleries[2]" />
        </a-col>
      </a-row>
    </a-col>
  </a-row>
  <a-row :gutter="8">
    <a-col :lg="8">
      <a-row :gutter="8">
        <a-col :xs="24">
          <galary-item classes="item2" :img="galleries[0]" />
        </a-col>
        <a-col :xs="24">
          <galary-item classes="item2" :img="galleries[7]" />
        </a-col>
      </a-row>
    </a-col>
    <a-col :lg="8">
      <galary-item classes="item5" :img="galleries[4]" />
    </a-col>
    <a-col :lg="8">
      <galary-item classes="item5" :img="galleries[5]" />
    </a-col>
    <a-col :lg="16">
      <galary-item classes="item4" :img="galleries[3]" />
    </a-col>
    <a-col :lg="16">
      <galary-item classes="item4" :img="galleries[6]" />
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
.gallery {
  .item {
    &1 {
      height: 260px;
    }
    &2 {
      height: 540px;
    }
    &3 {
      height: 120px;
    }
    &4 {
      height: 306px;
    }
    &5 {
      height: 460px;
    }
  }
}
@media screen and (max-width: 500px) { 
  .gallery {
    .item5 {
      height: 580px;
    }
  }
}
</style>

