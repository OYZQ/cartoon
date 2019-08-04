<template lang="html">
  <div class="catalog">
      <div class="sorts">
          <div>
            <router-link to="/details/detail">详情</router-link>
          </div>
          <div>目录</div>
          <div>评论</div>
      </div>
      <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
};
</script>

<style lang="scss">
.catalog {
  background-color: #fff;
  .sorts {
    display: flex;
    height: 54px;
    line-height: 54px;
    color: rgba(16, 16, 16, 1);
    font-size: 20px;
    text-align: center;
    font-family: Arial;
    border: 2px solid #ccc;
    div {
      width: 33.33%;
    }
    div:nth-child(2) {
      border-left: 2px solid #ccc;
      border-right: 2px solid #ccc;
    }
  }
}
</style>
