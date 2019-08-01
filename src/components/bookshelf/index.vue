<template lang="html">
  <div>
      <Swiper></Swiper>
      <Search></Search>
      <Sort></Sort>
      <Recommend></Recommend>
      <Nav></Nav>
  </div>
</template>

<script type="text/ecmascript-6">
import Swiper from './swiper.vue'
import Nav from './nav.vue'
import Search from './search.vue'
import Sort from './sort.vue'
import Recommend from './recommend.vue'
  export default {
      components: {
          Swiper,
          Nav,
          Search,
          Sort,
          Recommend
      }
  }
</script>

<style lang="scss">

</style>
