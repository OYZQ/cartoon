<template lang="html">
  <div class="Rtop">
      <div @click="$router.go(-1)"><i class="iconfont icon-fanhui"></i></div>
      <span>追更时间轴</span>
      <router-link to="/discover"><i class="iconfont icon-tubiaozhizuomoban"></i></router-link>
  </div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style lang="scss">
.Rtop {
  border: 1px solid #ccc;
  height: 55px;
  span {
    line-height: 55px;
    font-size: 28px;
    padding: 0 19.1%;
    font-weight: bold;
    color: rgb(0,0,83);
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
