<template lang="html">
  <div class="Mcon">
      <div class="cons">
          <p>头像<span><img src="../../assets/img/0.jpg"><i class="iconfont icon-qianjin"></i></span></p>
          <p>昵称<span>脐橙<i class="iconfont icon-qianjin"></i></span></p>
          <p>性别<span>男<i class="iconfont icon-qianjin"></i></span></p>
          <p>年龄<span>25<i class="iconfont icon-qianjin"></i></span></p>
          <p>居住地<span><i class="iconfont icon-qianjin"></i></span></p>
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
        font-size: 16px;
        .iconfont {
          font-size: 28px !important;
        }
        .icon-qianjin {
          color: #71b0df;
          margin-left: 10px;
        }
        img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            position: relative;
            top: 10px;
        }
      }
    }
  }
}
</style>
