<template lang="html">
  <div>
      <Dtop :title="item.title"></Dtop>
      <Introduce :img="item.img" :name="item.name" :author="item.author" :label="item.label" :hot="item.hot" :data="item.data"></Introduce>
      <Catalog :news="item.news" :one="item.one" :two="item.two" :three="item.three" :four="item.four" :five="item.five" :six="item.six" :seven="item.seven" :eight="item.eight" :nine="item.nine" :list="list"></Catalog>
  </div>
</template>

<script type="text/ecmascript-6">
import Dtop from "./Dtop.vue";
import Introduce from "./introduce.vue";
import Catalog from "./Catalog.vue";
export default {
  data() {
    return {
      item: {
        title: "小抄写员之死",
        name: "阴阳界的新娘",
        author: "云朵屋动漫",
        label: " 生活 恋爱 ",
        hot: "33038℃",
        data: "151话",
        news: "2019-6-21 周五 更新到第40话",
        one: "40",
        two: "39",
        three: "38",
        four: "37",
        five: "36",
        six: "35",
        seven: "34",
        eight: "33",
        nine: "32",
        img: require("../../assets/img/woman/10.jpg")
      },
      list: [
        {
          img: require("../../assets/img/woman/11.jpg"),
          name: "魔王的轮舞曲",
          content: "夏洛初为了报复他们，于是就"
        },
        {
          img: require("../../assets/img/woman/12.jpg"),
          name: "夏洛特烦恼",
          content: "夏洛初为了报复他们，于是就"
        },
        {
          img: require("../../assets/img/woman/13.jpg"),
          name: "拯救封神美男",
          content: "夏洛初为了报复他们，于是就"
        }
      ]
    };
  },
  components: {
    Dtop,
    Introduce,
    Catalog,
  }
};
</script>

<style lang="scss">
</style>
