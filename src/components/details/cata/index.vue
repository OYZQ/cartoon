<template lang="html">
  <div>
    <Test :list="list" :content="content"></Test>
  </div>
</template>

<script type="text/ecmascript-6">
import Test from "./test.vue";
export default {
  components: {
    Test
  },
  data() {
    return {
      list: [
        {num:'40'},
        {num:'39'},
        {num:'38'},
        {num:'37'},
        {num:'36'},
        {num:'35'},
        {num:'34'},
        {num:'33'},
        {num:'32'},
        {num:'31'},
        {num:'30'},
        {num:'29'},
        {num:'28'},
        {num:'27'},
        {num:'26'},
        {num:'25'},
        {num:'24'},
        {num:'23'},
        {num:'22'},
        {num:'21'},
        {num:'...'},
      ],
      content:"2019-6-21 周五 更新到第40话",
    };
  }
};
</script>

<style lang="scss">
</style>
