<template>
    <div id="register">
      <myhead></myhead>
      <div class="bar">
	  		<router-link to="/">Yechine首页</router-link>
      		<span>></span>
      		<router-link to="/register">用户注册</router-link>
	    </div>
      <div class="box">
        <p class="title">用户注册</p>
        <div class="content">
          <form id="registerData" name="registerData">
            <div class="name inputBox">
              <p>用户名:</p>
              <input type="text" v-model="user.name" name="name">
            </div>
            <div class="pw inputBox">
              <p>密码:</p><input type="text" v-model="user.pw" name="pw">
            </div>
            <div class="contact-name inputBox">
              <p> 联系人: </p><input type="text" v-model="user.cname" name="cname">
            </div>
            <div class="phone inputBox">
              <p> 手机:</p> <input type="text" v-model="user.cphone" name="cphone">
            </div>
            <div class="email inputBox">
              <p>邮箱: </p><input type="text" v-model="user.email" name="email">
            </div>          
          </form> 
          <button @click="register" class="btn">注册</button>  
        </div>
      </div>  
    </div>
</template>

<script>
import axios from "axios";
import qs from "qs";
import myhead from "./common/header.vue";
const url = require("../url").url;
export default {
  name: "Register",
  components: {
    myhead
  },
  data() {
    return {
      user: {
        name: "",
        pw: "",
        cname: "",
        cphone: "",
        email: ""
      }
    };
  },
  methods: {
    register() {
      let self = this
      if (
        !this.user.name ||
        !this.user.pw ||
        !this.user.cname ||
        !this.user.email ||
        !this.user.cphone
      ) {
        alert("请完善信息")
      }else{
        let upData = qs.stringify(this.user);
        // console.log(upData);
        axios
          .post(url.register, upData)
          .then(function(response) {
            // console.log(response);
            alert("注册成功")
            self.$router.push("/login");
          })
          .catch(function(error) {
            console.log(error);
          });
      }

    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bar {
  height: 30px;
  line-height: 30px;
  text-align: left;
  font-size: 14px;
  padding: 0 10%;
  margin: 20px 0;
}
.bar > span {
  margin: 0 10px;
}
.box {
  padding: 0 10%;
  margin-bottom: 50px;
}
.title {
  height: 40px;
  color: #fff;
  line-height: 40px;
  background-color: #e70012;
}
.content {
  box-sizing: border-box;
  background-color: #eeeeee;
  height: 600px;
  padding: 30px 50px;
}
.h {
  border-bottom: 1px #ccc dotted;
  line-height: 40px;
  height: 40px;
  margin-bottom: 50px;
  text-align: left;
  font-size: 14px;
}
.inputBox > p {
  width: 200px;
  text-align: left;
}
.inputBox > input {
  width: 420px;
  height: 32px;
  box-sizing: border-box;
}
.inputBox {
  box-sizing: border-box;
  display: flex;
  margin: 20px 0;
  align-items: center;
  padding-left: 100px;
}
.btn {
  border: 0;
  margin: 50px auto;
  width: 156px;
  height: 40px;
  line-height: 40px;
  color: #fff;
  background-color: #cd000f;
}
</style>
