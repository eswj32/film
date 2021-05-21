<template>
  <div class="detail-des-info">
    <div class="des">
      <div>{{ movie.mText }}</div>
      <span>{{ movie.mOld }}年/{{ type }}/电影/{{ movie.mArea }}</span>
    </div>
    <div class="info" @click="clickPor">
      简介
      <img src="~assets/img/common/back.svg" />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailDesInfo",
  data() {
    return {
      type: String,
    };
  },
  props: {
    movie: {},
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
        this.type = "战争";
        break;
      case "love":
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
    clickPor() {
      this.$emit("clickPor");
    },
  },
};
</script>

<style  scoped>
.detail-des-info {
  height: 44px;
  display: flex;
  justify-content: space-between;
  background-color: white;
}
.des > div {
  font-weight: 800;
  margin-bottom: 5px;
}
.des > span {
  font-size: 5px;
}
.info {
  font-size: 5px;
  line-height: 44px;
}
.info img {
  width: 12px;
  transform: rotate(180deg);
}
</style>
