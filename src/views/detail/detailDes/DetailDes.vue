<template>
  <div id="detail-des">
    <!-- {{iMovie}} -->
    <des-col
      :iMovie="iMovie"
      :isColl="isColl"
      @changeColl1="changeColl1"
      @changeColl2="changeColl2"
    ></des-col>
    <detail-des-info :movie="iMovie" @clickPor="clickPor"></detail-des-info>
    <detail-des-par
      :movie="iMovie"
      @clickInfo="clickInfo"
      :class="{ avtive: isActive }"
    ></detail-des-par>
    <nav-bar class="bar">
      <div slot="left">选集</div>
      <div slot="right"><img src="~assets/img/common/back.svg" /></div>
    </nav-bar>
    <div class="slice" :class="{ avtiveS: isActiveS }" @click="sliceClick">
      正片
    </div>
    <div class="img"><img src="~assets/img/detail/vip.jpg" /></div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import DetailDesInfo from "./detailDesComps/DetailDesInfo";
import DetailDesPar from "./detailDesComps/DetailDesPar";
import DesCol from "./detailDesComps/DesCol";
import { getDetail } from "network/detail";
import { getCollection } from "network/collection";

export default {
  name: "DetailDes",
  components: {
    DesCol,
    NavBar,
    DetailDesInfo,
    DetailDesPar,
  },

  data() {
    return {
      id: this.$route.params.id,
      uId: this.$store.state.uId,
      iMovie: {},
      cId: "",
      isColl: true,
      isActive: false,
      isActiveP: false,
      isActiveS: false,
    };
  },
  created() {
    //根据id请求详情数据
    getDetail(this.id).then((res) => {
      // console.log(111111111111111)
      this.iMovie = res[0];
    });
  },
  mounted() {
    getCollection(this.uId).then((res) => {
      // console.log(res);
      if (res.length === 0) {
        this.isColl = true;
        // console.log(111);
      } else {
        try {
          res.forEach((item) => {
            // console.log(item.mId);
            if (item.mId == this.id) {
              this.isColl = false;
              // console.log(item.cId);
              this.$store.commit("setCid", item.cId);
              throw Error();
            } else {
              this.isColl = true;
              // console.log(222);
            }
          });
        } catch (e) {}
      }
    });
  },
  methods: {
    clickPor() {
      this.isActive = !this.isActive;
    },
    clickInfo() {
      this.isActive = !this.isActive;
    },
    sliceClick() {
      this.isActiveS = !this.isActiveS;
    },
    changeColl1() {
      this.isColl = false;
    },
    changeColl2() {
      this.isColl = true;
    }
  },
};
</script>

<style  scoped>
#detail-des {
  width: 100%;
  height: 357px;
  padding: 0px 5px;
  background-color: white;
}
.avtive {
  transition: all 1s linear;
  height: 375px;
}
.bar {
  margin: 10px 0;
  height: 20px;
  line-height: 20px;
  font-weight: 600;
  box-shadow: 0 0 0;
}
.bar img {
  width: 12px;
  transform: rotate(180deg);
}
.slice {
  width: 100px;
  height: 50px;
  line-height: 50px;
  background-color: rgba(193, 210, 240, 0.5);
  border-radius: 5px;
  text-align: center;
  margin-bottom: 20px;
}
.avtiveS {
  color: rgb(30, 155, 255);
}
.img {
  text-align: center;
}
.img img {
  width: 90%;
  height: 80px;
}
</style>