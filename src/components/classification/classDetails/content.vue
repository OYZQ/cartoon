<template lang="html">
  <div class="content">
      <div class="navs">
          <p>人气<span>|</span>新品<span>|</span>新更<span class="right">全部</span></p>
      </div>
      <div class="lists">
          <div class="photo" v-for="list of lists" :key="list.img">
              <router-link to="/details">
                <img :src="list.img">
                <p class="name">{{list.name}}</p>
                <p class="news">{{list.news}}</p>
              </router-link>
          </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: ["lists"]
};
</script>

<style lang="scss">
.content {
  background-color: #fff;
  .navs {
    height: 50px;
    line-height: 50px;
    color: rgba(16, 16, 16, 1);
    font-size: 18px;
    text-align: left;
    font-family: Arial;
    border: 1px solid rgba(187, 187, 187, 1);
    p {
      padding: 0 20px;
      .right {
        float: right;
        margin: 0;
      }
      span {
        margin: 0 15px;
      }
    }
  }
  .lists {
    margin: 5px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    .photo {
      width: 32%;
      margin-bottom: 20px;
      img {
        width: 100%;
      }
      p {
        font-size: 14px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin: 3px;
      }
      .name {
        color: #101010;
        font-weight: bold;
        font-size: 15px;
      }
      .news {
        color: #666;
      }
    }
  }
}
</style>
