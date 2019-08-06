<template lang="html">
      <div class="lists">
          <div class="photo" v-for="list of lists" :key="list.img">
              <router-link to="/details">
                <img :src="list.img">
                <p class="name">{{list.name}}</p>
                <p class="news">{{list.news}}</p>
              </router-link>
          </div>
      </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      lists: [
        {
          img: require("../../../../assets/img/man/1.jpg"),
          name: "女神养成计划",
          news: "最新 第124回"
        },
        {
          img: require("../../../../assets/img/man/2.jpg"),
          name: "小学生当妈妈也太那什么了",
          news: "最新 第16回"
        },
        {
          img: require("../../../../assets/img/man/3.jpg"),
          name: "猫鱼龙",
          news: "最新 第76回"
        },
        {
          img: require("../../../../assets/img/man/4.jpg"),
          name: "黑猫警长",
          news: "最新 第24回"
        },
        {
          img: require("../../../../assets/img/man/5.jpg"),
          name: "蓝精灵",
          news: "最新 第48回"
        },
        {
          img: require("../../../../assets/img/man/6.jpg"),
          name: "全世界都不如你",
          news: "最新 第36回"
        },
        {
          img: require("../../../../assets/img/man/7.jpg"),
          name: "死神来了",
          news: "最新 第17回"
        },
        {
          img: require("../../../../assets/img/man/8.jpg"),
          name: "金刚葫芦娃",
          news: "最新 第58回"
        },
        {
          img: require("../../../../assets/img/man/10.jpg"),
          name: "斗破苍穹",
          news: "最新 第22回"
        },
        {
          img: require("../../../../assets/img/man/9.jpg"),
          name: "兜底大陆",
          news: "最新 第88回"
        },
        {
          img: require("../../../../assets/img/man/11.jpg"),
          name: "一节大陆",
          news: "最新 第4回"
        },
        {
          img: require("../../../../assets/img/man/12.jpg"),
          name: "射击女子",
          news: "最新 第12回"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
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
</style>
