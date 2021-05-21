<template>
  <div>
    <swiper >
      <swiper-item v-for="item in lmovies" :key="item.mId">
        <a>
          <img :src="item.lSrc" alt="" class="limg" >
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    SwiperItem,
  },
  data() {
    return {};
  },
  props: {
    lmovies: Array,
    default() {
      return [];
    }
  },
  
};
</script>

<style  scoped>
.limg {
  width: 100%;
  height: 190px;
}
</style>
