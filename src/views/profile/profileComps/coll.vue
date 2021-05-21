<template>
  <div class="coll">
    <nav-bar>
      <div slot="left" class="left" @click="coll">
        <img src="~assets/img/common/back.svg" /></div
    >
    <div slot="center" class="center">收藏</div></nav-bar>
    <div v-for="item in store" :key="item.id" class="item">
      <div class="coll-item">
        <div class="item-left">
          <img :src="item.mSrc" />
        </div>
        <div class="item-center">
          {{ item.mText }}
        </div>
        <div class="item-right" @click="deleteColl(item.cId)">
          <img src="~assets/img/signin/delete.svg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import { deleteColl } from "network/collection";
export default {
  name: "coll",
  data() {
    return {
      disInfo: [],
    };
  },
  components: {
    NavBar,
  },
  props: {
    store: Array,
    default() {
      return [];
    },
  },
  methods: {
    coll() {
      // console.log(mid);
      this.$emit("collec");
    },
    deleteColl(id) {
      deleteColl(id).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>

<style  scoped>
.coll {
  position: relative;
  height: 100vh;
  top: -40px;
  background-color: white;
}
.left {
  position: relative;
  top: 6px;
}
.left img {
  width: 20px;
}
.center {
  font-size: 24px;
  font-weight: 600;
}

.item {
  width: 100%;

  margin: 10px 0;
  background-color: rgba(100, 100, 100, 0.1);
  display: flex;
}
.coll-item {
  display: flex;
  justify-content: space-between;
  border-radius: 15px;
}
.item-left {
  text-align: center;
  width: 70px;
}
.item-left img {
  width: 70px;
}
.item-right {
  width: 50px;
  margin-top: 15px;
}
.item-center {
  width: 200px;
  text-align: center;
  position: relative;
  top: 40px;
}
.item-right img {
  width: 50px;
}
</style>
