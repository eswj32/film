<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      // disableTouch: false,
      click: true,
      probeType: 3,
    });
    //监听滚动位置
    this.scroll.on("scroll", (position) => {
      // console.log(position);
      this.$emit('scroll', position)
    });
  },
  methods: {
    refresh() {
      this.scroll.refresh();
    },
    scrollTo(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time);
    },
    getScrollY() {
      return this.scroll.y
    }
  },
};
</script>

<style  scoped>

</style>
