<template lang="html">
  <div class="sea">
      <input class="search"></input>
      <i class="iconfont icon-search"></i>
      <i class="iconfont icon-xueyuan-mulu"></i>
  </div>
</template>

<script src="//at.alicdn.com/t/font_1329039_q3oq9q7x2i.js"></script>
<script type="text/ecmascript-6">
export default {};
</script>

<style lang="scss">
.sea {
  height: 0px;
  position: relative;
  top: -8.5rem;
  .search {
    font-size: 18px;
    line-height: 38px;
    width: 281px;
    height: 38px;
    border-radius: 15px;
    background-repeat: no-repeat;
    background-position: 50%;
    overflow: hidden;
    position: relative;
    left: 30px;
    z-index: 11;
  }
  .iconfont {
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    font-size: 20px !important;
    color: rgb(113, 176, 223);
    position: relative;
    left: -5px;
    position: relative;
    z-index: 12;
  }
  .icon-xueyuan-mulu {
    color: #ccc;
    font-size: 35px !important;
    position: relative;
    z-index: 11;
    top: 0.2rem;
    background-color: #fff;
    width: 46px;
    height: 38px;
    left: 20px;
  }
}
</style>
