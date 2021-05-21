<template>
<div class="content">
  <div class="signIn">
    <div>
      <router-link :to="{ name: 'login' }"
        ><div class="signin">登录</div></router-link
      >
    </div>
    <div>
      <router-link :to="{ name: 'register' }"
        ><div class="register">注册</div></router-link
      >
    </div>
    <router-view></router-view>
  </div>
  </div>
</template>

<script>

export default {
  name: "SignIn",
  components: {},
  data() {
    return {};
  },
  
};
</script>

<style  scoped>
.content {
  position: relative;
  top: 0;
  width: 100%;
  height: 568px;
  background-image: url('bc.jpg');
  z-index: 888;
}
.signIn {
  position: fixed;
  top: 120px;
  left: 0px;
  right: 0px;
  bottom: 180px;
  width: 80%;
  margin: auto;
  background-color: rgba(193, 210, 240, 0.8);
  text-align: center;
  font-size: 15px;
  border-radius: 15px;
  padding: 15px;
}
.signin {
  width: 50%;
  float: left;
}
</style>
