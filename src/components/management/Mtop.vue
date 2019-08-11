<template lang="html">
  <div class="Mtop">
      <div @click="$router.go(-1)"><i class="iconfont icon-fanhui"></i></div>
      <span class="span">账号管理</span>
      <router-link to="/discover"><i class="iconfont icon-tubiaozhizuomoban"></i></router-link>
  </div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style lang="scss">
.Mtop {
  border: 1px solid #ccc;
  height: 55px;
  background-color: #fff;
  .span {
    line-height: 55px;
    font-size: 26px;
    color: rgb#101010;
    text-align: left;
    margin-left: 11px;
  }
  .iconfont {
    color: #71b0df;
  }
  .icon-fanhui {
    font-size: 30px !important;
    float: left;
    line-height: 55px;
    padding: 0 10px;
  }
  .icon-tubiaozhizuomoban {
    font-size: 35px !important;
    float: right;
    line-height: 55px;
    padding: 0 10px;
  }
}
</style>
