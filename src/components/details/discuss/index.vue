<template lang="html">
  <div>
    <Test :items="items"></Test>
    <Tell></Tell>
  </div>
</template>

<script type="text/ecmascript-6">
import Test from "./test.vue";
import Tell from "./tell.vue"
export default {
  components: {
    Test,
    Tell
  },
  data() {
    return {
      items: [
        {
          img: require("../../../assets/img/0.jpg"),
          name: "晴天",
          data: "2019年6月3日",
          con: "越看越不好意思了",
          zan: "0"
        },
        {
          img: require("../../../assets/img/1.jpg"),
          name: "晴天",
          data: "2019年6月3日",
          con: "越看越不好意思了",
          zan: "0"
        },
        {
          img: require("../../../assets/img/2.jpg"),
          name: "晴天",
          data: "2019年6月3日",
          con: "越看越不好意思了",
          zan: "0"
        },
        {
          img: require("../../../assets/img/3.jpg"),
          name: "晴天",
          data: "2019年6月3日",
          con: "越看越不好意思了",
          zan: "0"
        },
        {
          img: require("../../../assets/img/4.jpg"),
          name: "晴天",
          data: "2019年6月3日",
          con: "越看越不好意思了",
          zan: "0"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
</style>
