<template>
  <div class="login">
    <!-- <H2>登录</H2> -->
    <div class="longin-boder">
      <div class="image"><img src="~assets/img/signin/user.svg" /></div>
      <input
        class="input"
        v-model="uName"
        type="text"
        placeholder="输入用户名"
      />
    </div>
    <!--End用户名输入框-->
    <div class="longin-boder">
      <div class="image"><img src="~assets/img/signin/pwd.svg" /></div>
      <input
        class="input"
        v-model="uPwd"
        type="password"
        placeholder="输入密码"
      />
    </div>
    <!--End密码输入框-->
    <div class="button" @click="loginInfo(uName)">登录</div>
  </div>
</template>

<script>
import { getUserName } from "network/signIn";
export default {
  name: "Login",
  data() {
    return {
      uName: null,
      uPwd: null,
      user: [],
    };
  },
  created() {
  },

  methods: {
    //获取固定用户名用户信息
    loginInfo(name) {
      getUserName(name).then((res) => {
        // console.log(res[0].uPwd);
        this.user = res[0];
        if(res[0].uPwd === this.uPwd) {
          this.$store.commit('setName',res[0].uName)
          this.$store.commit('setId',res[0].uId)
          this.$router.push('/home')
          
        }else {
          alert('密码错误');
        }
      });
    },
  },
};
</script>

<style  scoped>
.login {
  width: 100%;
  margin-top: 10%;
  text-align: center;
}
.longin-boder {
  width: 80%;
  height: 40px;
  margin-top: 10px;
  margin-left: 10%;
  line-height: 40px;
  text-align: center;
  border: 1px solid #dddddd;
  border-radius: 5px;
  background-color: #efefef;
}
.image {
  width: 10%;
  margin-top: 5px;
  padding-left: 5px;
  float: left;
  text-align: right;
}
.image img {
  width: 18px;
}
.input {
  width: 80%;
  float: left;
  margin-left: 5%;
  height: 37px;
  line-height: 37px;
  border: 0px;
  color: #333333;
  font-size: 16px;
  background-color: #efefef;
  outline: none;
}

.button {
  height: 40px;
  width: 80%;
  margin-top: 20px;
  margin-left: 10%;
  font-size: 16px;
  font-family: "微软雅黑";
  font-weight: bold;
  line-height: 38px;
  border-radius: 5px;
  color: #ffffff;
  background-color: #37b4ca;
}

.button:active {
  background-color: #37a3b9;
}
</style>
