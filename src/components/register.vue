<template>
    <div id="register">
        <myhead></myhead>
				<div class="box">
				</div>
        <form id="registerData" name="registerData">
            <div class="name inputBox">
              <p>用户名:</p><input type="text" v-model="user.name" name="name">
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
        <button @click="register">注册</button>  
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
      let upData = qs.stringify(this.user);
      console.log(upData);
      axios
        .post(url.register, upData)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
