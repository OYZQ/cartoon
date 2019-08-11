<template lang="html">
  <div class="mode">
      <p class="mode1">充值方式：</p>
      <p class="zfb"><span><i class="iconfont icon-umidd17"></i></span><span class="zf">支付宝</span></p>
      <p class="zfb"><span><i class="iconfont icon-weixin1"></i></span><span class="zf">微信</span></p>
      <p class="wt">充值遇到问题？ 请联系QQ: 1983036189<span><i class="iconfont icon-fuzhi"></i></span></p>
      <p class="xy"><a>《用户充值、消费服务协议》</a></p>
  </div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style lang="scss">
.mode {
  background-color: #fff;
  padding-bottom: 100px;
  .mode1 {
    height: 25px;
    color: rgba(200, 197, 197, 1);
    font-size: 20px;
    text-align: left;
    font-family: PingFangSC-regular;
    color: rgb(200, 197, 197);
    margin-bottom: 20px;
    margin-left: 30px;
  }
  .zfb {
    width: 331px;
    height: 56px;
    line-height: 56px;
    border-radius: 30px;
    color: #101010;
    font-size: 22px;
    text-align: left;
    font-family: Arial;
    border: 1px solid rgba(187, 187, 187, 1);
    margin: 0 auto;
    margin-bottom: 25px;
    span {
      .icon-umidd17 {
        font-size: 40px !important;
        color: rgb(0, 170, 239);
        margin: 0 12px;
        margin-left: 15px;
      }
      .icon-weixin1 {
        font-size: 40px !important;
        color: rgb(60, 176, 52);
        margin: 0 12px;
        margin-left: 15px;
      }
    }
    .zf {
      position: relative;
      top: -6px;
    }
  }
  .wt {
    margin-top: 40px;
    height: 20px;
    color: rgba(153, 153, 153, 1);
    font-size: 14px;
    text-align: left;
    font-family: PingFangSC-regular;
    text-align: center;
    .icon-fuzhi {
      color: #666;
      font-size: 20px !important;
      margin-left: 5px;
    }
  }
  .xy {
    text-align: center;
    margin-top: 10px;
    a {
      color: rgb(118, 119, 253);
      font-size: 14px;
    }
  }
}
</style>
