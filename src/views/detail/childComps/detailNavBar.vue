<template>
  <div class="detailNavBar" @click="backClick">
    <img src="~assets/img/common/back.svg"/>
  </div>
</template>

<script>
export default {
  name: "DetailNavBar",
  data() {
    return {};
  },
  methods: {
    backClick() {
      this.$router.back();
    }
  }
};
</script>

<style  scoped>
.detailNavBar {
  background-color: white;
}
.detailNavBar img {
  position: fixed;
  left: 10px;
  top: 10px;
}
</style>
