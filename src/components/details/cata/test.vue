<template lang="html">
  <div class="Ctest">
      <div class="date">
        <p>{{content}}<span>升序</span></p>
      </div>
      <div class="num">
        <router-link to="/read" class="item"  v-for="item of list" :key="item.num">{{item.num}}</router-link >
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: ["content", "list"]
};
</script>

<style lang="scss">
.Ctest {
  margin-top: 10px;
  .date {
    p {
      margin-left: 10px;
      height: 48px;
      line-height: 48px;
      color: rgba(16, 16, 16, 1);
      font-size: 14px;
      text-align: left;
      font-family: Arial;
      span {
        width: 84px;
        height: 43px;
        line-height: 43px;
        color: rgba(16, 16, 16, 1);
        font-size: 14px;
        text-align: center;
        font-family: Arial;
        border: 1px solid rgba(187, 187, 187, 1);
        float: right;
      }
    }
  }
  .num {
    margin-top: 15px;
    padding-bottom: 40px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    .item {
      width: 105px;
      height: 54px;
      line-height: 54px;
      border-radius: 3px;
      color: rgba(16, 16, 16, 1);
      font-size: 20px;
      text-align: center;
      font-family: Arial;
      border: 1px solid rgba(187, 187, 187, 1);
    }
  }
}
</style>
