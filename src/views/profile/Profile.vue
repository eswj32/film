<template>
  <div id="profile">
    <nav-bar>
      <div slot="left" class="left" @click="goBack">
        <img src="~assets/img/common/back.svg" />
      </div>
      <div slot="right" class="right" @click="search(searchText)">
        <img src="~assets/img/common/set.svg" />
      </div>
    </nav-bar>
    <people :user="user"></people>
    <div class="set">
      <div @click="pwd">修改密码</div>
      <div @click="coll">我的收藏</div>
      <div @click="comm">我的评论</div>
      <div @click="deleteU(user.uId)">删除用户</div>
    </div>
    <info v-show="isActive1"></info>
    <pwd v-show="isActive2" @go="go" :user="user"></pwd>
    <coll v-show="isActive3" @collec="collec" :store="store"></coll>
    <comm v-show="isActive4" @commec="commec" :nis="nis"></comm>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import People from "./profileComps/people";
import Coll from "./profileComps/coll";
import Comm from "./profileComps/comm";
import Info from "./profileComps/info";
import Pwd from "./profileComps/pwd";
import { getUserName, deleteUser } from "network/signIn";
import { getCollection } from "network/collection";
import { getDiscess } from "network/detail";

export default {
  name: "Profile",
  data() {
    return {
      isActive1: false,
      isActive2: false,
      isActive3: false,
      isActive4: false,
      user: {},
      // mid: [],
      uId: this.$store.state.uId,
      uName: this.$store.state.uName,
      nis: [],
      store: [],
    };
  },
  components: {
    NavBar,
    People,
    Coll,
    Comm,
    Info,
    Pwd,
  },
  created() {
    this.getUserName(this.uName);
    this.getCollection(this.uId);
    this.getDiscess(this.uName);
  },
  methods: {
    getUserName(uName) {
      getUserName(uName).then((res) => {
        this.user = res[0];
      });
    },
    getDiscess(name) {
      getDiscess(name).then((res) => {
        // console.log(res);
        this.nis = res;
      });
    },
    getCollection(id) {
      getCollection(id).then((res) => {
        // console.log(res)
        this.store = res;
      });
    },
    go() {
      this.isActive2 = !this.isActive2;
    },

    coll() {
      this.isActive3 = !this.isActive3;
    },
    pwd() {
      this.isActive2 = !this.isActive2;
    },
    collec() {
      this.isActive3 = !this.isActive3;
    },
    comm() {
      this.isActive4 = !this.isActive4;
    },
    commec() {
      this.isActive4 = !this.isActive4;
    },
    goBack() {
      // this.$router.go(-1);
      this.$router.push("/home");
    },
    //删除收藏
    collection() {},
    //删除用户
    deleteU(id) {
      deleteUser(id).then((res) => {
        alert("删除用户成功");
        this.$router.push("/signin/login");
      });
    },
  },
};
</script>

<style  scoped>
#profile {
  position: relative;
  height: 100vh;
}
.left,
.right {
  position: relative;
  top: 6px;
}
.left img,
.right img {
  width: 20px;
}
.set {
  position: absolute;
  bottom: 60px;
  /* padding-left:10px; */
}
.set > div {
  width: 320px;
  font-size: 24px;
  margin: 15px 0px;
  box-shadow: 0px -1px 1px rgba(100, 100, 100, 0.2);
}
</style>

