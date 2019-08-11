<template lang="html">
  <div class="money">
    <div class="qian" v-for="list of lists" :key="list.one">
        <div class="left">
            <p>{{list.one}}</p>
            <p class="two">￥ {{list.two}}</p>
            <p>赠{{list.three}}枚</p>
        </div>
        <div class="right">
            <i class="iconfont icon-jinbi"></i>
        </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      lists: [
        { one: "1000", two: "10", three: "0" },
        { one: "2500", two: "20", three: "500" },
        { one: "5000", two: "50", three: "2500" },
        { one: "10000", two: "100", three: "5000" }
      ]
    };
  }
};
</script>

<style lang="scss">
.money {
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-top: 40px;
  padding-bottom:15px; 
  .qian {
    width: 149px;
    height: 88px;
    line-height: 26px;
    border-radius: 15px;
    color: rgba(16, 16, 16, 1);
    font-size: 18px;
    text-align: left;
    font-family: Arial;
    border: 1px solid rgba(187, 187, 187, 1);
    margin-bottom: 20px;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .left {
      .two {
        margin: 6px 0;
      }
    }
    .right {
      color: rgb(248, 204, 13);
      .icon-jinbi {
        font-size: 30px !important;
        position: relative;
        top: 15px;
      }
    }
  }
}
</style>
