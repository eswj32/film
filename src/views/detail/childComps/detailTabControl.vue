<template>
  <div class="detailTab">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "DetailTabControl",
  data() {
    return {};
  },
};
</script>

<style  scoped>
.detailTab {
  display: flex;
  justify-content: space-around;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.2);
  width: 100%;
  background-color: white;
}
</style>
