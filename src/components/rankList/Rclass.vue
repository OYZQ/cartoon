<template lang="html">
<div>
  <div class="Rclass">
      <router-link to='/rankList/popularity' class="li">人气榜</router-link>
      <router-link to='/rankList/dark' class="li">黑马榜</router-link>
      <router-link to='/rankList/man' class="li">男生榜</router-link>
      <router-link to='/rankList/woman' class="li">女生榜</router-link>
      <router-link to='/rankList/free' class="li">免费榜</router-link>
      <router-link to='/rankList/complaints' class="li">吐槽榜</router-link>
  </div>
  <router-view></router-view>
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
