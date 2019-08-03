<template lang="html">
  <div class="sort">
      <p class="left">
          <router-link to="/classification">分类</router-link>
      </p>
      <p class="center">  
          <router-link to="/rankList">排行 </router-link>
      </p>
      <p class="right">
          <router-link to="/update">追更 </router-link>
      </p>
  </div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style lang="scss">
.sort {
  display: flex;
  position: relative;
  top: 20px;
  border-top: solid 0.5px #999;
  border-bottom: solid 0.5px #999;
  p {
    text-align: center;
    padding: 15px;
    a {
      color: #101010;
    }
  }
  .left {
    flex: 1;
  }
  .center {
    flex: 3;
  }
  .right {
    flex: 1;
  }
}
</style>
