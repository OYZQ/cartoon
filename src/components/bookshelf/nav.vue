<template lang="html">
  <div class="nav">
      <p class="left">
        <router-link to="/discover" class="left">发现</router-link>
      </p>
      <p class="center">      
        <router-link to="/bookshelf" class="center">书架</router-link>
      </p>
      <p class="right">
        <router-link to="/my" class="center">我的</router-link>
      </p>
  </div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style lang="scss">
.nav {
  display: flex;
  position: relative;
  top: 20px;
  padding-top: 20px;
  p {
    text-align: center;
    padding: 15px;
    a {
      color: #101010;
      font-size: 18px;
    }
  }
  .left {
    flex: 1;
  }
  .center {
    flex: 3;
    border-top: solid 0.5px #999;
  }
  .right {
    flex: 1;
  }
}
</style>
