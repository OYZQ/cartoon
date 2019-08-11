<template lang="html">
  <div>
      <Ptop></Ptop>
      <Money></Money>
      <Mode></Mode>
  </div>
</template>

<script type="text/ecmascript-6">
import Ptop from "./ptop.vue";
import Money from "./money.vue"
import Mode from "./mode.vue"
export default {
  components: {
    Ptop,
    Money,
    Mode
  }
};
</script>

<style lang="scss">
</style>
