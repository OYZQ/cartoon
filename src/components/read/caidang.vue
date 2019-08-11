<template lang="html">
  <div class="caidang">
      <p>
          <span><i class="iconfont icon-caidan-"></i></span>
          <span><i class="iconfont icon-iconfontkongwujiaoxing"></i></span>
          <span><i class="iconfont icon-Shapecopy"></i></span>
          <span><i class="iconfont icon-huihuazhuanqu"></i></span>
          <span><i class="iconfont icon-shezhi"></i></span>
      </p>
  </div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style lang="scss">
.caidang {
  background-color: #fff;
  bottom: 0;
  position: fixed;
  p {
    width: 100%;
    height: 72px;
    line-height: 72px;
    text-align: center;
    border: 1px solid rgba(187, 187, 187, 1);
    span {
      .iconfont {
        font-size: 40px !important;
        color: #666;
        margin: 0 20px;
      }
      .icon-iconfontkongwujiaoxing {
        font-size: 45px !important;
      }
      .icon-huihuazhuanqu {
        color: rgb(5, 173, 218);
      }
      .icon-Shapecopy {
        font-size: 35px !important;
      }
      .icon-shezhi {
        font-size: 35px !important;
      }
    }
  }
}
</style>
