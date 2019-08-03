<template lang="html">
  <div class="class">
      <router-link to="/ClassDetails" class="li">日漫</router-link>
      <router-link to="/ClassDetails" class="li">欧美</router-link>
      <router-link to="/ClassDetails" class="li">完结</router-link>
      <router-link to="/ClassDetails" class="li">轻小说</router-link>
      <router-link to="/ClassDetails" class="li">男生</router-link>
      <router-link to="/ClassDetails" class="li">女生</router-link>
  </div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style lang="scss">
.class {
  width: 90%;
  margin: 0 auto;
  margin-top: 20px;
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
    line-height: 36px;
    margin: 10px;
    width: 35%;
    height: 36px;
    color: rgba(16, 16, 16, 1);
    font-size: 14px;
    text-align: center;
    font-family: Microsoft Yahei;
    border: 1px solid rgba(187, 187, 187, 1);
  }
}
</style>
