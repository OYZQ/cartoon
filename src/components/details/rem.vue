<template lang="html">
  <div class="rem">
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
.rem {
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
