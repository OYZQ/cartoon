<template lang="html">
  <div class="top">
      <div @click="$router.go(-1)"><i class="iconfont icon-fanhui"></i></div>
      <span>我的书架</span>
      <router-link to="/discover"><i class="iconfont icon-tubiaozhizuomoban"></i></router-link>
  </div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style lang="scss">
.top {
  border: 1px solid #ccc;
  height: 55px;
  span {
    line-height: 55px;
    color: #101010;
    font-size: 28px;
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
