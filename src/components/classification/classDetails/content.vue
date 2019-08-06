<template lang="html">
  <div class="content">
      <div class="navs">
          <p>
              <router-link to="/classDetails/hot">人气</router-link>
            <span>|</span>
              <router-link to="/classDetails/new">新品</router-link>
            <span>|</span>
              <router-link to="/classDetails/data">新更</router-link>
            <span class="right">
              <router-link to="/classDetails/all">全部</router-link>
            </span>
          </p>
      </div>
      <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style lang="scss">
.content {
  background-color: #fff;
  .navs {
    height: 50px;
    line-height: 50px;
    color: rgba(16, 16, 16, 1);
    font-size: 18px;
    text-align: left;
    font-family: Arial;
    border: 1px solid rgba(187, 187, 187, 1);
    p {
      a {
        color: rgba(16, 16, 16, 1);
      }
      padding: 0 20px;
      .right {
        float: right;
        margin: 0;
      }
      span {
        margin: 0 15px;
      }
    }
  }
}
</style>
