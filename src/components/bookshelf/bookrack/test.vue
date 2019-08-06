<template lang="html">
    <ul class="c-list">
        <li v-for="book of books" :key="book.title">
        <router-link to="/details">
            <img :src="book.img" alt="book.title">
            <p class="title">{{book.title}}</p>
            <p class="read">{{book.read}}/{{book.chapter}}</p>
        </router-link>
        </li>
    </ul>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      books: [
        {
          img: require("../../../assets/img/man/18.jpg"),
          title: "鬼宅里生活有讲究",
          read: "未读",
          chapter: "第23话"
        },
        {
          img: require("../../../assets/img/man/17.jpg"),
          title: "山海逆战",
          read: "第4回",
          chapter: "第399回"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.c-list {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  li {
    width: 35%;
    padding: 15px 0 15px 15px;
    img {
      width: 100%;
    }
    p {
      padding-top: 10px;
    }
    .title {
      font-size: 16px;
      color: #101010;
      font-weight: bold;
    }
    .read {
      font-size: 14px;
      color: #666;
    }
  }
}
</style>
