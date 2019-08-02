<template lang="html">
  <div>
      <Ctop></Ctop>
      <Class></Class>
      <Photos></Photos>
  </div>
</template>

<script type="text/ecmascript-6">
import Ctop from "./Ctop.vue";
import Class from "./class.vue";
import Photos from './photos.vue'
export default {
  components: {
    Ctop,
    Class,
    Photos
  }
};
</script>

<style lang="scss">
</style>
