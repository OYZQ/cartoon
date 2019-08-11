<template lang="html">
  <div class="Mcon">
      <div class="cons">
          <p>脐橙<span><i class="iconfont icon-weixin"></i></span></p>
          <p>ID： 43736288<span><i class="iconfont icon-fuzhi"></i></span></p>
          <p>绑定邮箱<span><i class="iconfont icon-qianjin"></i></span></p>
          <p>绑定手机<span><i class="iconfont icon-qianjin"></i></span></p>
      </div>
      <div class="tuichu">
          <p>退出</p>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style lang="scss">
.Mcon {
  padding: 25px 0;
  background-color: #fff;
  padding-bottom: 250px;
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
  .tuichu {
    p {
      width: 296px;
      height: 55px;
      line-height: 55px;
      border-radius: 50px;
      color: rgba(16, 16, 16, 1);
      font-size: 24px;
      text-align: left;
      font-family: Arial;
      border: 1px solid rgba(187, 187, 187, 1);
      text-align: center;
      margin: 0 auto;
    }
  }
}
</style>
