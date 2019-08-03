<template lang="html">
  <div class="photos">
      <div class="item" v-for="item of items" :key="item.name" >
          <router-link to="/ClassDetails" class="li">
            <img :src="item.imgurl">
            <p>{{item.name}}</p>
          </router-link>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      items: [
        {
          imgurl: require("../../assets/img/woman/1.jpg"),
          name: "冒险"
        },
        {
          imgurl: require("../../assets/img/woman/2.jpg"),
          name: "恋爱"
        },
        {
          imgurl: require("../../assets/img/woman/3.jpg"),
          name: "科幻"
        },
        {
          imgurl: require("../../assets/img/woman/4.jpg"),
          name: "轻小说"
        },
        {
          imgurl: require("../../assets/img/woman/5.jpg"),
          name: "后宫"
        },
        {
          imgurl: require("../../assets/img/woman/6.jpg"),
          name: "恐怖"
        },
        {
          imgurl: require("../../assets/img/woman/7.jpg"),
          name: "萌系"
        },
        {
          imgurl: require("../../assets/img/woman/8.jpg"),
          name: "魔法"
        },
        {
          imgurl: require("../../assets/img/woman/9.jpg"),
          name: "美食"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.photos {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  flex-direction: row;
  padding: 10px;
  box-sizing: border-box;
  .item {
    width: 30%;
    padding-top: 10px;
    img {
      width: 100%;
    }
    p {
      font-size: 14px;
      color: #333;
      text-align: center;
      margin: 8px 0;
    }
  }
}
</style>
