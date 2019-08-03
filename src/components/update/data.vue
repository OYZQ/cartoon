<template lang="html">
  <div class="datas">
      <p>一<span>|</span>二<span>|</span>三<span>|</span>四<span>|</span>五<span>|</span>六<span>|</span>日</p>
  </div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style lang="scss">
.datas {
  left: 2px;
  top: 106px;
  height: 50px;
  line-height: 26px;
  color: rgba(16, 16, 16, 1);
  font-size: 20px;
  text-align: left;
  font-family: Arial;
  border: 1px solid rgba(187, 187, 187, 1);
  p {
    line-height: 50px;
    text-align: center;
    span {
      margin: 0 15px;
    }
  }
}
</style>
