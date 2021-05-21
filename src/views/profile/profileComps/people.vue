<template>
  <div class="people">
    <div class="img">
      <img :src="user.uImg" alt=""/>
    </div>
    <div class="text"><span>{{user.uName}}</span></div>
  </div>
</template>

<script>
export default {
  name: "People",
  data() {
    return {
      
      
    };
  },
  props: {
    user: {
      type: Object,
      default() {
        return {};
      },
    },
  }
  
};
</script>

<style  scoped>
.people {
  position: absolute;
  width: 60%;
  height: 35%;
  /* background-color: yellow; */

  margin: 0 64px;
  margin-top: 20px;
  text-align: center;
}
.img {
  margin: 10px 0;
}
.img img{
  width: 135px;
  border-radius: 50%;
}
.text {
  font-size: 24px;
}
</style>
