<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperlist" :key="item.id">
        <img class="swiper-img" :src="item.imgurl" />
      </swiper-slide>
      <div class="swiper-pagination weiz" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data: function() {
    return {
      swiperlist: [
        {
          imgurl: require("../../assets/img/banner/1.webp")
        },
        {
          imgurl: require("../../assets/img/banner/2.webp")
        },
        {
          imgurl: require("../../assets/img/banner/3.webp")
        },
        {
          imgurl: require("../../assets/img/banner/4.webp")
        }
      ],
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        autoplay: {
          delay: 3000,
          disableOninteraction: true
        },
        loop: true
      }
    };
  }
};
</script>

<style lang="scss">
.wrapper {
  .swiper-img {
    width: 100%;
  }
  .weiz {
    position: static !important;
  }
}
</style>
