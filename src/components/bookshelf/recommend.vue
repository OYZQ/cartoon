<template lang="html">
  <div class="rec">
      <div class="top">
          <div class="left">
              <p>推荐</p>
          </div>
          <div class="right">
              <p>换一批</p>
          </div>
      </div>
      <div class="content">
          
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style lang="scss">
.rec {
  position: relative;
  top: 21px;
  .top {
    height: 38px;
    width: 100%;
    border: solid 1px #ccc;
    line-height: 38px;
    color: #101010;
    font-size: 16px;
    box-sizing: content-box;
    .left {
      float: left;
      border: 1px solid #ccc;
      border-radius: 10px;
      padding: 0px 10px;
    }
    .right {
      float: right;
      border-left: #ccc solid 1px;
    }
  }
}
</style>
