<template lang="html">
  <div class="nav">
      <p class="left">
        <router-link to="/discover">发现</router-link>
      </p>
      <p class="center">      
        <router-link to="/bookshelf">书架</router-link>
      </p>
      <p class="right">
        <router-link to="/my">我的</router-link>
      </p>
  </div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style lang="scss">
.nav {
  z-index: 100;
  position: fixed;
  display: flex;
  // position: relative;
  bottom: 0px;
  background-color: #fff;
  width: 100%;
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
    border-top: solid 1px #333;
    box-sizing: border-box;
  }
  .right {
    flex: 1;
  }
}
</style>
