<template lang="html">
  <div class="Ctops">
      <div @click="$router.go(-1)"><i class="iconfont icon-fanhui"></i></div>
      <span class="span">第 1 话 12/1</span>
      <router-link to="/discover"><i class="iconfont icon-tubiaozhizuomoban"></i></router-link>
  </div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style lang="scss">
.Ctops {
  background-color: #fff;
  border: 1px solid #ccc;
  height: 55px;
  .span {
    line-height: 55px;
    font-size: 28px;
    font-weight: bold;
    color: rgba(16, 16, 16, 1);
    font-size: 18px;
    text-align: left;
    font-family: Arial;
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
