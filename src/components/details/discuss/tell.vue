<template lang="html">
  <div class="tell">
      <input placeholder="我来说两句" type="search">
      <i class="iconfont icon-qipao"></i>
  </div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style lang="scss">
.tell {
  width: 100%;
  background-color: rgb(245, 245, 238);
  height: 80px;
  position: fixed;
  bottom: 0;
  input {
    margin-top: 20px;
    text-align: center;
    font-size: 14px;
    line-height: 38px;
    width: 320px;
    height: 38px;
    border-radius: 15px;
    overflow: hidden;
    position: relative;
    left: 30px;
    z-index: 11;
    color: rgb(199, 199, 201);
  }
  .icon-qipao {
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    font-size: 20px !important;
    color: rgb(199, 199, 201);
    position: relative;
    left: -195px;
    position: relative;
    z-index: 12;
  }
}
</style>
