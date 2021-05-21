<template>
  <div class="pwd">
    <nav-bar>
      <div slot="left" class="left" @click="go">
        <img src="~assets/img/common/back.svg" /></div
    >
    <div slot="center" class="center">修改密码</div></nav-bar>
    <div class="text">
      <div><span>旧密码:</span><input type="text" v-model="Ppwd" /></div>
      <div><span>新密码:</span><input type="text" v-model="Npwd" /></div>
      <div><span>确认密码:</span><input type="text" v-model="Qpwd" /></div>
      <div @click="confirm(Ppwd,Npwd,Qpwd,user)"><span class="cofir">确认</span></div>
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import { updateUser } from "network/signIn"
export default {
  name: "pwd",
  data() {
    return {
      Ppwd: null,
      Npwd: null,
      Qpwd: null,
    };
  },
  props: {
    user: Object,
    default() {
      return {}
    }
  },
  components: {
    NavBar,
  },
  methods: {
    go() {
      this.$emit("go");
    },
    confirm(Ppwd,Npwd,Qpwd,user) {
      if(Ppwd === user.uPwd) {
        if(Npwd === Qpwd) {
          updateUser(user.uName,Npwd)
          alert("更新成功");
          this.$router.push('/signin/login');
        }else {
          alert("新密码有错误")
        }
      }else {
        alert("旧密码错误")
      }
    }
  },
};
</script>

<style  scoped>
.pwd {
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
.text {
  width: 100%;
  height: 200px;
  background-color: aqua;
  text-align: center;
}

.text div span {
  line-height: 50px;
}
.cofir {
  padding: 10px 20px;
  border-radius: 15px;
  background-color: rgba(0, 0, 0, .2);
}
</style>
