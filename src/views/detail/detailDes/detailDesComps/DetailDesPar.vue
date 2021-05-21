<template>
  <div class="detail-des-par">
    <div class="n1">
      <p>{{ movie.mText }}</p>
      <div @click="clickInfo"><img src="~assets/img/common/back.svg" /></div>
    </div>
    <div class="n2">
      <p>{{ movie.mOld }}年/{{ movie.mScore}}分/电影/{{ movie.mArea }}</p>
    </div>
    <div class="n">
      <div class="n3">
        <span>主演</span>
        <div>{{ movie.mActor_list }}</div>
      </div>
      <div class="n4">
        <span>导演</span>
        <div>{{ movie.mDirector }}</div>
      </div>
      <div class="n5">
        <span>类型</span>
        <div>{{ type }}</div>
      </div>
    </div>
    <div class="n6">
      <span>简介</span>
      <div>{{ movie.mDetail }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailDesPar",
  data() {
    return {
      type: String,
      isActive: false
    };
  },
  props: {
    movie: {}
    
  },
  updated() {
    switch (this.movie.mType) {
      case "youth":
        this.type = "青春";
        break;
      case "comedy":
        this.type = "喜剧";
        break;
      case "warfare":
        this.type = "爱情";
        break;
      case "science":
        this.type = "科幻";
        break;
      case "family":
        this.type = "家庭";
        break;
      case "suspense":
        this.type = "悬疑";
        break;
    }
  },
  methods: {
    imgClick() {
      this.isActive = !this.isActive;
    },
    clickInfo() {
      this.$emit("clickInfo");
    }
  }
};
</script>

<style  scoped>
.detail-des-par {
  position: relative;
  top: -108px;
  height: 0;
  transition: all 1s linear;
  overflow: hidden;
  background-color: white;
  padding: 0px 10px;
  font-size: 7px;
  /* z-index: 800; */
}
.n1 {
  margin-bottom: 10px;
  padding-top: 10px;
  font-size: 18px;
  font-weight: 800;
}
.n1 > div {
  position: absolute;
  top: 10px;
  right: 10px;
}
.n1 > div img {
  transform: rotate(270deg);
  width: 12px;
}
.n {
  margin: 10px 0px;
  padding-bottom: 10px;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.2);
}
.n2 {
  font-size: 5px;
}
.n3,
.n4,
.n5,
.n6 {
  display: flex;
  margin: 10px 0;
}
.n3 span,
.n4 span,
.n5 span,
.n6 span {
  display: block;
  padding-right: 25px;
  color: rgba(0, 0, 0, .3);
}
</style>
