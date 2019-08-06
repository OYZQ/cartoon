<template lang="html">
  <div class="Ucontent">
      <router-link to="/details" class="jieshao" v-for="item of items" :key="item.id">
          <div class="left">
              <img :src="item.img">
          </div>
          <div class="right">
              <p class="name">{{item.name}}</p>
              <p class="content">更新到{{item.data}}话</p>
              <p class="content">{{item.content}}</p>
          </div>
      </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      items: [
        {
          img: require("../../../assets/img/man/1.jpg"),
          id: "1",
          data: "77",
          name: "海贼王",
          content: "相传22年前，在一个童话般的世界里，有一群蓝精灵。"
        },
        {
          img: require("../../../assets/img/man/2.jpg"),
          id: "2",
          data: "66",
          name: "贤者之书",
          content: "相传22年前，在一个童话般的世界里，有一群蓝精灵。"
        },
        {
          img: require("../../../assets/img/man/3.jpg"),
          id: "3",
          data: "194",
          name: "一拳超人",
          content: "相传22年前，在一个童话般的世界里，有一群蓝精灵。"
        },
        {
          img: require("../../../assets/img/man/4.jpg"),
          id: "4",
          data: "53",
          name: "妖神记",
          content: "相传22年前，在一个童话般的世界里，有一群蓝精灵。"
        },
        {
          img: require("../../../assets/img/man/5.jpg"),
          id: "5",
          data: "99",
          name: "陆地沉默记",
          content: "相传22年前，在一个童话般的世界里，有一群蓝精灵。"
        },
        {
          img: require("../../../assets/img/man/6.jpg"),
          id: "6",
          data: "108",
          name: "魔武学院",
          content: "相传22年前，在一个童话般的世界里，有一群蓝精灵。"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.Ucontent {
  margin-top: 10px;
  .jieshao {
    background-color: #fff;
    margin: 10px 0;
    display: flex;
    height: 103px;
    .left {
      width: 20%;
      overflow: hidden;
      margin: 5px;
      img {
        width: 100%;
        height: auto;
        background-size: cover;
      }
    }
    .right {
      width: 80%;
      box-sizing: border-box;
      padding-top: 20px;
      padding-left: 10px;
      .name {
        font-size: 18px;
        color: #555;
        font-weight: bold;
      }
      .content {
        font-size: 14px;
        color: #888;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin: 8px 0;
      }
    }
  }
}
</style>
