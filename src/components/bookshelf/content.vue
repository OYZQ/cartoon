<template lang="html">
<div>
  <div class="content">
      <p class="c-top">
        <router-link to="/bookshelf/bookrack">书架</router-link>
         <span>|</span> 
         <router-link to="/bookshelf/history">历史</router-link>
      </p>
   <router-view></router-view>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style lang="scss">
.content {
  height: 100c;
  .c-top {
    a {
      color: #101010;
    }
    text-align: center;
    font-size: 22px;
    color: #101010;
    line-height: 70px;
    span {
      padding: 0 60px;
    }
  }
}
</style>
