<template lang="html">
  <div>
      <Rtop></Rtop>
      <Rclass></Rclass>
      <Rcontent></Rcontent>
  </div>
</template>

<script type="text/ecmascript-6">
import Rtop from "./Rtop.vue";
import Rclass from './Rclass.vue';
import Rcontent from './Rcontent.vue'
export default {
  components: {
      Rtop,
      Rclass,
      Rcontent,
  }
};
</script>

<style lang="scss">
</style>
