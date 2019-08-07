<template lang="html">
  <div>
    <Test :top="top"></Test>
    <Rem></Rem>
  </div>
</template>

<script type="text/ecmascript-6">
import Test from "./test.vue";
import Rem from '../rem.vue'
export default {
  components: {
    Test,
    Rem
  },
  data() {
    return {
      top: {
        renqi: "33038",
        dianji: "35151",
        yuepiao: "0",
        dashan: "0",
        content:
          "这是一个爱情片，很好记得发房间爱发回复哈打发回复俄爱的发到法地发呆发发。地阿东凡娜师弟你发啊，阿杜奶奶能否。。。"
      }
    };
  }
};
</script>

<style lang="scss">
</style>
