<template lang="html">
  <div class="gold">
      <p class="one"><i class="iconfont icon-jinbi"></i></p>
      <p class="nums">12000枚</p>
      <p class="moneys">
        <router-link to="/payment">去充值</router-link>
      </p>
  </div>    
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style lang="scss">
.gold {
  padding: 10px 0;
  background-color: #fff;
  p {
    text-align: center;
  }
  .one {
    padding-top: 40px;
    color: rgb(248, 204, 13);
    .icon-jinbi {
      font-size: 40px !important;
    }
  }
  .nums {
    font-size: 20px;
    margin: 10px 0;
  }
  .moneys {
    margin: 40px auto;
    width: 298px;
    height: 56px;
    line-height: 56px;
    border-radius: 100px;
    color: rgba(16, 16, 16, 1);
    font-size: 20px;
    font-family: Arial;
    border: 1px solid rgba(187, 187, 187, 1);
    margin-bottom: 20px;
    a {
      color: rgba(16, 16, 16, 1);
    }
  }
}
</style>
