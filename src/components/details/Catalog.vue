<template lang="html">
  <div class="catalog">
      <div class="sorts">
          <div>详情</div>
          <div>目录</div>
          <div>评论</div>
      </div>
      <div class="news">{{news}}</div>
      <div class="log">
          <router-link to="/details">{{one}}</router-link>
          <router-link to="/details">{{two}}</router-link>
          <router-link to="/details">{{three}}</router-link>
          <router-link to="/details">{{four}}</router-link>
          <router-link to="/details">{{five}}</router-link>
          <router-link to="/details">{{six}}</router-link>
          <router-link to="/details">{{seven}}</router-link>
          <router-link to="/details">{{eight}}</router-link>
          <router-link to="/details">{{nine}}</router-link>
      </div>
      <div class="more">
          <router-link to="/details">陛下，点击查看更多内容</router-link>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: [
    "news",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine"
  ]
};
</script>

<style lang="scss">
.catalog {
  background-color: #fff;
  .sorts {
    display: flex;
    height: 54px;
    line-height: 54px;
    color: rgba(16, 16, 16, 1);
    font-size: 20px;
    text-align: center;
    font-family: Arial;
    border: 2px solid #ccc;
    div {
      width: 33.33%;
    }
    div:nth-child(2) {
      border-left: 2px solid #ccc;
      border-right: 2px solid #ccc;
    }
  }
  .news {
    height: 48px;
    line-height: 48px;
    color: rgba(16, 16, 16, 1);
    font-size: 15px;
    text-align: left;
    font-family: Arial;
    border: 1px solid rgba(187, 187, 187, 1);
    padding-left: 15px;
  }
  .log {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    a {
      color: #101010;
      width: 28%;
      text-align: center;
      border: 1px solid #ccc;
      height: 54px;
      line-height: 54px;
      margin-top: 15px;
      font-size: 20px;
      border-radius: 5px;
    }
  }
  .more {
    height: 54px;
    line-height: 54px;
    border-radius: 5px;
    color: rgba(16, 16, 16, 1);
    font-size: 20px;
    text-align: center;
    font-family: Arial;
    border: 1px solid rgba(187, 187, 187, 1);
    margin: 15px 10px;
    a {
      color: #101010;
    }
  }
}
</style>
