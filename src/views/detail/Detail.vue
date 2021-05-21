<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <img :src="iMovie.mSrc" alt="" />
    <detail-tab-control>
      <div :class="{ avtive1: isActive1 }">
        <router-link :to="{ name: 'DetailDes', params: { id: this.id } }"
          ><span>详情</span></router-link
        >
      </div>
      <div :class="{ avtive2: isActive2 }">
        <router-link :to="{ name: 'DetailDis' }"><span>讨论</span></router-link>
      </div>
      <!-- <div :class="{ 'avtive3': isActive3 }">
        <router-link :to="{ name: 'DetailHot' }"><span>热议</span></router-link>
      </div> -->
    </detail-tab-control>
    <router-view></router-view>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/detailNavBar";
import DetailTabControl from "./childComps/detailTabControl";

import { getDetail } from "network/detail";

export default {
  name: "Detail",
  data() {
    return {
      id: null,
      iMovie: [],
      isActive: true,
      
      isDes: true,
      isDis: false,
      isHot: false,
      isActive1: false,
      isActive2: false,
      isActive3: false,
    };
  },
  components: {
    DetailNavBar,
    DetailTabControl,
  },
  created() {
    this.id = this.$route.params.id;

    //根据id请求详情数据
    getDetail(this.id).then((res) => {
      this.iMovie = res[0];
    });
  },
  updated() {
    let path = this.$route.path;
    let mPath = path.slice(-9);
    switch (mPath) {
      case "detailDes":
        this.isActive1 = true;
        this.isActive2 = false;
        this.isActive3 = false;
        break;
      case "detailDis":
        this.isActive2 = true;
        this.isActive1 = false;
        this.isActive3 = false;
        break;
      case "detailHot":
        this.isActive3 = true;
        this.isActive1 = false;
        this.isActive2 = false;
        break;
    }
  },
  methods: {},
};
</script>

<style  scoped>
#detail {
  width: 100%;
  background-color: white;
}
#detail img {
  width: 100%;
  height: 190px;
}
.avtive1 span,
.avtive2 span,
.avtive3 span {
  color: red;
}
</style>
