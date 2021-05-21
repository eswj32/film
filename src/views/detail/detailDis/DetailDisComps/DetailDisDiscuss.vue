<template>
  <div class="discuss">
    <div class="left"><img @load="image" :src="Discuss.uImg" /></div>
    <div class="right">
      <div class="content">
        <div class="content-text">
          <p>{{ Discuss.uName }}</p>
          <p>{{ Discuss.dDate }}</p>
        </div>
        <div class="content-fire" v-show="fire">
          <img src="~assets/img/detail/fire.svg" />
        </div>
      </div>
      <div class="text">
        {{ Discuss.dText }}
      </div>
      <div class="right-img">
        <div v-if="isImg" @click="imgAppear"><img src="~assets/img/detail/fabulous.svg" /></div>
        <div v-else @click="imgAppear"><img src="~assets/img/detail/fabulous2.svg" /></div>
        <div>{{Discuss.dFab}}</div>
        <div class="image"><img src="~assets/img/detail/spot.svg" /></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailDisDiscuss",
  data() {
    return {
      fire: false,
      isImg: true,
    };
  },
  props: {
    Discuss: Object,
    default() {
      return {};
    },
  },
  mounted() {
    if (this.Discuss.dFab > 10) {
      this.fire = true;
    }
  },
  methods: {
    imgAppear() {
      this.isImg = !this.isImg;
    },
    image() {
      this.$bus.$emit('itemImage')
    },
  }
};
</script>

<style  scoped>
.discuss {
  display: flex;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.2);
  padding: 10px 0;
  /* background-color: white; */
}
.left {
  flex: 0.2;
}
.left img {
  width: 40px;
  border-radius: 50%;
}
.right {
  flex: 0.7;
}
.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.content-text > p:nth-child(1) {
  color: #ff3300;
}
.content-text > p:nth-child(2) {
  font-size: 3px;
  color: rgba(128, 138, 135, 0.5);
}
.content-fire img {
  width: 20px;
}
.text {
  margin-top: 10px;
  width: 100%;
  white-space: normal;
  word-break: break-all;
  word-wrap: break-word;
}
.right-img {
  display: flex;
  justify-content: flex-end;
}
.right-img img {
  width: 20px;
}
.image {
  margin-left: 10px;
}
</style>
