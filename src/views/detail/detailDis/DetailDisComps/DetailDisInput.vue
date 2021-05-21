<template>
  <div class="detail-dis-input">
    <input
      class="input"
      v-model="text"
      placeholder="我来说一句"
      type="search"
      @focus="disIinput"
    />
    <detail-dis-input-item
      :class="{ active: isActive }"
      @data="data"
      @publish="publish(mId, uName, mName, uImg,mSrc, dDate, dText)"
    >
    </detail-dis-input-item>
  </div>
</template>

<script>
import DetailDisInputItem from "./DetailDisInputItem";

import { getDetail, addDetailDiscuss } from "network/detail";
import { getUserName } from "network/signIn"
export default {
  name: "DetailDisInput",
  components: {
    DetailDisInputItem,
  },
  data() {
    return {
      text: "",
      isActive: false,
      // dDate:new Date(),
      dDate: null,
      dText: null,
      mId: this.$route.params.id,
      uName: this.$store.state.uName,
      mName: null,
      mSrc:null,
      uImg:null
    };
  },
  props: {},
  updated() {
    var aData = new Date();
    // console.log(aData)
    this.dDate =
      aData.getFullYear() +
      "-" +
      (aData.getMonth() + 1) +
      "-" +
      aData.getDate();
  },
  created() {
    this.getDetail(this.mId);
    this.getUserName(this.uName);
  },
  methods: {
    disIinput() {
      this.isActive = !this.isActive;
    },
    data(notedata) {
      this.dText = notedata;
    },
    getDetail(name) {
      getDetail(name).then((res) => {
        this.mName = res[0].mText;
        this.mSrc = res[0].mSrc;
      });
    },
    getUserName(name) {
      getUserName(name).then( res => {
        // console.log(res)
        this.uImg = res[0].uImg;
      })
    },
    publish(mId, uName, mName, uImg,mSrc, dDate, dText) {
      console.log(dText);
      if (dText === null) {
        alert("请添加内容");
      } else {
        addDetailDiscuss(mId, uName, mName, uImg,mSrc, dDate, dText).then((res) => {
          alert("恭喜发布成功");
        });
      }
      this.text = "";
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style  scoped>
.detail-dis-input input {
  width: 70%;
  line-height: 25px;
  outline: none;
  border-radius: 25px;
  border: 1px;
  background-color: rgba(100, 100, 100, 0.2);
}
.active {
  transition: all 500ms linear;
  height: 180px;
}
</style>
