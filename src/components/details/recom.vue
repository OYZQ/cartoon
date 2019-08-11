<template lang="html">
  <div class="catalogs">
      <div class="news">{{item.news}}</div>
      <div class="log">
          <router-link to="/read">{{item.one}}</router-link>
          <router-link to="/read">{{item.two}}</router-link>
          <router-link to="/read">{{item.three}}</router-link>
          <router-link to="/read">{{item.four}}</router-link>
          <router-link to="/read">{{item.five}}</router-link>
          <router-link to="/read">{{item.six}}</router-link>
          <router-link to="/read">{{item.seven}}</router-link>
          <router-link to="/read">{{item.eight}}</router-link>
          <router-link to="/read">{{item.nine}}</router-link>
      </div>
      <div class="more">
          <router-link to="/details">陛下，点击查看更多内容</router-link>
      </div>
    <div class="recom">
      <div class="fonts">大家都在看哟</div>
      <div class="lists">
          <div v-for="item of list" :key="item.name">
              <img :src="item.img">
              <p class="name">{{item.name}}</p>
              <p class="content">{{item.content}}</p>
          </div>
      </div>
      <div class="read">
          <div class="little">收藏</div>
          <div class="little">打赏</div>
          <div class="little share">分享</div>
          <div class="big">开始阅读</div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
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
  }
};
</script>

<style lang="scss">
.catalogs {
  background-color: #fff;
  .news {
    height: 48px;
    line-height: 48px;
    color: rgba(16, 16, 16, 1);
    font-size: 15px;
    text-align: left;
    font-family: Arial;
    border: 1px solid rgba(187, 187, 187, 1);
    padding-left: 15px;
  }
  .log {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    a {
      color: #101010;
      width: 28%;
      text-align: center;
      border: 1px solid #ccc;
      height: 54px;
      line-height: 54px;
      margin-top: 15px;
      font-size: 20px;
      border-radius: 5px;
    }
  }
  .more {
    height: 54px;
    line-height: 54px;
    border-radius: 5px;
    color: rgba(16, 16, 16, 1);
    font-size: 20px;
    text-align: center;
    font-family: Arial;
    border: 1px solid rgba(187, 187, 187, 1);
    margin: 15px 10px;
    a {
      color: #101010;
    }
  }
  .recom {
    background-color: #fff;
    .fonts {
      height: 44px;
      line-height: 44px;
      color: rgba(16, 16, 16, 1);
      font-size: 20px;
      text-align: left;
      font-family: Arial;
      padding: 10px 30px;
    }
    .lists {
      display: flex;
      justify-content: space-around;
      padding-bottom: 90px;
      div {
        width: 28%;
        background-color: rgb(245, 245, 238);
        img {
          width: 100%;
        }
        .name {
          font-size: 14px;
          color: #333;
          font-weight: 600;
          text-align: center;
          margin-top: 4px;
        }
        .content {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-size: 14px;
          color: #999;
          padding: 5px 3px;
        }
      }
    }
    .read {
      margin-top: 50px;
      border-top: 1px solid #ccc;
      display: flex;
      position: fixed;
      bottom: 0;
      z-index: 1;
      background-color: #fff;
      width: 100%;
      .little {
        width: 20%;
        font-size: 14px;
        height: 70px;
        line-height: 70px;
        text-align: center;
      }
      .big {
        width: 40%;
        font-size: 30px;
        height: 70px;
        line-height: 70px;
        border: #ccc 1px solid;
        border-radius: 10px;
        margin: 5px 10px;
        text-align: center;
        padding: 0 15px;
      }
    }
  }
}
</style>
