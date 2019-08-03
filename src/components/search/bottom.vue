<template lang="html">
  <div class="bottom">
      <div class="btop">
        <input placeholder="请输入漫画名或小说名">
        <div class="sear">搜索</div>
      </div>
      <div class="content">
          <div class="odd">
            <div>{{one}}</div>
            <div>{{two}}</div>
          </div>
          <div class="even">
            <div>{{three}}</div>
            <div>{{four}}</div>
          </div>
          <div class="odd">
            <div>{{five}}</div>
            <div>{{six}}</div>
          </div>
          <div class="even">
            <div>{{seven}}</div>
          </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: ["one", "two", "three", "four", "five", "six", "seven"]
};
</script>

<style lang="scss">
.bottom {
  .btop {
    padding: 40px 0;
    display: flex;
    justify-content: center;
    input {
      box-sizing: border-box;
      border: none;
      width: 65%;
      height: 54px;
      font-size: 18px;
      text-align: center;
      border: 1px solid #999;
    }
    .sear {
      box-sizing: border-box;
      width: 25%;
      border: 1px solid #999;
      border-left: none;
      height: 54px;
      line-height: 54px;
      text-align: center;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      background-color: #fff;
    }
  }
  .content {
    .odd {
      width: 100%;
      display: flex;
      div:nth-child(1) {
        width: 45%;
      }
      div:nth-child(2) {
        width: 35%;
      }
      div {
        margin: 15px 0 0 15px;
        text-align: center;
        height: 54px;
        line-height: 54px;
        font-size: 18px;
        border-radius: 15px;
        background-color: #fff;
        border: 1px solid #999;
      }
    }
    .even {
      display: flex;
      div:nth-child(2) {
        width: 45%;
      }
      div:nth-child(1) {
        width: 30%;
      }
      div {
        margin: 15px 0 0 15px;
        text-align: center;
        height: 54px;
        line-height: 54px;
        font-size: 18px;
        border-radius: 15px;
        background-color: #fff;
        border: 1px solid #999;
      }
    }
  }
}
</style>
