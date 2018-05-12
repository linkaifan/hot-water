<template>
    <div id="apply">
        <myhead></myhead>
        <div class="bar">
	  		<router-link to="/">Hot spring首页</router-link>
      		<span>></span>
      		<router-link to="/apply">合作登记申请</router-link>
		</div>
		<div class="box">
			<p class="title">合作登记申请</p>
			<div class="content">
				<div class="h">
					请填写以下申请信息，填写完成后按下"登记申请"按钮提交信息。
				</div>
				<form action="post" name="aForm">
					<div class="inputBox">
						<p>公司名称</p>
						<input type="text" name="cname"
						v-model="updata.cname">
					</div>
					<div class="inputBox">
						<p>公司地址</p>
						<input type="text" name="address"
						v-model="updata.address">
					</div>
					<div class="inputBox">
						<p>联系人姓名</p>
						<input type="text" name="name"
						v-model="updata.name">
					</div>
					<div class="inputBox">
						<p>联系人电话</p>
						<input type="text" name="phone"
						v-model="updata.phone">
					</div>
					<div class="inputBox">
						<p>合作产品类别</p>
						<input type="text" name="type"
						v-model="updata.type">
					</div>
					<div class="inputBox">
						<p>合作产品简介</p>
						<input type="text" name="intro"
						v-model="updata.intro">
					</div>
					<div class="inputBox">
						<p>上传资质（营业执照）</p>
						<input type="file" @change="getFile($event)">
					</div>
					<div class="inputBox">
						<p>公司经营内容</p>
						<select v-model="updata.content" name="content">
							<option disabled value="">请选择</option>
							<option>大学·科学院·政府机构</option>
							<option>国营公司</option>
							<option>国内民营公司</option>
							<option>外资公司</option>
						</select>
					</div>
					<div class="inputBox">
						<p>公司经营性质</p>
						<select v-model="updata.property" name="property">
							<option disabled value="">请选择</option>
							<option>用户</option>
							<option>经销商</option>
						</select>
					</div>
					<div class="inputBox">
						<p>公司资金构成</p>
						<select v-model="updata.fund" name="fund">
							<option disabled value="">请选择</option>
							<option>外资</option>
							<option>中资</option>
							<option>中外合资</option>
						</select>
					</div>
				</form>
				<div class="btn" @click="apply">登记申请</div>
			</div>
		</div>
    </div>
</template>

<script>
import myhead from "./common/header.vue";
import axios from "axios";
import qs from "qs";
const url = require("../url").url 
export default {
  name: "Apply",
  components: {
    myhead
  },
  data() {
    return {
		updata:{
			cname:'',
			address:'',
			name:'',
			phone:'',
			type:'',
			intro:'',
			content:'',
			property:'',
			fund:'',
			license:''
		}
	};
  },
  methods: {
	  getFile(event) {  
            this.updata.license = event.target.files[0];  
            console.log(this.updata.license);  
      }, 
	  apply() {
		let self = this;
		if (!this.updata.cname || !this.updata.address || !this.updata.name 
		|| !this.updata.phone || !this.updata.type || !this.updata.intro
		|| !this.updata.content || !this.updata.property || !this.updata.fund
		|| !this.updata.license) {
			alert("请完善信息")
		}
		else{
			let formData = new FormData();
			formData.append('cname', this.updata.cname);  
			formData.append('address', this.updata.address);  
			formData.append('name', this.updata.name); 
			formData.append('phone', this.updata.phone); 
			formData.append('type', this.updata.type); 
			formData.append('intro', this.updata.intro); 
			formData.append('content', this.updata.content); 
			formData.append('property', this.updata.property); 
			formData.append('fund', this.updata.fund); 
			formData.append('license', this.updata.license); 
			axios
				.post(
				url.apply,
				formData,
				{
					headers: {  
						'Content-Type': 'multipart/form-data'  
					}  
				}
				)
				.then(function(res) {
					alert("申请成功，请耐心等待回复")
					console.log(res);
					self.$router.push('/')
				})
				.catch(function(error) {
				console.log(error);
				});
		}
    }
  }
};
</script>
<style scoped>
.bar{
  height: 30px;
  line-height: 30px;
  text-align: left;
  font-size: 14px;
  padding: 0 10%;
  margin: 20px 0;
}
.bar>span{
  margin: 0 10px;
}
.box{
	padding: 0 10%;
	margin-bottom: 50px;
}
.title{
	height: 40px;
	color: #fff;
	line-height: 40px;
	background-color: #E70012;
}
.content{
	box-sizing: border-box;
	background-color: #EEEEEE;
	height: 900px;
	padding: 30px 50px;
}
.h{
	border-bottom: 1px #ccc dotted;
	line-height: 40px;
	height: 40px;
	margin-bottom: 50px;
	text-align: left;
	font-size: 14px;
}
.inputBox>p{
	width: 200px;
	text-align: left;
}
.inputBox>input{
	width: 420px;
	height: 32px;
	box-sizing: border-box;
}
.inputBox{
	box-sizing: border-box;
	display: flex;
	margin: 20px 0; 
	align-items: center;
	padding-left: 100px;
}
.btn{
	margin: 50px auto;
	width: 156px;
	height: 40px;
	line-height: 40px;
	color: #fff;
	background-color: #CD000F;
}


</style>
