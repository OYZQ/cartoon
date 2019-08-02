<template lang="html">
  <div class="sort">
      <p class="left">
          分类
      </p>
      <p class="center">    
          排行  
      </p>
      <p class="right">
          追更
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
