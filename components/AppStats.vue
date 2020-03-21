<template>
  <div :style="cssVars" class="stats">
    <div class="bio">
      <p>{{ selectedUser.bio }}</p>
    </div>
    <div >
      <span class="desc">Followers</span><br>
      <span class="lg">{{ selectedUser.followers }}</span>
    </div>
    <div>
      <span class="desc">Following</span><br>
      <span class="lg">{{ selectedUser.following }}</span>
    </div>
  </div>
</template>

<script>
import { mixin } from '~/utils/mixin'

export default {
  props: {
    selectedUser: {
      type: Object
    }
  },
  mixins: [mixin]
}
</script>

<style lang="scss" scoped>
.stats {
  font-family: 'Playfair Display', serif;
  display: flex;
  position: absolute;
  right: 0;
  top: 330px;
  width: 60%;
  justify-content: space-between;
  line-height: 1.2;
  color: var(--text-color);

}

.lg {
  font-size: 40px;
}

.bio {
  font-size: 18px;
  width: 60%;
  line-height: 1.4;
}

@media screen and (max-width: 980px) {
  .bio {
    display: none;
  }
  .stats {
    justify-content: flex-end;
    div {
      padding-left: 20px;
    }
  }
}

@media screen and (max-width: 600px) {
  .stats {
    display: none;
  }
}
</style>