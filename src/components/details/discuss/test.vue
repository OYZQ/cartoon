<template lang="html">
  <div class="discuss">
      <div class="content" v-for="item of items" :key="item.img">
        <div class="img">
          <img :src="item.img">
        </div>
        <div class="con">
          <p class="name">{{item.name}}</p>
          <p class="data">{{item.data}}</p>
          <p class="con">{{item.con}}</p>
        </div>
        <div class="zan">
          <p><i class="iconfont icon-dianzan"></i><span>{{item.zan}}</span></p>
        </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: ["items"]
};
</script>

<style lang="scss">
.discuss {
  margin-top: 30px;
  font-size: 14px;
  .content {
    margin-top: 20px;
    display: flex;
    .img {
      margin-left: 10px;
      margin-right: 3px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      overflow: hidden;

      img {
        width: 30px;
        height: 30px;
      }
    }
    .con {
      width: 75%;
      font-size: 16px;
      .name {
        color: rgb(234, 117, 71);
      }
      .data {
        font-size: 14px;
        color: #999;
        margin: 6px 0px;
      }
      .con {
        font-size: 18xp;
        color: #333;
        margin: 14px 0;
      }
    }
    .zan {
      float: right;
      color: #666;
      p {
        span {
          margin:0 5px;
        }
      }
    }
  }
}
</style>
