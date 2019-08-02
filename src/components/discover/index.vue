<template lang="html">
  <div>
      <Swiper></Swiper>
      <Search></Search>
      <Sort></Sort>
      <Recommend></Recommend>
      <Hot></Hot>
      <Rise></Rise>
      <New></New>
      <Man></Man>
      <Woman></Woman>
      <Nav></Nav>
  </div>
</template>

<script type="text/ecmascript-6">
import Swiper from './swiper.vue'
import Nav from './nav.vue'
import Search from './search.vue'
import Sort from './sort.vue'
import Recommend from './recommend.vue'
import Hot from './hot.vue'
import Rise from './rise.vue'
import New from './new.vue'
import Man from './man.vue'
import Woman from './woman.vue'
  export default {
      components: {
          Swiper,
          Nav,
          Search,
          Sort,
          Recommend,
          Hot,
          Rise,
          New,
          Man,
          Woman
      }
  }
</script>

<style lang="scss">

</style>
