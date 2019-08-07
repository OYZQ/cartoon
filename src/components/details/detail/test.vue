<template lang="html">
  <div class="detail">
      <div class="tops">
        <div class="wai"><div><span>人气：</span>{{top.renqi}}°C</div><div><span>点击：</span>{{top.dianji}}</div></div>
        <div class="wai"><div><span>月票：</span>{{top.yuepiao}}</div><div><span>打赏：</span>{{top.dashan}}</div></div>
      </div>
      <div class="bottom">
        <p class="title">作品简介</p>
        <p class="content">&nbsp;&nbsp;&nbsp;&nbsp;{{top.content}}</p>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: ["top"]
};
</script>

<style lang="scss">
.detail {
  margin-top: 15px;
  .tops {
    font-size: 16px;
    line-height: 20px;
    text-align: left;
    border: 1px solid rgba(187, 187, 187, 1);
    border-left: none;
    border-right: none;
    padding: 30px;
    .wai {
      display: flex;
      margin: 15px 0;
      div {
        width: 50%;
        span {
          color: #666;
        }
      }
    }
  }
  .bottom {
    color: #101010;
    border: 1px solid rgba(187, 187, 187, 1);
    border-left: none;
    border-right: none;
    .title {
      font-size: 24px;
      margin: 15px;
    }
    .content {
      margin: 30px 0;
      font-size: 16px;
      line-height: 22px;
    }
  }
}
</style>
