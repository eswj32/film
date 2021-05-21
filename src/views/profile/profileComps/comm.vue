<template>
  <div class="comm">
    <nav-bar>
      <div slot="left" class="left" @click="comm">
        <img src="~assets/img/common/back.svg" />
      </div>
      <div slot="center" class="center">评论</div></nav-bar
    >
    <div v-for="item in nis" :key="item.id" class="dis">
      <div class="dis-item">
        <div class="item-left">
          <img :src="item.mSrc" />
          <span>{{ item.mName }}</span>
        </div>
        <div class="item-center">
          {{ item.dText }}
        </div>
        <div class="item-right" @click="deleteDus(item.dId)">
          <img src="~assets/img/signin/delete.svg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import { deleteDiscess } from "network/detail";

export default {
  name: "comm",
  data() {
    return {
      nameDis: [],
    };
  },
  props: {
    nis: Array,
    default() {
      return [];
    },
  },
  components: {
    NavBar,
  },
  created() {},
  methods: {
    comm() {
      this.$emit("commec");
    },
    deleteDus(id) {
      deleteDiscess(id).then((res) => {
        // console.log(res)
      });
    },
  },
};
</script>

<style  scoped>
.comm {
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
.dis {
  width: 100%px;
  height: 120px;
  margin: 10px 10px;
  background-color: rgba(100, 100, 100, 0.1);
  overflow: hidden;
}
.dis-item {
  width: 100%;
  padding: 10px 10px;
  /* height: 90px; */
  display: flex;
  justify-content: space-between;
  border-radius: 15px;
}
.item-left {
  text-align: center;
  width: 100px;
  padding: 5px 5px ;
  word-break: break-all;
  word-wrap: break-word;
  white-space: normal;
}
.item-left img {
  width: 60px;
}
.item-left span {
  font-size: 14px;
}
.item-right {
  width: 50px;
  margin-top: 15px;
  margin-right: 15px;
}
.item-center {
  width: 200px;
  word-break: break-all;
  word-wrap: break-word;
  white-space: normal;
  vertical-align: center;
}
.item-right img {
  width: 50px;
}
</style>
