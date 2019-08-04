<template lang="html">
  <div>
      <Cltop></Cltop>
      <Content :lists="lists"></Content>
  </div>
</template>

<script type="text/ecmascript-6">
import Cltop from "./Cltop.vue";
import Content from "./content.vue";
export default {
  components: {
    Cltop,
    Content,
  },
  data() {
    return {
      lists: [
        {
          img: require("../../../assets/img/woman/11.jpg"),
          name: "女神养成计划",
          news: "最新 第124回"
        },
        {
          img: require("../../../assets/img/woman/12.jpg"),
          name: "小学生当妈妈也太那什么了",
          news: "最新 第16回"
        },
        {
          img: require("../../../assets/img/woman/13.jpg"),
          name: "猫鱼龙",
          news: "最新 第76回"
        },
        {
          img: require("../../../assets/img/woman/14.jpg"),
          name: "黑猫警长",
          news: "最新 第24回"
        },
        {
          img: require("../../../assets/img/woman/15.jpg"),
          name: "蓝精灵",
          news: "最新 第48回"
        },
        {
          img: require("../../../assets/img/woman/16.jpg"),
          name: "全世界都不如你",
          news: "最新 第36回"
        },
        {
          img: require("../../../assets/img/woman/17.jpg"),
          name: "死神来了",
          news: "最新 第17回"
        },
        {
          img: require("../../../assets/img/woman/18.jpg"),
          name: "金刚葫芦娃",
          news: "最新 第58回"
        },
        {
          img: require("../../../assets/img/woman/10.jpg"),
          name: "斗破苍穹",
          news: "最新 第22回"
        },
        {
          img: require("../../../assets/img/woman/9.jpg"),
          name: "兜底大陆",
          news: "最新 第88回"
        },
        {
          img: require("../../../assets/img/woman/8.jpg"),
          name: "一节大陆",
          news: "最新 第4回"
        },
        {
          img: require("../../../assets/img/woman/7.jpg"),
          name: "射击女子",
          news: "最新 第12回"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
</style>
