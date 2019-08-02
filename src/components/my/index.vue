<template lang="html">
  <div>
    <Mytop></Mytop>
    <Head></Head>
    <Inform></Inform>
  </div>
</template>

<script type="text/ecmascript-6">
import Mytop from "./my-top";
import Head from './Head.vue'
import Inform from "./information.vue"
export default {
  components: {
    Mytop,
    Head,
    Inform,
  }
};
</script>

<style lang="scss">
</style>
