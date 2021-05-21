<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="left" class="left" @click="goBack">
        <img src="~assets/img/common/back.svg" />
      </div>
      <div slot="center" class="center">
        <img class="img" src="~assets/img/common/search.svg" alt="" />
        <input
          class="input"
          v-model="searchText"
          placeholder="陪你一起长大"
          type="text"
        />
      </div>
      <div slot="right" class="right" @click="search(searchText)">搜索</div>
    </nav-bar>
    <tab-control
      class="tab-control"
      :titles="['推荐', '青春', '爱情', '战争', '科幻', '喜剧', '家庭', '悬疑']"
      @tabClick="tabClick"
    ></tab-control>
    <scroll class="content" ref="scroll" @scroll="contentScroll">
      <home-swiper :lmovies="lmovies"></home-swiper>
      <movie-list :movies="movies[currentType]"></movie-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTo"></back-top>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";

import TabControl from "components/content/tabControl/TabControl";
import BackTop from "components/content/backTop/BackTop";

import HomeSwiper from "./childComps/homeSwiper";
import MovieList from "./childComps/movieList";

import { getLMovie, getMovie, getMovieType,getMovieName } from "network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    Scroll,
    TabControl,
    BackTop,

    HomeSwiper,
    MovieList,
  },
  data() {
    return {
      searchText: null,
      lmovies: [],
      movies: {
        total: [],
        youth: [],
        love: [],
        warfare: [],
        science: [],
        comedy: [],
        family: [],
        suspense: [],
      },
      currentType: "total",
      isShowBackTo: false,
      scrollY: 0,
    };
  },
  created() {
    this.getLMovie();
    this.getMovie();
    this.getMovieType("youth");
    this.getMovieType("love");
    this.getMovieType("warfare");
    this.getMovieType("science");
    this.getMovieType("comedy");
    this.getMovieType("family");
    this.getMovieType("suspense");
  },
  mounted() {
    const refresh = this.debounce(this.$refs.scroll.refresh, 200);
    //监听图片加载完成
    this.$bus.$on("itemImageLoad", () => {
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
    //查找电影
    search(searchText) {
      getMovieName(searchText).then(res => {
        // console.log(res)
        this.$router.push('/detail/' + res[0].mId + '/detailDes')
      })
    },
    //滚动位置
    contentScroll(position) {
      this.isShowBackTo = -position.y > 1000;
    },
    //tab切换
    tabClick(index) {
      // console.log(index);
      switch (index) {
        case 0:
          this.currentType = "total";
          break;
        case 1:
          this.currentType = "youth";
          break;
        case 2:
          this.currentType = "love";
          break;
        case 3:
          this.currentType = "warfare";
          break;
        case 4:
          this.currentType = "science";
          break;
        case 5:
          this.currentType = "comedy";
          break;
        case 6:
          this.currentType = "family";
          break;
        case 7:
          this.currentType = "suspense";
          break;
      }
    },
    //返回上一层
    goBack() {
      this.$router.go(-1);
    },
    //返回顶部事件backTop
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    getLMovie() {
      getLMovie().then((res) => {
        this.lmovies = res;
      });
    },
    getMovie() {
      getMovie().then((res) => {
        this.movies.total = res;
      });
    },
    getMovieType(type) {
      getMovieType(type).then((res) => {
        this.movies[type] = res;
      });
    },
  },
};
</script>

<style  scoped>
#home {
  position: relative;
  height: 100vh;
}
.left {
  position: relative;
  top: 6px;
}
.left img {
  width: 20px;
}
.center {
  margin: 5px 0px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  padding-top: 1px;
}
img {
  height: 30px;
}

.input {
  background-color: rgba(0, 0, 0, 0.01);
  margin-left: -10px;
  width: 150px;
  height: 30px;
  border-style: none;
  outline: none;
}
.right {
  font-size: 15px;
}

.content {
  position: absolute;
  top: 75px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.8);
}
</style>
