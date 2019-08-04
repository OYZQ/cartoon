<template lang="html">
  <div class="Ctop">
      <div @click="$router.go(-1)"><i class="iconfont icon-fanhui"></i></div>
      <span>{{title}}</span>
      <router-link to="/discover"><i class="iconfont icon-xueyuan-mulu"></i></router-link>
      <router-link to="/search"><i class="iconfont icon-search"></i></router-link>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: ["title"]
};
</script>

<style lang="scss">
.Ctop {
  border: 1px solid #ccc;
  height: 55px;
  span {
    line-height: 55px;
    padding: 0 10px;
    font-weight: bold;
    color: rgba(16, 16, 16, 1);
    font-size: 18px;
    text-align: left;
    font-family: Arial;
  }
  .iconfont {
    color: rgb(113, 176, 223);
  }
  .icon-fanhui {
    font-size: 30px !important;
    float: left;
    line-height: 55px;
    padding: 0 10px;
  }
  .icon-search {
    font-size: 28px !important;
    float: right;
    line-height: 55px;
    padding: 0 10px;
  }
  .icon-xueyuan-mulu {
    font-size: 35px !important;
    float: right;
    line-height: 55px;
    padding: 0 5px;
  }
}
</style>
