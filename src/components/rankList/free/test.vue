<template lang="html">
  <div class="Rcontent">
      <router-link to="/details" class="jieshao" v-for="item of items" :key="item.id">
          <div class="left">
              <img :src="item.img">
          </div>
          <div class="center">
              <div class="id">{{item.id}}</div>
          </div>
          <div class="right">
              <p class="name">{{item.name}}</p>
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
          img: require("../../../assets/img/woman/7.jpg"),
          id: "1",
          name: "海贼王",
          content: "相传22年前，在一个童话般的世界里，有一群蓝精灵。"
        },
        {
          img: require("../../../assets/img/woman/8.jpg"),
          id: "2",
          name: "贤者之书",
          content: "相传22年前，在一个童话般的世界里，有一群蓝精灵。"
        },
        {
          img: require("../../../assets/img/woman/9.jpg"),
          id: "3",
          name: "一拳超人",
          content: "相传22年前，在一个童话般的世界里，有一群蓝精灵。"
        },
        {
          img: require("../../../assets/img/woman/10.jpg"),
          id: "4",
          name: "妖神记",
          content: "相传22年前，在一个童话般的世界里，有一群蓝精灵。"
        },
        {
          img: require("../../../assets/img/woman/11.jpg"),
          id: "5",
          name: "陆地沉默记",
          content: "相传22年前，在一个童话般的世界里，有一群蓝精灵。"
        },
        {
          img: require("../../../assets/img/woman/12.jpg"),
          id: "6",
          name: "魔武学院",
          content: "相传22年前，在一个童话般的世界里，有一群蓝精灵。"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.Rcontent {
  margin-top: 15px;
  .jieshao:nth-child(1) {
    .center {
      .id {
        background-color: rgb(254, 218, 0);
      }
    }
  }
  .jieshao:nth-child(2) {
    .center {
      .id {
        background-color: rgb(254, 175, 0);
      }
    }
  }
  .jieshao:nth-child(3) {
    .center {
      .id {
        background-color: rgb(254, 143, 0);
      }
    }
  }
  .jieshao {
    margin: 5px 0;
    display: flex;
    height: 63px;
    .left {
      width: 30%;
      overflow: hidden;
      img {
        width: 100%;
        height: auto;
        background-size: cover;
      }
    }
    .center {
      width: 12%;
      .id {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background-color: #ccc;
        color: #555;
        font-size: 16px;
        text-align: center;
        line-height: 25px;
        margin: 7px auto;
      }
    }
    .right {
      width: 58%;
      padding-top: 10px;
      .name {
        font-size: 16px;
        color: #101010;
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
