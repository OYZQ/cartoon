<template lang="html">
  <div>
    <Stop></Stop>
    <Bottom :one="list.one" :two="list.two" :three="list.three" :four="list.four" :five="list.five" :six="list.six" :seven="list.seven"></Bottom>
  </div>
</template>

<script type="text/ecmascript-6">
import Stop from "./Stop.vue";
import Bottom from './bottom.vue'
export default {
  components: {
    Stop,
    Bottom
  },
  data() {
    return {
        list:{
            one:'名侦探柯南',
            two:'火影忍者',
            three:'海贼王',
            four:'一拳超人',
            five:'阿修罗',
            six:'哆啦A梦',
            seven:'刀剑神域',
        }
    };
  }
};
</script>

<style lang="scss">
</style>
