<template lang="html">
  <div class="inform">
      <div class="list">
          <span>账号管理</span>
          <router-link to="/my"><i class="iconfont icon-qianjin"></i></router-link>
      </div>
      <div class="list">
          <span>我的书架</span>
          <router-link to="/my"><i class="iconfont icon-qianjin"></i></router-link>
      </div>
      <div class="list">
          <span>我的钱包</span>
          <router-link to="/my"><i class="iconfont icon-qianjin"></i></router-link>
      </div>
      <div class="list">
          <span>我的消息</span>
          <router-link to="/my"><i class="iconfont icon-qianjin"></i></router-link>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style lang="scss">
.inform {
  .list {
    left: 12px;
    top: 196px;
    width: 347px;
    height: 58px;
    line-height: 20px;
    border-radius: 100px;
    color: rgba(16, 16, 16, 1);
    font-size: 14px;
    text-align: left;
    font-family: Arial;
    border: 1px solid rgba(187, 187, 187, 1);
    margin: 0 auto;
    margin-top: 30px;
    .iconfont {
      color: #71b0df;
    }
    span {
      line-height: 58px;
      font-size: 14px;
      padding-left: 30px;
    }
    i {
      float: right;
      padding-right: 20px;
      line-height: 58px;
      font-size: 30px !important;
    }
  }
}
</style>
