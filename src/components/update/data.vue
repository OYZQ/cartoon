<template lang="html">
<div>
  <div class="datas">
      <p>
        <router-link to='/update/one'>一</router-link>
        <span>|</span>
        <router-link to="/update/two">二</router-link>
        <span>|</span>
        <router-link to="/update/three">三</router-link>
        <span>|</span>
        <router-link to="/update/four">四</router-link>
        <span>|</span>
        <router-link to="/update/five">五</router-link>
        <span>|</span>
        <router-link to="/update/six">六</router-link>
        <span>|</span>
        <router-link to="/update/seven">日</router-link>
      </p>
  </div>
  <router-view></router-view>
</div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style lang="scss">
.datas {
  left: 2px;
  top: 106px;
  height: 50px;
  line-height: 26px;
  color: rgba(16, 16, 16, 1);
  font-size: 20px;
  text-align: left;
  font-family: Arial;
  border: 1px solid rgba(187, 187, 187, 1);
  p {
    a {
      color: rgba(16, 16, 16, 1);
    }
    line-height: 50px;
    text-align: center;
    span {
      margin: 0 15px;
    }
  }
}
</style>
