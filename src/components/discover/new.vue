<template lang="html">
  <div class="rec">
      <div class="top">
          <div class="left">
              <p>新品</p>
          </div>
          <div class="right">
              <p>换一批</p>
          </div>
      </div>
      <div class="content">
        <ul>
          <li class="li"  v-for="item in items" :key="item.title">
            <router-link to="/details">
            <img :src="item.img" alt="item.title">
            <p>{{item.title}}</p>
            </router-link>
          </li>
        </ul>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      items: [
        {
          img: require("../../assets/img/man/10.jpg"),
          title: "不要打扰我飞翔"
        },
        {
          img: require("../../assets/img/man/11.jpg"),
          title: "五万一千次旋转"
        },
        {
          img: require("../../assets/img/man/12.jpg"),
          title: "弑神之路"
        },
        {
          img: require("../../assets/img/man/10.jpg"),
          title: "不要打扰我飞翔2"
        },
        {
          img: require("../../assets/img/man/11.jpg"),
          title: "五万一千次旋转2"
        },
        {
          img: require("../../assets/img/man/12.jpg"),
          title: "弑神之路2"
        }
      ]
    };
  }
};
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
  .content {
    ul {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: space-around;
      margin: 10px;
      .li {
        width: 30%;
        margin-bottom: 10px;
        img {
          width: 100%;
        }
        p {
          font-size: 15px;
          color: #333;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          width: 90%;
          text-align: center;
          margin: 5px;
        }
      }
    }
  }
}
</style>
