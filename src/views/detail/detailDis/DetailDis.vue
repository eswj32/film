<template>
  <div id="detail-dis">
    <scroll class="content" ref="sc">
      <detail-dis-discuss
        v-for="item in mDiscuss"
        :key="item.dId"
        :Discuss="item"
      ></detail-dis-discuss
    ></scroll>
    <detail-dis-input class="disInput"></detail-dis-input>
  </div>
</template>

<script>
import DetailDisDiscuss from "./DetailDisComps/DetailDisDiscuss";
import Scroll from "components/common/scroll/Scroll";
import DetailDisInput from "./DetailDisComps/DetailDisInput";

import { getDetailDiscess } from "network/detail";

export default {
  name: "DetailDis",
  data() {
    return {
      id: null,
      mDiscuss: [],
    };
  },
  components: {
    DetailDisDiscuss,
    DetailDisInput,
    Scroll,
  },
  created() {
    this.id = this.$route.params.id;
    //获取指定id电影的讨论信息
    this.getDetailDiscess(this.id);
  },
  mounted() {
    const refresh = this.debounce(this.$refs.sc.refresh, 200);
    //监听图片加载完成
    this.$bus.$on("itemImage", () => {
      refresh();
    });
  },
  methods: {
    //图片加载防抖函数
    debounce(func, delay) {
      let timer = null;
      return function (...args) {
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(() => {
          func.apply(this, args);
        }, delay);
      };
    },
    getDetailDiscess(id) {
      getDetailDiscess(id).then((res) => {
        this.mDiscuss = res;
      });
    },
  },
};
</script>

<style  scoped>
#detail-dis {
  position: relative;
  top: 0;
  width: 100%;
  height: 355px;
  background-color: white;
}
.content {
  position: absolute;
  top: 0px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.8);
}

.disInput {
  position: fixed;
  bottom: 0;
  width: 100%;
  margin-right: 5px;
  text-align: center;
  line-height: 50px;
  box-shadow: 0px -2px 2px rgba(100, 100, 100, 0.2);
  background-color: white;
  z-index: 8888;
}
</style>