<template>
  <transition name="slide">
    <div class="singer-">sdasd</div>
  </transition>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  created() {
    console.log(this.singer)
  },
  computed: {
    ...mapGetters([
      'singer'
    ])
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .slide-enter-active, .slide-leave-active
      transition: all 0.3s
  .slide-enter, .slide-leave-to
      transform: translate3d(100%, 0, 0)
</style>
