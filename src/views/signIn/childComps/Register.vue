<template>
  <div>
    <div class="register">
      <!-- <H2>登录</H2> -->
      <div class="register-boder">
        <div class="image"><img src="~assets/img/signin/user.svg" /></div>
        <input
          class="input"
          v-model="uName"
          type="text"
          placeholder="输入用户名"
        />
      </div>
      <!--End用户名输入框-->
      <div class="register-boder">
        <div class="image"><img src="~assets/img/signin/pwd.svg" /></div>
        <input
          class="input"
          v-model="uPwd"
          type="password"
          placeholder="输入密码"
        />
      </div>
      <!--End用户名输入框-->
      <div class="register-boder">
        <div class="image"><img src="~assets/img/signin/pwd.svg" /></div>
        <input
          class="input"
          v-model="uPwdQ"
          type="password"
          placeholder="确认密码"
        />
      </div>
      <!--End密码输入框-->
      <div class="button" @click="registerInfo(uName, uPwd, uPwdQ)">注册</div>
    </div>
  </div>
</template>

<script>
import { getUserName, addUser } from "network/signIn";

export default {
  name: "Register",
  data() {
    return {
      user: "",
      uName: null,
      uPwd: null,
      uPwdQ: null,
    };
  },
  created() {},
  methods: {
    registerInfo(uName, uPwd, uPwdQ) {
      getUserName(uName).then((res) => {
        if (res.length != 0) {
          alert("用户名重复");
        } else if (uPwd !== uPwdQ) {
          alert("密码不正确");
        } else if (uPwd === uPwdQ) {
          addUser(uName, uPwd).then((res) => {
            // console.log(res)
            alert("注册成功");
             this.$router.push('/signin/login')
          });
        }
      });
    },
  },
};
</script>

<style  scoped>
.register {
  width: 100%;
  margin-top: 10%;
  text-align: center;
}
.register-boder {
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
