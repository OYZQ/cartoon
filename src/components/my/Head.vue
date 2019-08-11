<template lang="html">
  <div class="head">
    <router-link to="/message">
      <div class="photo">
        <img :src="photo">
      </div>
      <div class="grade">{{grade}}</div>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      photo: require("../../assets/img/0.jpg"),
      grade: "LV.1"
    };
  }
};
</script>

<style lang="scss">
.head {
  .photo {
    margin: 0 auto;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .grade {
    color: #fff;
    font-size: 14px;
    margin: 0 auto;
    text-align: center;
    position: relative;
    top: -22px;
    font-weight: 200;
  }
}
</style>
