<template>
  <div class="detail-dis-input-item">
    <p>写评论</p>
    <textarea class="input" placeholder="点击这里写评论" v-model="notedata"></textarea>
    <div @click="publish"><span>发表</span></div>
  </div>
</template>

<script>
export default {
  name:'DetailDisInputItem',
  data () {
    return {
      notedata: null,
    }
  },
  methods: {
    publish() {
      this.$emit("data",this.notedata);
      this.$emit("publish");
    }
  }
}
</script>

<style  scoped>
.detail-dis-input-item {
  position: fixed;
  bottom: 0;
  width: 97%;
  height: 0;
  transition: all 500ms linear;
  background-color: white;
  margin-right: 5px;
  padding: 0px 30px;
  border-radius: 5px;
  
}
.detail-dis-input-item>p {
  font-weight: 600;
  text-align: left;
}
.detail-dis-input-item textarea {
  width: 98%;
  height: 80px;
  border-radius: 5px;
  background-color: rgba(100, 100, 100, 0.1);
  outline: none;
}
.detail-dis-input-item>div {
  text-align: right;
  line-height: 20px;
  /* border: 1px solid red; */
}
.detail-dis-input-item>div span {
  padding: 7px 10px;
  /* border: 1px solid red; */
  background-color: rgba(100, 100, 100, 0.1);
  border-radius: 18px;
}
</style>
