<template>
  <div :class="comClass" v-lazy:background-image="img">
    <div class="stage">
      <div :class="bindClass" @click="active"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: { type: String, required: true, default: () => '' },
    classes: { type: String, required: true, default: () => '' }
  },
  data() {
    return {
      isActive: false
    }
  },
  computed: {
    comClass() {
      return `gallery__item ${this.classes}`
    },
    bindClass() {
      return this.isActive ? 'heart active' : 'heart'
    }
  },
  methods: {
    active() {
      this.isActive = !this.isActive
    }
  }
}
</script>
<style lang="scss" scoped>
// @import "@/assets/scss/mixins/love.scss";
.gallery__item {
  
  background-position: bottom;
  background-size: cover;
  background-repeat: no-repeat;
  margin: 4px 0;
  width: 100%;
  border-radius: 4px;

  position: relative;

  .stage {
    position: absolute;
    left: -10px;
    bottom: 0px;
    z-index: 2;
    // font-size: 18px;

    .heart {
      width: 80px;
      height: 80px;
      background: url("https://cssanimation.rocks/images/posts/steps/heart.png") no-repeat;
      background-position: 0 0;
      cursor: pointer;
      transition: background-position 1s steps(28);
      transition-duration: 0s;
      
      &.active {
        transition-duration: 1s;
        background-position: -2800px 0;
      }

    }
  }
}
</style>