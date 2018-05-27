<template>
    <div id="login">
      <myhead></myhead>
      <div class="loginBox">
        <p class="title">使用登录名登录</p> 
        <div class="name">
          用户: <input type="text" v-model="user.name">
        </div>
        <div class="pw">
          密码: <input type="text" v-model="user.pw">
        </div>
        <button @click="login" class="btn">登录</button>
      </div>

    </div>
</template>

<script>
import axios from "axios";
import qs from "qs";
import myhead from "./common/header.vue";
const url = require("../url").url 
export default {
  name: "Login",
  components: {
    myhead
  },
  data() {
    return {
      user: {
        name: "",
        pw: ""
      }
    };
  },
  methods: {
    login() {
      let self = this
      if (!this.user.name) {
        alert("请填写用户名")
      }else if (!this.user.pw) {
        alert("请填写密码")
      }else{
        // console.log(this.user);
        let upData = qs.stringify(this.user)
        axios
          .post(url.login, upData)
          .then(function(res) {
            if (res.data.message === 'no user matched') {            
              alert("该用户还未注册或密码错误")
            }else{            
              alert('登陆成功')
              sessionStorage.setItem("user", res.data.data.name); 
              sessionStorage.setItem("cname", res.data.data.contact_name); 
              sessionStorage.setItem("cphone", res.data.data.contact_phone); 
              sessionStorage.setItem("email", res.data.data.email);               
              self.$router.push('/')
            }
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
.loginBox{
  box-sizing: border-box;
  font-size: 14px;
  text-align: left;
  padding: 10px 20px;
  margin: 50px auto;
  width: 450px;
  height: 260px;
  border: 4px solid #dadada;
}
.title{
  font-weight: 600;
  border-bottom: 1px solid #dadada;
  height: 30px;
  line-height: 30px;
  margin-bottom: 25px;
}
.name,.pw{
  padding: 0 10% ;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
}
.name>input,.pw>input{
  box-sizing: border-box;
  width: 248px;
  padding: 10px;
  border: 1px #d1ccc8 solid;
  height: 30px;
  line-height: 30px;
}
.btn{
  border: 0;
  color: #fff;
  background-color: #DD0011;
  width: 248px;
  height: 30px;
  line-height: 30px;
  text-align:center;
  margin-left: 80px;
  margin-top: 10px;
}
</style>
