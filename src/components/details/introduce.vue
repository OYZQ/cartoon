<template lang="html">
  <div class="introduce">
      <div class="bg"></div>
      <div class="left">
          <img :src="img">
      </div>
      <div class="right">
          <p class="name">{{name}}</p>
          <p class="author">作者：{{author}}</p>
          <p class="label">标签：{{label}}</p>
          <p class="hot">人气：{{hot}}</p>
          <p class="data">更至：{{data}}</p>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: ["img", "name", "author", "label", "hot", "data"]
};
</script>

<style lang="scss">
.introduce {
  display: flex;
  position: relative;
  overflow: hidden;
  margin-top: 10px;
  .bg {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: url("../../assets/img/banner/1.webp");
    opacity: 0.5;
    position: absolute;
    filter: blur(20px);
  }
  .left {
    z-index: 1;
    width: 35%;
    box-sizing: border-box;
    margin: 20px 20px 50px 20px;
    img {
      width: 100%;
    }
  }
  .right {
    z-index: 1;
    width: 65%;
    padding-top: 20px;
    color: rgb(240, 240, 240);
    font-size: 13px;
    p {
      margin: 12px 0;
    }
    .name {
      font-size: 20px;
      padding: 0 0 15px 0;
      color: #fff;
      font-weight: 600;
    }
  }
}
</style>
