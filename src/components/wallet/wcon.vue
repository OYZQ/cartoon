<template lang="html">
  <div class="wcon">
      <div class="cons">
          <p>充值记录<span><i class="iconfont icon-qianjin"></i></span></p>
          <p>消费记录<span><i class="iconfont icon-qianjin"></i></span></p>
          <p>转赠往来<span><i class="iconfont icon-qianjin"></i></span></p>
          <p>我的购买<span><i class="iconfont icon-qianjin"></i></span></p>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style lang="scss">
.wcon {
  padding: 25px 0;
  background-color: #fff;
  padding-bottom: 50px;
  .cons {
    p {
      margin-bottom: 25px;
      height: 59px;
      line-height: 59px;
      color: rgba(16, 16, 16, 1);
      font-size: 22px;
      text-align: left;
      font-family: Arial;
      border: 1px solid rgba(187, 187, 187, 1);
      padding: 0 30px;
      span {
        float: right;
        .iconfont {
          font-size: 28px !important;
        }
        .icon-fuzhi {
          color: #666;
        }
        .icon-weixin {
          color: rgb(125, 212, 59);
        }
        .icon-qianjin {
          color: #71b0df;
        }
      }
    }
  }
}
</style>
