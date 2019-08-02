<template lang="html">
  <div class="Rclass">
      <div class="li">人气榜</div>
      <div class="li">黑马榜</div>
      <div class="li">男生榜</div>
      <div class="li">女生榜</div>
      <div class="li">免费榜</div>
      <div class="li">吐槽榜</div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style lang="scss">
.Rclass {
  color: rgba(16, 16, 16, 1);
  font-size: 14px;
  text-align: center;
  font-family: Microsoft Yahei;
  border: 1px solid rgba(187, 187, 187, 1);
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .li {
    border-radius: 15px;
    line-height: 45px;
    margin: 17px 13px;
    width: 25%;
    height: 45px;
    color: rgba(16, 16, 16, 1);
    font-size: 14px;
    text-align: center;
    font-family: Microsoft Yahei;
    border: 1px solid rgba(187, 187, 187, 1);
  }
}
</style>
