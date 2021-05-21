<template>
  <div class="des-col">
    <div class="movie">
      <img src="~assets/img/descol/movies.svg" /><span>zzq影视</span>
    </div>
    <div class="col">
      <img
        v-if="isColl"
        src="~assets/img/descol/collection.svg"
        @click="imgClick1"
      />
      <img v-else src="~assets/img/descol/collection2.svg" @click="imgClick2" />
      <img src="~assets/img/descol/forward.svg" />
      <img src="~assets/img/descol/download.svg" />
    </div>
  </div>
</template>

<script>
import { getCollection, setCollection, deleteColl } from "network/collection";
export default {
  name: "DesCol",
  data() {
    return {
      // isActive: this.isColl,
      // movies:[],
      mId: this.$route.params.id,
      uId: this.$store.state.uId,
      cId: this.$store.state.cId,
    };
  },
  props: {
    iMovie: {},
    isColl: Boolean,
    default() {
      return false;
    }
  },
  methods: {
    imgClick1(isActive) {
      setCollection(
        this.mId,
        this.uId,
        this.iMovie.mSrc,
        this.iMovie.mText
      ).then((res) => {
        getCollection(this.uId).then((res) => {
          try {
            res.forEach((item) => {
              if (item.mId == this.mId) {
                this.$emit("changeColl1")
                this.$store.commit("setCid", item.cId);
                throw Error();
              }
            });
          } catch (e) {}
        });
      });
    },

    imgClick2() {
      console.log(555)
      console.log(this.$store.state.cId);
      deleteColl(this.$store.state.cId).then((res) => {
        this.$emit("changeColl2")
      });
    },
  },
};
</script>

<style  scoped>
.des-col {
  width: 100%;
  height: 25px;
  /* background-color: white; */
  display: flex;
  align-content: center;
  justify-content: space-between;
  margin: 10px 0px;
}
img {
  height: 25px;
}
.movie span {
  display: block;
  position: relative;
  top: -25px;
  left: 25px;
}

.col {
  width: 100px;
  display: flex;
  justify-content: space-around;
}
</style>
