<template>
    <div id="me">
      <myhead></myhead>
      <div class="bar">
	  		<router-link to="/">Yechine首页</router-link>
      		<span>></span>
      		<router-link to="/me">基础信息</router-link>
	    </div>
      <div class="box">
        <p class="title">基础信息</p>
        <div class="content">
          <div class="h">
            此为用户注册预留信息。
          </div>
          <div class="name inputBox">
            <p>用户名: </p>    
            <p class="info">{{user}}</p>                        
          </div>
          <div class="contact-name inputBox">
            <p> 联系人姓名: </p>
            <p class="info">{{cname}}</p>
          </div>
          <div class="phone inputBox">
            <p> 联系人手机:</p>
            <p class="info">{{cphone}}</p>
          </div>
          <div class="email inputBox">
            <p>联系人邮箱: </p>
            <p class="info">{{email}}</p>
          </div>          
        </div>
      </div>  
    </div>
</template>

<script>
import myhead from "./common/header.vue";
export default {
  name: "Me",
  components: {
    myhead
  },
  data() {
    return {
			user:'',
			cphone:'',
			cname:'',
			email:''
		};
	},
	mounted: function() {
    this.user = sessionStorage.getItem('user')
    this.cname = sessionStorage.getItem('cname')
    this.cphone = sessionStorage.getItem('cphone')
    this.email = sessionStorage.getItem('user')
  },
  methods: {}
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
  padding: 50px 50px;
}
.h{
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
/* .inputBox > input */
p.info {
  width: 420px;
  height: 32px;
	line-height: 32px;
  box-sizing: border-box;
	background-color: #fff;
	padding-left: 15px;
  border: 1px solid rgb(197, 197, 197);
}
.inputBox {
  box-sizing: border-box;
  display: flex;
  margin: 20px 0;
  align-items: center;
  padding-left: 100px;
}
</style>
